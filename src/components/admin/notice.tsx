import { CheckCircle2 } from "lucide-react";

export function Notice({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300" role="status">
      <CheckCircle2 className="w-4 h-4" />
      {children}
    </p>
  );
}
