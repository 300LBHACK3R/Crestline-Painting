import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crestline Painting",
  description:
    "Professional painting services across British Columbia for commercial, multi-family, strata, custom home, and interior painting projects.",
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