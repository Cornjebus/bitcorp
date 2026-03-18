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
  const accentId = `bc-accent-${variant}`;

  if (iconOnly) {
    return (
      <svg
        width={height}
        height={height}
        viewBox="0 0 100 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0.5" y2="1">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#1a2744" />
          </linearGradient>
          <linearGradient id={accentId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
        </defs>
        <ShieldIcon gradientId={gradientId} accentId={accentId} />
      </svg>
    );
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 320 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#1a2744" />
        </linearGradient>
        <linearGradient id={accentId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#60a5fa" />
        </linearGradient>
      </defs>

      {/* Shield icon scaled to fit */}
      <g transform="translate(2, 4) scale(0.6)">
        <ShieldIcon gradientId={gradientId} accentId={accentId} />
      </g>

      {/* BitCorp wordmark */}
      <text
        x="82"
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
        x="82"
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
  accentId,
}: {
  gradientId: string;
  accentId: string;
}) {
  return (
    <g>
      {/* Shield body — classic pointed bottom */}
      <path
        d="M50 2
           L92 16
           C96 17.5 98 21 98 25
           L98 55
           C98 75 78 95 50 115
           C22 95 2 75 2 55
           L2 25
           C2 21 4 17.5 8 16
           Z"
        fill={`url(#${gradientId})`}
      />

      {/* Inner shield border */}
      <path
        d="M50 10
           L86 22
           C88 23 90 25.5 90 28
           L90 54
           C90 70 74 87 50 105
           C26 87 10 70 10 54
           L10 28
           C10 25.5 12 23 14 22
           Z"
        fill="white"
        fillOpacity="0.07"
        stroke="white"
        strokeWidth="1"
        strokeOpacity="0.2"
      />

      {/* B letter — bold, clean */}
      <path
        d="M24 40 L24 80
           L40 80 C46 80 50 76.5 50 72
           C50 68 47.5 65.5 44 64.5
           C46.5 63.5 48.5 60.5 48.5 57.5
           C48.5 53 45 50 40 50
           L24 50 Z
           M32 54 L39 54
           C41.5 54 43 55.5 43 57.5
           C43 59.5 41.5 61 39 61
           L32 61 Z
           M32 65 L40 65
           C43 65 44.5 67 44.5 69.5
           C44.5 72 43 74 40 74
           L32 74 Z"
        fill="white"
        fillRule="evenodd"
      />

      {/* C letter — clean arc */}
      <path
        d="M72 54
           C68 50.5 63 49 58 50
           C51 52 47 58 48 65
           C49 72 54 77.5 61 78
           C66 78.5 70.5 76 74 72"
        fill="none"
        stroke={`url(#${accentId})`}
        strokeWidth="6"
        strokeLinecap="round"
      />
    </g>
  );
}
