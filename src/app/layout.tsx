import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BitCorp, Inc. — Accelerating Your Business",
  description:
    "BitCorp is a Business Accelerator that drives revenue, enters new markets, and launches new businesses. We provide corporate development, strategic planning, and distribution expertise.",
  keywords: [
    "business accelerator",
    "corporate development",
    "sales acceleration",
    "business strategy",
    "BitCorp",
  ],
  openGraph: {
    title: "BitCorp, Inc. — Accelerating Your Business",
    description:
      "BitCorp helps you identify critical sales drivers and injects our professional network to accelerate your business.",
    type: "website",
    url: "https://bitcorpinc.com",
    siteName: "BitCorp, Inc.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
