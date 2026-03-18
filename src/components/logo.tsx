interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
  width?: number;
  height?: number;
  iconOnly?: boolean;
}

export function Logo({
  variant = "dark",
  className = "",
  width = 160,
  height = 48,
  iconOnly = false,
}: LogoProps) {
  const textFill = variant === "dark" ? "#1a2744" : "#ffffff";
  const gradientId = `bc-grad-${variant}`;
  const accentGradientId = `bc-accent-${variant}`;

  if (iconOnly) {
    return (
      <svg
        width={height * 1.15}
        height={height}
        viewBox="0 0 115 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1a2744" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
          <linearGradient id={accentGradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
        </defs>
        <ShieldIcon gradientId={gradientId} accentGradientId={accentGradientId} />
      </svg>
    );
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 340 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1a2744" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
        <linearGradient id={accentGradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#60a5fa" />
        </linearGradient>
      </defs>

      {/* Shield icon scaled to fit */}
      <g transform="translate(-2, 2) scale(0.75)">
        <ShieldIcon gradientId={gradientId} accentGradientId={accentGradientId} />
      </g>

      {/* BitCorp wordmark */}
      <text
        x="92"
        y="35"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="700"
        fontSize="32"
        fill={textFill}
        letterSpacing="-0.5"
      >
        Bit
        <tspan fill={`url(#${gradientId})`}>Corp</tspan>
      </text>
      <text
        x="92"
        y="55"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="500"
        fontSize="11"
        fill={variant === "dark" ? "#475569" : "#94a3b8"}
        letterSpacing="2.5"
      >
        BUSINESS ACCELERATOR
      </text>
    </svg>
  );
}

function ShieldIcon({
  gradientId,
  accentGradientId,
}: {
  gradientId: string;
  accentGradientId: string;
}) {
  return (
    <g>
      {/* Outer shield — chevron notch on left, rounded right, horizontal badge */}
      <path
        d="M18 5
           L90 5 C103 5 112 14 112 27
           L112 73 C112 86 103 95 90 95
           L18 95
           C14 95 12 93 12 89
           L12 62
           L0 50
           L12 38
           L12 11
           C12 7 14 5 18 5 Z"
        fill={`url(#${gradientId})`}
      />

      {/* Inner shield border — same shape inset */}
      <path
        d="M24 13
           L86 13 C95 13 102 20 102 29
           L102 71 C102 80 95 87 86 87
           L24 87
           C22 87 20 85 20 83
           L20 62
           L10 50
           L20 38
           L20 17
           C20 15 22 13 24 13 Z"
        fill="white"
        fillOpacity="0.08"
        stroke="white"
        strokeWidth="1.2"
        strokeOpacity="0.18"
      />

      {/* B letter — bold, blocky, corporate */}
      <path
        d="M28 35 L28 65
           L40 65 C44.5 65 47.5 62.5 47.5 59
           C47.5 56 45.5 54 43 53
           C45 52 46.5 49.5 46.5 47
           C46.5 43.5 43.5 41 40 41
           L28 41 Z
           M34 44 L39 44
           C41 44 42.5 45.5 42.5 47
           C42.5 48.5 41 50 39 50
           L34 50 Z
           M34 53 L40 53
           C42.2 53 43.5 54.8 43.5 56.5
           C43.5 58.5 42 60 40 60
           L34 60 Z"
        fill="white"
        fillRule="evenodd"
      />

      {/* C letter — the C itself is the main blue arc */}
      <g transform="translate(55, 34)">
        {/* C body — opens on the right */}
        <path
          d="M22 2
             C14 -1 5 2 2 10
             C-2 18 0 27 6 32
             C12 37 21 36 27 31"
          fill="none"
          stroke={`url(#${accentGradientId})`}
          strokeWidth="5.5"
          strokeLinecap="round"
        />
        {/* Arrow arc — continues from the bottom-right of C, sweeps up and over the top */}
        <path
          d="M27 31
             C32 27 35 21 35 15
             C35 8 31 2 25 -1"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeOpacity="0.7"
        />
        {/* Arrowhead at top — pointing upward */}
        <path
          d="M28 -6 L24 0 L18 -3"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity="0.85"
        />
      </g>
    </g>
  );
}
