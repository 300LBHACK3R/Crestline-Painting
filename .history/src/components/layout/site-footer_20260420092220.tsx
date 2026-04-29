import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__shell">
          <div className="site-footer__grid">
            <div>
              <img
                src="/images/branding/logo.png"
                alt="Crestline Painting logo"
                className="site-footer__logo"
              />
              <p className="site-footer__copy">
                Crestline Painting Ltd. provides professional painting services across
                British Columbia for commercial, multi-family, strata, custom home,
                and interior projects.
              </p>
            </div>

            <div>
              <div className="site-footer__heading">Navigation</div>
              <div className="site-footer__links">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/services">Services</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </div>

            <div>
              <div className="site-footer__heading">Services</div>
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

            <div>
              <div className="site-footer__heading">Contact</div>
              <div className="site-footer__links">
                <a href="mailto:info@crestlinepainting.ca">info@crestlinepainting.ca</a>
                <a href="tel:+12505551234">(250) 555-1234</a>
                <span>British Columbia, Canada</span>
              </div>
            </div>
          </div>

          <div className="site-footer__bottom">
            <span>© {new Date().getFullYear()} Crestline Painting Ltd. All rights reserved.</span>
            <span>
              Website by{" "}
              <a
                href="https://landltechsolutions.ca"
                target="_blank"
                rel="noreferrer"
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