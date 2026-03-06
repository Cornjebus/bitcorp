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
        width={height}
        height={height}
        viewBox="0 0 100 100"
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

      {/* Shield icon scaled to fit 80x80 area */}
      <g transform="translate(0, 0) scale(0.8)">
        <ShieldIcon gradientId={gradientId} accentGradientId={accentGradientId} />
      </g>

      {/* BitCorp wordmark */}
      <text
        x="88"
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
        x="88"
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
      {/* Outer shield — chevron notch on left, rounded right */}
      <path
        d="M8 10 L8 80 C8 90 14 95 22 95 L72 95 C85 95 92 88 92 75 L92 25 C92 12 85 5 72 5 L22 5 C14 5 8 10 8 20 Z"
        fill={`url(#${gradientId})`}
      />
      {/* Chevron arrow notch cut into left side */}
      <path
        d="M0 50 L16 38 L16 20 C16 13 20 10 26 10 L72 10 C82 10 87 15 87 25 L87 75 C87 85 82 90 72 90 L26 90 C20 90 16 87 16 80 L16 62 Z"
        fill={`url(#${gradientId})`}
      />

      {/* Inner shield border */}
      <path
        d="M22 18 L72 18 C78 18 82 22 82 28 L82 72 C82 78 78 82 72 82 L22 82 C18 82 22 78 22 72 Z"
        fill="white"
        fillOpacity="0.08"
      />
      <path
        d="M24 20 L70 20 C76 20 80 24 80 30 L80 70 C80 76 76 80 70 80 L24 80 C20 80 24 76 24 70 Z"
        fill="none"
        stroke="white"
        strokeWidth="1.5"
        strokeOpacity="0.2"
      />

      {/* B letter — bold, corporate */}
      <path
        d="M28 34 L28 66 L42 66 C47 66 50.5 63 50.5 59 C50.5 55.5 48.5 53 45.5 52 C47.8 51 49.5 48.5 49.5 46 C49.5 42 46 39 42 39 L38 39 L28 39 Z
           M35 43 L41 43 C43.5 43 45 44.5 45 46.5 C45 48.5 43.5 50 41 50 L35 50 Z
           M35 54 L42 54 C44.8 54 46.5 55.8 46.5 58 C46.5 60.2 44.8 62 42 62 L35 62 Z"
        fill="white"
        fillRule="evenodd"
      />

      {/* C letter with circular acceleration arrow */}
      <g transform="translate(54, 38)">
        {/* C letter */}
        <path
          d="M18 0 C8 0 0 7 0 16 C0 25 8 32 18 32 C23 32 27.5 30 30.5 26.5"
          fill="none"
          stroke={`url(#${accentGradientId})`}
          strokeWidth="5"
          strokeLinecap="round"
        />
        {/* Circular arrow — upper arc going clockwise */}
        <path
          d="M32 8 C28 2 23 -1 17 -1 C7 -1 -1 7 -1 16"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeOpacity="0.5"
        />
        {/* Arrow head pointing right/up */}
        <path
          d="M29 2 L33 8 L26 9"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity="0.6"
        />
        {/* Lower circular arrow going counter-clockwise */}
        <path
          d="M2 25 C6 31 12 34 18 34 C28 34 35 26 35 17"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeOpacity="0.5"
        />
        {/* Arrow head pointing left/down */}
        <path
          d="M5 31 L1 25 L8 24"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity="0.6"
        />
      </g>
    </g>
  );
}
