export function GridBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1000 600"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        stroke="rgba(255,90,20,0.10)"
        strokeWidth="1"
      >
        <defs>
          <radialGradient
            id="wireframe-top-left"
            cx="0"
            cy="0"
            r="600"
            gradientUnits="userSpaceOnUse"
            gradientTransform="scale(1.4 0.75)"
          >
            <stop offset="0" stopColor="white" stopOpacity="0.9" />
            <stop offset="0.38" stopColor="white" stopOpacity="0.65" />
            <stop offset="0.64" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient
            id="wireframe-top-right"
            cx="1000"
            cy="0"
            r="600"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(1000 0) scale(-1.4 0.75) translate(-1000 0)"
          >
            <stop offset="0" stopColor="white" stopOpacity="0.9" />
            <stop offset="0.38" stopColor="white" stopOpacity="0.65" />
            <stop offset="0.64" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="wireframe-top-corners">
            <rect width="1000" height="600" fill="black" />
            <rect
              width="1000"
              height="600"
              fill="url(#wireframe-top-left)"
            />
            <rect
              width="1000"
              height="600"
              fill="url(#wireframe-top-right)"
            />
          </mask>
        </defs>
        {/* Lines converging to the center */}
        <g mask="url(#wireframe-top-corners)">
          {Array.from({ length: 17 }).map((_, i) => {
            const x = (i / 16) * 1000;
            return (
              <g key={i}>
                <line x1="500" y1="300" x2={x} y2="0" />
                <line x1="500" y1="300" x2={x} y2="600" />
              </g>
            );
          })}
          {Array.from({ length: 7 }).map((_, i) => {
            const y = (i / 6) * 600;
            return (
              <g key={`s${i}`}>
                <line x1="500" y1="300" x2="0" y2={y} />
                <line x1="500" y1="300" x2="1000" y2={y} />
              </g>
            );
          })}
          {/* Depth rings */}
          {[0.3, 0.5, 0.75, 1].map((s) => (
            <rect
              key={s}
              x={500 - 500 * s}
              y={300 - 300 * s}
              width={1000 * s}
              height={600 * s}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}