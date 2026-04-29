import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crestline Painting",
  description:
    "Professional painting services across British Columbia for commercial, multifamily, strata, and custom home projects.",
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