import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "BitCorp - Accelerating Your Business";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1a2744 0%, #1e3a5f 50%, #1a2744 100%)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(ellipse at top right, rgba(37,99,235,0.2), transparent 50%), radial-gradient(ellipse at bottom left, rgba(37,99,235,0.15), transparent 50%)",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
          }}
        >
          {/* Shield icon */}
          <svg
            width="100"
            height="100"
            viewBox="0 0 80 80"
            fill="none"
          >
            <defs>
              <linearGradient id="og-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#60a5fa" />
              </linearGradient>
            </defs>
            <path
              d="M40 4L12 16V40C12 56.568 24.432 71.6 40 76C55.568 71.6 68 56.568 68 40V16L40 4Z"
              fill="url(#og-grad)"
            />
            <path
              d="M40 12L20 21V40C20 52.703 29.297 64.1 40 67.6C50.703 64.1 60 52.703 60 40V21L40 12Z"
              fill="white"
              fillOpacity="0.15"
            />
            <path
              d="M30 26H42C45.866 26 49 28.686 49 32C49 34.21 47.79 36.14 46 37.2C48.21 38.26 50 40.69 50 43.5C50 47.09 47.09 50 43.5 50H30V26ZM36 31V35.5H41.5C42.88 35.5 44 34.38 44 33C44 31.62 42.88 31 41.5 31H36ZM36 40V45H42.5C44.16 45 45.5 43.66 45.5 42C45.5 40.34 44.16 39.5 42.5 39.5H36V40Z"
              fill="white"
            />
          </svg>

          <div
            style={{
              marginTop: 32,
              fontSize: 72,
              fontWeight: 700,
              color: "white",
              display: "flex",
              letterSpacing: "-1px",
            }}
          >
            Accelerating{" "}
            <span style={{ color: "#3b82f6", marginLeft: 16 }}>YOUR</span>
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "white",
              display: "flex",
              letterSpacing: "-1px",
              marginTop: -8,
            }}
          >
            Business
          </div>

          <div
            style={{
              marginTop: 24,
              fontSize: 24,
              color: "#94a3b8",
              display: "flex",
              letterSpacing: "3px",
            }}
          >
            BITCORP — BUSINESS ACCELERATOR
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
