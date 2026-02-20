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

  if (iconOnly) {
    return (
      <svg
        width={height}
        height={height}
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1a2744" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
        </defs>
        <ShieldPath gradientId={gradientId} />
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
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1a2744" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
      </defs>
      <ShieldPath gradientId={gradientId} />
      <text
        x="92"
        y="36"
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
        y="56"
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

function ShieldPath({ gradientId }: { gradientId: string }) {
  return (
    <g>
      {/* Outer shield */}
      <path
        d="M40 4L12 16V40C12 56.568 24.432 71.6 40 76C55.568 71.6 68 56.568 68 40V16L40 4Z"
        fill={`url(#${gradientId})`}
      />
      {/* Inner shield cutout */}
      <path
        d="M40 12L20 21V40C20 52.703 29.297 64.1 40 67.6C50.703 64.1 60 52.703 60 40V21L40 12Z"
        fill="white"
        fillOpacity="0.15"
      />
      {/* B letter - bold corporate style */}
      <path
        d="M30 26H42C45.866 26 49 28.686 49 32C49 34.21 47.79 36.14 46 37.2C48.21 38.26 50 40.69 50 43.5C50 47.09 47.09 50 43.5 50H30V26ZM36 31V35.5H41.5C42.88 35.5 44 34.38 44 33C44 31.62 42.88 31 41.5 31H36ZM36 40V45H42.5C44.16 45 45.5 43.66 45.5 42C45.5 40.34 44.16 39.5 42.5 39.5H36V40Z"
        fill="white"
      />
      {/* C letter accent */}
      <path
        d="M44 54C44 54 48.5 52 50.5 48"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.6"
      />
    </g>
  );
}
