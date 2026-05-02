import type { Metadata } from "next";
import "./globals.css";

const description =
  "Painter & Decorator Perth — D Wright Painting & Decorating, Heathridge. Servicing Heathridge, Beldon, Edgewater, Mullaloo, Ocean Reef, Joondalup, Connolly, Craigie & Padbury. Interior, exterior & roof painting. Licensed, insured, 5-star rated. Free quotes — call 0435 913 635.";

export const metadata: Metadata = {
  title: "Painter & Decorator Perth | D Wright Painting & Decorating Heathridge",
  description,
  openGraph: {
    title: "Painter & Decorator Perth | D Wright Painting & Decorating Heathridge",
    description,
    url: "https://dwrightpainting.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Painter & Decorator Perth | D Wright Painting & Decorating Heathridge",
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
  keywords: [
    "painter Heathridge",
    "painter & decorator Perth",
    "painter Perth",
    "house painter Heathridge",
    "house painter Perth",
    "painter Beldon",
    "painter Edgewater",
    "painter Mullaloo",
    "painter Ocean Reef",
    "painter Joondalup",
    "painter Connolly",
    "painter Craigie",
    "painter Padbury",
    "painters near me Heathridge",
    "interior painter Perth",
    "exterior painter Perth",
    "roof painting Perth",
    "painting contractor Perth WA",
  ],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1d3a8a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU">
      <body>{children}</body>
    </html>
  );
}
