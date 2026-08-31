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
    <aside className="fixed bottom-4 right-4 z-[70] w-56 rounded-2xl border border-[#1D4E89]/15 bg-white/95 p-3 shadow-xl backdrop-blur-md">
      <label
        htmlFor="batch-preview-mode"
        className="mb-1.5 block text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#1D4E89]/60"
      >
        Development preview
      </label>
      <select
        id="batch-preview-mode"
        value={value}
        onChange={(event) => onChange(event.target.value as BatchPreviewMode)}
        className="w-full rounded-lg border border-[#1D4E89]/20 bg-[#FDFBF7] px-3 py-2 text-sm font-bold text-[#1D4E89] outline-none focus-visible:ring-2 focus-visible:ring-[#1D4E89]"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <p className="mt-1.5 text-[10px] leading-snug text-foreground/45">
        Development only. Never included in production.
      </p>
    </aside>
  );
}
