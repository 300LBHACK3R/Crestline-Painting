import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__shell">
          <div className="site-footer__grid">
            <div className="site-footer__col">
              <div className="site-footer__brand">Crestline Painting</div>
              <p className="site-footer__copy">
                Professional painting services across British Columbia for commercial,
                multifamily, strata, and custom home projects.
              </p>
            </div>

            <div className="site-footer__col">
              <div className="site-footer__title">Pages</div>
              <div className="site-footer__links">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/services">Services</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </div>

            <div className="site-footer__col">
              <div className="site-footer__title">Services</div>
              <div className="site-footer__links">
                <Link href="/services/multi-family">Multi-Family</Link>
                <Link href="/services/custom-homes">Custom Homes</Link>
                <Link href="/services/commercial-painting">Commercial Painting</Link>
                <Link href="/services/strata-building-maintenance">
                  Strata &amp; Building Maintenance
                </Link>
                <Link href="/services/interior-painting">Interior Painting</Link>
              </div>
            </div>

            <div className="site-footer__col">
              <div className="site-footer__title">Contact</div>
              <div className="site-footer__links">
                <a href="mailto:info@crestlinepainting.ca">info@crestlinepainting.ca</a>
                <span>Serving British Columbia</span>
              </div>
            </div>
          </div>

          <div className="site-footer__bottom">
  <span>© {new Date().getFullYear()} Crestline Painting Ltd. All rights reserved.</span>

  <span>
    Website designed & developed by{" "}
    <a
      href="https://lndltechsolutions.com"
      target="_blank"
      rel="noopener noreferrer"
      className="site-footer__credit"
    >
      L&L Tech Solutions
    </a>
  </span>
</div>
    </footer>
  );
}