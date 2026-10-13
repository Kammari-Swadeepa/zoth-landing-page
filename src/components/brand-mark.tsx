export default function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      className={className}
      fill="none"
    >
      <g
        stroke="#ff4b12"
        strokeDasharray="0.1 3.4"
        strokeLinecap="round"
        strokeWidth="2.8"
      >
        <path d="M8 4 23 15 17 21" />
        <path d="M13 4 28 15 22 21" />
        <path d="M18 4 31 14" />
        <path d="M15 16 4 24 17 29" />
        <path d="M20 16 9 24 22 29" />
        <path d="M10 16 1 23" />
      </g>
    </svg>
  );
}
