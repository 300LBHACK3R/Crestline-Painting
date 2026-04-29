import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Crestline Painting Ltd.",
    template: "%s | Crestline Painting Ltd.",
  },
  description:
    "Professional painting services across British Columbia for commercial, multi-family, strata, custom homes, and interior projects.",

  keywords: [
    "Painting Company BC",
    "Commercial Painting",
    "Strata Painting",
    "Custom Home Painting",
    "Interior Painting BC",
    "Exterior Painting British Columbia",
  ],

  openGraph: {
    title: "Crestline Painting Ltd.",
    description:
      "Professional painting services across British Columbia.",
    url: "https://crestlinepainting.ca",
    siteName: "Crestline Painting Ltd.",
    images: [
      {
        url: "/images/branding/logo.png",
        width: 1200,
        height: 630,
        alt: "Crestline Painting",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="site-body">
        {children}
      </body>
    </html>
  );
}