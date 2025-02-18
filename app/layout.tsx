import "@/styles/globals.css";

import type { Metadata } from "next";
import { Inter } from "@next/font/google";
import { cx } from "@/lib/utils";
import AnalyticsWrapper from "../components/analytics";

const inter = Inter({
  variable: "--font-inter",
  display: "swap",
  style: "normal",
  subsets: ["latin-ext"],
});

const siteName = "Zelzele";
const title = `${siteName} | Son 100 Deprem`;
const description = "Türkiye sınırları içinde olan son 100 deprem.";
const url = "https://zelzele.vercel.app";
const locale = "tr-TR";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url,
    siteName,
    locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    site: "@ademilter",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icons-192.png",
    apple: "/icons-192.png",
  },
  manifest: `${url}/manifest.json`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="tr"
      className={cx("overflow-y-scroll scroll-smooth", inter.variable)}
    >
      <body className="bg-white leading-normal text-zinc-600 antialiased dark:bg-zinc-900 dark:text-zinc-400">
        <main>{children}</main>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
