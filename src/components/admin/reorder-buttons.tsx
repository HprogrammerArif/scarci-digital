import { ArrowDown, ArrowUp } from "lucide-react";

export function ReorderButtons({
  action,
  id,
  isFirst,
  isLast,
}: {
  action: (formData: FormData) => Promise<void>;
  id: string;
  isFirst: boolean;
  isLast: boolean;
}) {
  return (
    <div className="flex items-center gap-1">
      {(["up", "down"] as const).map((direction) => {
        const disabled = direction === "up" ? isFirst : isLast;
        const Icon = direction === "up" ? ArrowUp : ArrowDown;
        return (
          <form key={direction} action={action}>
            <input type="hidden" name="id" value={id} />
            <input type="hidden" name="direction" value={direction} />
            <button
              type="submit"
              disabled={disabled}
              aria-label={`Move ${direction}`}
              className="p-1.5 rounded-md border border-white/10 text-slate-400 hover:text-white hover:bg-white/5 disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
            >
              <Icon className="w-3.5 h-3.5" />
            </button>
          </form>
        );
      })}
    </div>
  );
}
