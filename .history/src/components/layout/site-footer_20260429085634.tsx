import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/services/multi-family", label: "Multi-Family" },
  { href: "/services/custom-homes", label: "Custom Homes" },
  { href: "/services/commercial-painting", label: "Commercial Painting" },
  {
    href: "/services/strata-building-maintenance",
    label: "Strata & Maintenance",
  },
  { href: "/services/interior-painting", label: "Interior Painting" },
];

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__shell">
          <div className="site-footer__grid">
            <div className="site-footer__brand-block">
              <Link
                href="/"
                className="site-footer__brand-link"
                aria-label="Crestline Painting home"
              >
                <Image
                  src="/images/branding/logo.png"
                  alt="Crestline Painting"
                  width={220}
                  height={80}
                  className="site-footer__logo"
                />
              </Link>

              <p className="site-footer__copy">
                Crestline Painting Ltd. provides professional painting services
                across British Columbia for commercial, multi-family, strata,
                custom home, and interior projects.
              </p>
            </div>

            <nav className="site-footer__column" aria-label="Footer navigation">
              <h2 className="site-footer__heading">Navigation</h2>

              <div className="site-footer__links">
                {footerLinks.map((item) => (
                  <Link key={item.href} href={item.href}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>

            <nav className="site-footer__column" aria-label="Footer services">
              <h2 className="site-footer__heading">Services</h2>

              <div className="site-footer__links">
                {serviceLinks.map((item) => (
                  <Link key={item.href} href={item.href}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>

            <div className="site-footer__column">
              <h2 className="site-footer__heading">Contact</h2>

              <address className="site-footer__links site-footer__address">
                <a
                  href="mailto:info@crestlinepainting.ca"
                  aria-label="Email Crestline Painting"
                >
                  info@crestlinepainting.ca
                </a>

                <a href="tel:+16042430328" aria-label="Call Crestline Painting">
                  (604) 243-0328
                </a>

                <span>British Columbia, Canada</span>
              </address>
            </div>
          </div>

          <div className="site-footer__bottom">
            <span>© {year} Crestline Painting Ltd. All rights reserved.</span>

            <span>
              Website by{" "}
              <a
                href="https://lltechsolutions.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="site-footer__credit"
              >
                L&amp;L Tech Solutions
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}