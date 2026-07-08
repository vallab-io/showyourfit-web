import type { Metadata, Viewport } from "next";
import "./globals.css";

const title = "Show Your Fit";
const description =
  "WOD 정리, 운동 기록, 인증샷 공유까지 가장 깔끔하게 남기는 와드 기록 앱.";
const fallbackSiteUrl = "https://www.showyour.fit";

function getMetadataBase() {
  try {
    return new URL(process.env.NEXT_PUBLIC_SITE_URL ?? fallbackSiteUrl);
  } catch {
    return new URL(fallbackSiteUrl);
  }
}

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title,
  description,
  applicationName: title,
  keywords: [
    "Show Your Fit",
    "운동 기록",
    "와드",
    "크로스핏",
    "피트니스",
    "운동 인증샷",
  ],
  openGraph: {
    title,
    description,
    siteName: title,
    type: "website",
    images: [
      {
        url: "/app-icon.png",
        width: 1024,
        height: 1024,
        alt: "Show Your Fit app icon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/app-icon.png"],
  },
  icons: {
    icon: "/app-icon.png",
    apple: "/app-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#111827",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
