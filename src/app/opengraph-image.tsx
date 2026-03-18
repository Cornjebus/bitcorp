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
          {/* Clean shield with BC */}
          <svg width="140" height="168" viewBox="0 0 100 120" fill="none">
            <defs>
              <linearGradient id="og-grad" x1="0" y1="0" x2="0.5" y2="1">
                <stop offset="0%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#1a2744" />
              </linearGradient>
              <linearGradient id="og-accent" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#60a5fa" />
              </linearGradient>
            </defs>
            <path d="M50 2 L92 16 C96 17.5 98 21 98 25 L98 55 C98 75 78 95 50 115 C22 95 2 75 2 55 L2 25 C2 21 4 17.5 8 16 Z" fill="url(#og-grad)" />
            <path d="M50 10 L86 22 C88 23 90 25.5 90 28 L90 54 C90 70 74 87 50 105 C26 87 10 70 10 54 L10 28 C10 25.5 12 23 14 22 Z" fill="white" fillOpacity="0.07" stroke="white" strokeWidth="1" strokeOpacity="0.2" />
            <path d="M24 40 L24 80 L40 80 C46 80 50 76.5 50 72 C50 68 47.5 65.5 44 64.5 C46.5 63.5 48.5 60.5 48.5 57.5 C48.5 53 45 50 40 50 L24 50 Z M32 54 L39 54 C41.5 54 43 55.5 43 57.5 C43 59.5 41.5 61 39 61 L32 61 Z M32 65 L40 65 C43 65 44.5 67 44.5 69.5 C44.5 72 43 74 40 74 L32 74 Z" fill="white" fillRule="evenodd" />
            <path d="M72 54 C68 50.5 63 49 58 50 C51 52 47 58 48 65 C49 72 54 77.5 61 78 C66 78.5 70.5 76 74 72" fill="none" stroke="url(#og-accent)" strokeWidth="6" strokeLinecap="round" />
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
