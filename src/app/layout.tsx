import type { Metadata } from "next";

import { siteMeta } from "@/content/company";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteMeta.siteUrl),
  title: siteMeta.title,
  description: siteMeta.description,
  keywords: siteMeta.keywords,
  applicationName: siteMeta.siteName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteMeta.title,
    description: siteMeta.description,
    siteName: siteMeta.siteName,
    type: "website",
    url: siteMeta.siteUrl,
    locale: "zh_CN",
    images: [
      {
        url: siteMeta.ogImage,
        width: 1200,
        height: 630,
        alt: siteMeta.siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMeta.title,
    description: siteMeta.description,
    images: [siteMeta.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  );
}
