export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <svg
        className="absolute inset-x-0 -top-20 -z-10 h-[1000px] w-full"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="grid-pattern"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
            x="50%"
            y="100%"
            patternTransform="translate(0 0)"
          >
            <path
              d="M0 32V.5H32"
              fill="none"
              stroke="rgba(255, 122, 0, 0.1)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth="0"
          fill="url(#grid-pattern)"
          className="animate-[grid_20s_linear_infinite] opacity-30"
          style={{
            maskImage:
              "linear-gradient(to bottom left, white 40%, transparent 50%)",
            WebkitMaskImage:
              "linear-gradient(to bottom left, white 40%, transparent 50%)",
          }}
        />
      </svg>
      <div
        className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-orange-700/30 blur-3xl"
        style={{
          maskImage:
            "radial-gradient(circle at center, transparent 50%, black 100%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, transparent 50%, black 100%)",
        }}
      />
    </div>
  );
}
