
import { ArrowRight, X } from "lucide-react";

export default function TopBanner() {
  return (
    <div className="relative flex min-h-[34px] items-center justify-center bg-[#ff4b12] px-3 py-1">
      <X
        aria-hidden="true"
        size={9}
        strokeWidth={2}
        className="absolute left-5 text-white"
      />

      <div className="flex items-center justify-center gap-2">
        <span className="text-[10px] font-medium tracking-[0.02em] text-white">
          IDO Date
        </span>

        <a
          href="#sale"
          className="inline-flex items-center gap-1 text-[10px] font-semibold text-white transition-opacity hover:opacity-75"
        >
          Read More
          <ArrowRight size={12} strokeWidth={1.8} />
        </a>
      </div>
    </div>
  );
}
