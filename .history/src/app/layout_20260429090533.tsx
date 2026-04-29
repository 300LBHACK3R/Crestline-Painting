import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://crestlinepainting.ca";
const siteName = "Crestline Painting Ltd.";
const siteDescription =
  "Professional painting services across British Columbia for commercial, multi-family, strata, custom home, and interior painting projects.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  applicationName: siteName,
  title: {
    default: `${siteName} | Professional Painting Services in BC`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,

  keywords: [
    "Crestline Painting",
    "Painting Company BC",
    "Commercial Painting BC",
    "Multi-Family Painting",
    "Strata Painting BC",
    "Custom Home Painting",
    "Interior Painting BC",
    "Exterior Painting British Columbia",
    "Professional Painters British Columbia",
  ],

  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    title: `${siteName} | Professional Painting Services in BC`,
    description: siteDescription,
    url: siteUrl,
    siteName,
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "/images/branding/logo.png",
        width: 1200,
        height: 630,
        alt: "Crestline Painting Ltd. logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Professional Painting Services in BC`,
    description: siteDescription,
    images: ["/images/branding/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "business",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#071a33",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteName,
    url: siteUrl,
    description: siteDescription,
    email: "info@crestlinepainting.ca",
    telephone: "+1-604-243-0328",
    areaServed: {
      "@type": "AdministrativeArea",
      name: "British Columbia",
    },
    address: {
      "@type": "PostalAddress",
      addressRegion: "BC",
      addressCountry: "CA",
    },
    serviceType: [
      "Commercial Painting",
      "Multi-Family Painting",
      "Strata Painting",
      "Custom Home Painting",
      "Interior Painting",
      "Exterior Painting",
    ],
  };

  return (
    <html lang="en-CA">
      <body className="site-body">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        {children}
      </body>
    </html>
  );
}