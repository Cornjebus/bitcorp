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
          {/* Horizontal badge shield with chevron notch + B + C with upward arrow */}
          <svg
            width="180"
            height="156"
            viewBox="0 0 115 100"
            fill="none"
          >
            <defs>
              <linearGradient id="og-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#1a2744" />
                <stop offset="100%" stopColor="#2563eb" />
              </linearGradient>
              <linearGradient id="og-accent" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#60a5fa" />
              </linearGradient>
            </defs>
            <rect width="115" height="100" fill="#1a2744" />
            <path d="M18 5 L90 5 C103 5 112 14 112 27 L112 73 C112 86 103 95 90 95 L18 95 C14 95 12 93 12 89 L12 62 L0 50 L12 38 L12 11 C12 7 14 5 18 5 Z" fill="url(#og-grad)" />
            <path d="M24 13 L86 13 C95 13 102 20 102 29 L102 71 C102 80 95 87 86 87 L24 87 C22 87 20 85 20 83 L20 62 L10 50 L20 38 L20 17 C20 15 22 13 24 13 Z" fill="white" fillOpacity="0.08" stroke="white" strokeWidth="1.2" strokeOpacity="0.18" />
            <path d="M28 35 L28 65 L40 65 C44.5 65 47.5 62.5 47.5 59 C47.5 56 45.5 54 43 53 C45 52 46.5 49.5 46.5 47 C46.5 43.5 43.5 41 40 41 L28 41 Z M34 44 L39 44 C41 44 42.5 45.5 42.5 47 C42.5 48.5 41 50 39 50 L34 50 Z M34 53 L40 53 C42.2 53 43.5 54.8 43.5 56.5 C43.5 58.5 42 60 40 60 L34 60 Z" fill="white" fillRule="evenodd" />
            <g transform="translate(55,34)">
              <path d="M22 2 C14 -1 5 2 2 10 C-2 18 0 27 6 32 C12 37 21 36 27 31" fill="none" stroke="url(#og-accent)" strokeWidth="5.5" strokeLinecap="round" />
              <path d="M27 31 C32 27 35 21 35 15 C35 8 31 2 25 -1" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.7" />
              <path d="M28 -6 L24 0 L18 -3" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.85" />
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
