import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crestline Painting Ltd.",
  description:
    "Professional painting services across British Columbia for commercial, multi-family, strata, custom homes, and interior projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}