import Link from "next/link";

type SiteHeaderProps = {
  light?: boolean;
};

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader({ light = false }: SiteHeaderProps) {
  return (
    <header className={`site-header ${light ? "site-header--light" : ""}`}>
      <div className="container">
        <div className="site-header__shell">
          {/* Logo */}
          <Link
            href="/"
            className="site-header__brand"
            aria-label="Go to Crestline Painting homepage"
          >
            <img
              src="/images/branding/logo.png"
              alt="Crestline Painting logo"
              className="site-header__logo"
              loading="eager"
              decoding="async"
            />
          </Link>

          {/* Navigation */}
          <nav className="site-header__nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="site-header__link"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <Link
            href="/contact"
            className="site-header__cta"
            aria-label="Request a quote from Crestline Painting"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}