/**
 * Signed admin session tokens. Uses Web Crypto only, so it runs in both
 * proxy.ts and server code.
 *
 * Token format: "<expiresAtMs>.<hex HMAC-SHA256 of expiresAtMs>"
 */

export const ADMIN_COOKIE = "scarci_admin";
export const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 7; // 7 days

function getSecret(): string | null {
  const secret = process.env.ADMIN_SESSION_SECRET || process.env.ADMIN_PASSWORD;
  return secret && secret.length > 0 ? secret : null;
}

export function isAdminConfigured(): boolean {
  return Boolean(process.env.ADMIN_PASSWORD);
}

async function hmacHex(message: string, secret: string): Promise<string> {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    encoder.encode(message)
  );
  return Array.from(new Uint8Array(signature))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
}

export async function createSessionToken(): Promise<string> {
  const secret = getSecret();
  if (!secret) throw new Error("ADMIN_PASSWORD is not set");
  const expiresAt = Date.now() + SESSION_MAX_AGE_SECONDS * 1000;
  return `${expiresAt}.${await hmacHex(String(expiresAt), secret)}`;
}

export async function verifySessionToken(
  token: string | undefined | null
): Promise<boolean> {
  const secret = getSecret();
  if (!secret || !token) return false;
  const [expiresAt, signature] = token.split(".");
  if (!expiresAt || !signature) return false;
  if (!/^\d+$/.test(expiresAt) || Number(expiresAt) < Date.now()) return false;
  const expected = await hmacHex(expiresAt, secret);
  return safeEqual(signature, expected);
}

/** Constant-time password check (compares HMACs, not raw strings). */
export async function checkPassword(candidate: string): Promise<boolean> {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) return false;
  const salt = "scarci-admin-password-check";
  const [a, b] = await Promise.all([
    hmacHex(candidate, salt),
    hmacHex(password, salt),
  ]);
  return safeEqual(a, b);
}
