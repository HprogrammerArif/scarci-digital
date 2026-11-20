import { Suspense } from "react";
import Image from "next/image";
import { LoginForm } from "./login-form";

export const metadata = { title: "Sign in" };

type SearchParams = Promise<{ next?: string }>;

async function LoginFormWithRedirect({ searchParams }: { searchParams: SearchParams }) {
  const { next } = await searchParams;
  return <LoginForm next={typeof next === "string" ? next : "/admin"} />;
}

export default function LoginPage({ searchParams }: { searchParams: SearchParams }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-sm rounded-2xl bg-[#0A1628] border border-white/10 p-8 shadow-2xl space-y-6">
        <div className="space-y-3 text-center">
          <Image
            src="/assets/projects/Logo-scarcidigital.svg"
            alt="Scarci Digital"
            width={160}
            height={40}
            className="h-9 w-auto mx-auto"
          />
          <h1 className="text-lg font-bold text-white">Admin dashboard</h1>
        </div>
        <Suspense>
          <LoginFormWithRedirect searchParams={searchParams} />
        </Suspense>
      </div>
    </div>
  );
}
