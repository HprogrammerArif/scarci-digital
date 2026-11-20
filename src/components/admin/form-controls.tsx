"use client";

import * as React from "react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";
import type { ActionState } from "@/app/admin/actions";
import { cn } from "@/lib/cn";

export const fieldClass =
  "w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors";
export const labelClass = "block text-xs font-semibold text-slate-300 mb-1.5";

export function SubmitButton({
  children,
  variant = "primary",
  className,
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger";
  className?: string;
}) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-colors disabled:opacity-60 cursor-pointer",
        variant === "primary" && "bg-blue-600 hover:bg-blue-500 text-white",
        variant === "secondary" && "bg-white/10 hover:bg-white/15 text-white border border-white/10",
        variant === "danger" && "bg-red-500/10 hover:bg-red-500/20 text-red-300 border border-red-500/30",
        className
      )}
    >
      {pending && <Loader2 className="w-4 h-4 animate-spin" />}
      {children}
    </button>
  );
}

/** A form bound to a server action that returns { error } or { success }. */
export function ActionForm({
  action,
  children,
  className,
}: {
  action: (state: ActionState, formData: FormData) => Promise<ActionState>;
  children: React.ReactNode;
  className?: string;
}) {
  const [state, formAction] = useActionState(action, undefined);
  return (
    <form action={formAction} className={className}>
      {children}
      {state?.error && (
        <p className="mt-3 text-sm text-red-400" role="alert">
          {state.error}
        </p>
      )}
      {state?.success && (
        <p className="mt-3 text-sm text-emerald-400" role="status">
          {state.success}
        </p>
      )}
    </form>
  );
}

/** Small form that asks for confirmation before running a destructive action. */
export function ConfirmForm({
  action,
  id,
  message,
  children,
}: {
  action: (formData: FormData) => Promise<void>;
  id: string;
  message: string;
  children: React.ReactNode;
}) {
  return (
    <form
      action={action}
      onSubmit={(e) => {
        if (!window.confirm(message)) e.preventDefault();
      }}
    >
      <input type="hidden" name="id" value={id} />
      <SubmitButton variant="danger">{children}</SubmitButton>
    </form>
  );
}
