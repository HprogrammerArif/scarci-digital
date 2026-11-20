import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, LogOut, AlertTriangle } from "lucide-react";
import { AdminNav } from "@/components/admin/admin-nav";
import { logoutAction } from "@/app/admin/actions";
import { getStorageMode } from "@/lib/store";

function StorageBanner() {
  const mode = getStorageMode();
  if (mode === "redis") return null;
  return (
    <div className="mb-6 flex items-start gap-3 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm text-amber-200">
      <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
      {mode === "file" ? (
        <p>
          Local development mode: changes are saved to <code>.data/store.json</code> on
          this computer only. On Vercel, add the <strong>Upstash for Redis</strong>{" "}
          integration so edits and leads are stored permanently.
        </p>
      ) : (
        <p>
          Storage is not configured, so edits can&apos;t be saved and leads are only
          written to the server logs. In Vercel, go to <strong>Storage → Upstash for Redis</strong>,
          connect it to this project, and redeploy.
        </p>
      )}
    </div>
  );
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="lg:flex min-h-screen">
      <aside className="lg:w-60 lg:min-h-screen lg:border-r border-b lg:border-b-0 border-white/10 bg-[#03070E] p-4 space-y-4 lg:space-y-6 shrink-0">
        <div className="flex items-center justify-between lg:block">
          <Link href="/admin" className="block">
            <Image
              src="/assets/projects/Logo-scarcidigital.svg"
              alt="Scarci Digital"
              width={140}
              height={34}
              className="h-8 w-auto"
            />
          </Link>
          <div className="flex items-center gap-2 lg:hidden">
            <form action={logoutAction}>
              <button className="p-2 rounded-lg text-slate-400 hover:text-white" aria-label="Sign out">
                <LogOut className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
        <Suspense>
          <AdminNav />
        </Suspense>
        <div className="hidden lg:block pt-6 border-t border-white/10 space-y-1">
          <a
            href="/"
            target="_blank"
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-white/5"
          >
            <ExternalLink className="w-4 h-4" />
            View website
          </a>
          <form action={logoutAction}>
            <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-white/5 cursor-pointer">
              <LogOut className="w-4 h-4" />
              Sign out
            </button>
          </form>
        </div>
      </aside>
      <main className="flex-1 min-w-0 p-4 sm:p-8">
        <StorageBanner />
        <Suspense fallback={<p className="text-slate-500 text-sm">Loading…</p>}>
          {children}
        </Suspense>
      </main>
    </div>
  );
}
