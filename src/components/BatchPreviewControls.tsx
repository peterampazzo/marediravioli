import type { BatchPreviewMode } from "@/config/preview";

interface BatchPreviewControlsProps {
  value: BatchPreviewMode;
  onChange: (mode: BatchPreviewMode) => void;
}

const options: Array<{ value: BatchPreviewMode; label: string }> = [
  { value: "live", label: "Live configuration" },
  { value: "open", label: "Open batch" },
  { value: "sold-out", label: "Sold out" },
  { value: "closed", label: "Closed / planning" },
  { value: "expired", label: "Expired date" },
  { value: "missing-form", label: "Missing form" },
];

export default function BatchPreviewControls({
  value,
  onChange,
}: BatchPreviewControlsProps) {
  return (
    <aside className="fixed inset-x-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-[70] rounded-xl border border-[#1D4E89]/15 bg-white/95 p-2.5 shadow-xl backdrop-blur-md sm:inset-x-auto sm:bottom-4 sm:right-4 sm:w-56 sm:rounded-2xl sm:p-3">
      <div className="flex items-center gap-3 sm:block">
        <label
          htmlFor="batch-preview-mode"
          className="shrink-0 text-xs font-extrabold uppercase tracking-[0.12em] text-[#1D4E89] sm:mb-1.5 sm:block sm:tracking-[0.16em]"
        >
          <span className="sm:hidden">Preview</span>
          <span className="hidden sm:inline">Development preview</span>
        </label>
        <select
          id="batch-preview-mode"
          aria-label="Development preview"
          value={value}
          onChange={(event) => onChange(event.target.value as BatchPreviewMode)}
          className="min-h-11 min-w-0 flex-1 rounded-lg border border-[#1D4E89]/25 bg-[#FDFBF7] px-3 py-2 text-sm font-bold text-[#1D4E89] outline-none focus-visible:ring-2 focus-visible:ring-[#1D4E89] sm:w-full"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <p className="mt-1.5 hidden text-xs leading-snug text-foreground/75 sm:block">
        Development only. Never included in production.
      </p>
    </aside>
  );
}
