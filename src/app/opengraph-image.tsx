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
          {/* New shield icon with chevron + B + C with arrows */}
          <svg
            width="120"
            height="120"
            viewBox="0 0 100 100"
            fill="none"
          >
            <defs>
              <linearGradient id="og-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#60a5fa" />
              </linearGradient>
              <linearGradient id="og-accent" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#93c5fd" />
              </linearGradient>
            </defs>
            <path d="M8 10 L8 80 C8 90 14 95 22 95 L72 95 C85 95 92 88 92 75 L92 25 C92 12 85 5 72 5 L22 5 C14 5 8 10 8 20 Z" fill="url(#og-grad)" />
            <path d="M0 50 L16 38 L16 20 C16 13 20 10 26 10 L72 10 C82 10 87 15 87 25 L87 75 C87 85 82 90 72 90 L26 90 C20 90 16 87 16 80 L16 62 Z" fill="url(#og-grad)" />
            <path d="M24 20 L70 20 C76 20 80 24 80 30 L80 70 C80 76 76 80 70 80 L24 80 C20 80 24 76 24 70 Z" fill="none" stroke="white" strokeWidth="1.5" strokeOpacity="0.2" />
            <path d="M28 34 L28 66 L42 66 C47 66 50.5 63 50.5 59 C50.5 55.5 48.5 53 45.5 52 C47.8 51 49.5 48.5 49.5 46 C49.5 42 46 39 42 39 L38 39 L28 39 Z M35 43 L41 43 C43.5 43 45 44.5 45 46.5 C45 48.5 43.5 50 41 50 L35 50 Z M35 54 L42 54 C44.8 54 46.5 55.8 46.5 58 C46.5 60.2 44.8 62 42 62 L35 62 Z" fill="white" fillRule="evenodd" />
            <g transform="translate(54, 38)">
              <path d="M18 0 C8 0 0 7 0 16 C0 25 8 32 18 32 C23 32 27.5 30 30.5 26.5" fill="none" stroke="url(#og-accent)" strokeWidth="5" strokeLinecap="round" />
              <path d="M32 8 C28 2 23 -1 17 -1 C7 -1 -1 7 -1 16" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.5" />
              <path d="M29 2 L33 8 L26 9" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" />
              <path d="M2 25 C6 31 12 34 18 34 C28 34 35 26 35 17" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.5" />
              <path d="M5 31 L1 25 L8 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" />
            </g>
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
