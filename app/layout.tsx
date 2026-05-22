import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Solar Guy | Free Solar Consultation",
  description:
    "Get a free solar consultation and start saving on your energy bills. We handle permits, installation, and financing — zero pressure, zero hassle.",
  openGraph: {
    title: "Solar Guy | Free Solar Consultation",
    description:
      "Get a free solar consultation and start saving on your energy bills. We handle permits, installation, and financing — zero pressure, zero hassle.",
    type: "website",
    // TODO: Replace with your actual URL
    url: "https://solarguy.com",
    siteName: "Solar Guy",
    images: [
      {
        // TODO: Replace with your actual OG image URL
        url: "https://solarguy.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Solar Guy - Free Solar Consultation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar Guy | Free Solar Consultation",
    description:
      "Get a free solar consultation and start saving on your energy bills.",
    // TODO: Replace with your actual OG image URL
    images: ["https://solarguy.com/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
