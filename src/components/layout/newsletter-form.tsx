"use client";

import * as React from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function NewsletterForm() {
  const [email, setEmail] = React.useState("");
  const [state, setState] = React.useState<
    "idle" | "loading" | "done" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setState("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, pageUrl: window.location.pathname }),
      });
      if (!res.ok) throw new Error();
      setState("done");
      setEmail("");
    } catch {
      setState("error");
    }
  };

  if (state === "done") {
    return (
      <p className="flex items-center gap-2 text-emerald-400 text-sm py-2">
        <CheckCircle2 className="w-5 h-5" />
        Thanks! You&apos;re on the list.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2 max-w-sm">
      <div className="flex items-center gap-2">
        <label htmlFor="newsletter-email" className="sr-only">
          Work email
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className="flex-1 min-w-0 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
        />
        <Button type="submit" variant="primary" size="md" disabled={state === "loading"}>
          {state === "loading" ? <Loader2 className="w-4 h-4 animate-spin" /> : "Subscribe"}
        </Button>
      </div>
      {state === "error" && (
        <p className="text-xs text-red-400">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
