import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__shell">

          <div className="site-footer__grid">

            {/* BRAND */}
            <div className="site-footer__brand-block">
              <img
                src="/images/branding/logo.png"
                alt="Crestline Painting logo"
                className="site-footer__logo"
              />

              <p className="site-footer__copy">
                Crestline Painting Ltd. provides professional painting services across British Columbia
                for commercial, multi-family, strata, custom home, and interior projects.
              </p>
            </div>

            {/* NAV */}
            <div className="site-footer__column">
              <div className="site-footer__heading">Navigation</div>

              <div className="site-footer__links">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/services">Services</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </div>

            {/* CONTACT */}
            <div className="site-footer__column">
              <div className="site-footer__heading">Contact</div>

              <div className="site-footer__links">
                <a href="mailto:info@crestlinepainting.ca">
                  info@crestlinepainting.ca
                </a>

                <a href="tel:+12505551234">
                  (250) 555-1234
                </a>

                <span>British Columbia, Canada</span>
              </div>
            </div>

          </div>

          {/* BOTTOM */}
          <div className="site-footer__bottom">
            <span>
              © {new Date().getFullYear()} Crestline Painting Ltd.
            </span>

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