/**
 * Tiny key-value store used by the admin dashboard and lead capture.
 *
 * Production: Upstash Redis over its REST API (add the "Upstash for Redis"
 * integration on Vercel — it sets KV_REST_API_URL / KV_REST_API_TOKEN).
 * Local development: falls back to a JSON file in `.data/store.json`.
 *
 * No SDK needed — Upstash accepts Redis commands as JSON over HTTPS.
 */
import { promises as fs } from "fs";
import path from "path";

type RedisCommand = (string | number)[];

const REDIS_URL =
  process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL || "";
const REDIS_TOKEN =
  process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN || "";

const FILE_PATH = path.join(process.cwd(), ".data", "store.json");

export type StorageMode = "redis" | "file" | "unconfigured";

export function getStorageMode(): StorageMode {
  if (REDIS_URL && REDIS_TOKEN) return "redis";
  // Vercel's filesystem is read-only, so a file store would silently lose data.
  if (process.env.VERCEL) return "unconfigured";
  return "file";
}

export class StorageNotConfiguredError extends Error {
  constructor() {
    super(
      "Storage is not configured. Add the Upstash for Redis integration in Vercel (or set KV_REST_API_URL and KV_REST_API_TOKEN) so changes can be saved."
    );
    this.name = "StorageNotConfiguredError";
  }
}

async function redis<T = unknown>(command: RedisCommand): Promise<T> {
  const res = await fetch(REDIS_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${REDIS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(command),
    cache: "no-store",
  });
  const data = (await res.json()) as { result?: T; error?: string };
  if (!res.ok || data.error) {
    throw new Error(`Redis error: ${data.error || res.statusText}`);
  }
  return data.result as T;
}

// ---------- File fallback (local development only) ----------

type FileData = {
  strings: Record<string, string>;
  hashes: Record<string, Record<string, string>>;
};

async function readFileStore(): Promise<FileData> {
  try {
    const raw = await fs.readFile(FILE_PATH, "utf8");
    const parsed = JSON.parse(raw) as Partial<FileData>;
    return { strings: parsed.strings ?? {}, hashes: parsed.hashes ?? {} };
  } catch {
    return { strings: {}, hashes: {} };
  }
}

async function writeFileStore(data: FileData): Promise<void> {
  await fs.mkdir(path.dirname(FILE_PATH), { recursive: true });
  await fs.writeFile(FILE_PATH, JSON.stringify(data, null, 2), "utf8");
}

// ---------- Public API ----------

export async function kvGetJSON<T>(key: string): Promise<T | null> {
  const mode = getStorageMode();
  if (mode === "unconfigured") return null;
  const raw =
    mode === "redis"
      ? await redis<string | null>(["GET", key])
      : (await readFileStore()).strings[key] ?? null;
  return raw ? (JSON.parse(raw) as T) : null;
}

export async function kvSetJSON(key: string, value: unknown): Promise<void> {
  const mode = getStorageMode();
  if (mode === "unconfigured") throw new StorageNotConfiguredError();
  const raw = JSON.stringify(value);
  if (mode === "redis") {
    await redis(["SET", key, raw]);
    return;
  }
  const data = await readFileStore();
  data.strings[key] = raw;
  await writeFileStore(data);
}

export async function kvDelete(key: string): Promise<void> {
  const mode = getStorageMode();
  if (mode === "unconfigured") throw new StorageNotConfiguredError();
  if (mode === "redis") {
    await redis(["DEL", key]);
    return;
  }
  const data = await readFileStore();
  delete data.strings[key];
  await writeFileStore(data);
}

export async function hashSetJSON(
  key: string,
  field: string,
  value: unknown
): Promise<void> {
  const mode = getStorageMode();
  if (mode === "unconfigured") throw new StorageNotConfiguredError();
  const raw = JSON.stringify(value);
  if (mode === "redis") {
    await redis(["HSET", key, field, raw]);
    return;
  }
  const data = await readFileStore();
  data.hashes[key] = { ...(data.hashes[key] ?? {}), [field]: raw };
  await writeFileStore(data);
}

export async function hashGetJSON<T>(
  key: string,
  field: string
): Promise<T | null> {
  const mode = getStorageMode();
  if (mode === "unconfigured") return null;
  const raw =
    mode === "redis"
      ? await redis<string | null>(["HGET", key, field])
      : (await readFileStore()).hashes[key]?.[field] ?? null;
  return raw ? (JSON.parse(raw) as T) : null;
}

export async function hashGetAllJSON<T>(key: string): Promise<T[]> {
  const mode = getStorageMode();
  if (mode === "unconfigured") return [];
  if (mode === "redis") {
    // HGETALL returns a flat [field, value, field, value, ...] array.
    const flat = await redis<string[]>(["HGETALL", key]);
    const values: T[] = [];
    for (let i = 1; i < flat.length; i += 2) {
      values.push(JSON.parse(flat[i]) as T);
    }
    return values;
  }
  const hash = (await readFileStore()).hashes[key] ?? {};
  return Object.values(hash).map((raw) => JSON.parse(raw) as T);
}

export async function hashDelete(key: string, field: string): Promise<void> {
  const mode = getStorageMode();
  if (mode === "unconfigured") throw new StorageNotConfiguredError();
  if (mode === "redis") {
    await redis(["HDEL", key, field]);
    return;
  }
  const data = await readFileStore();
  if (data.hashes[key]) {
    delete data.hashes[key][field];
    await writeFileStore(data);
  }
}
