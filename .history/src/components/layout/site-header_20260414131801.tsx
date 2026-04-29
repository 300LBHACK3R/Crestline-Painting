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
          <Link href="/" className="site-header__brand" aria-label="Crestline Painting home">
            <div className="site-header__brand-mark">CP</div>
            <div className="site-header__brand-text">
              <span className="site-header__brand-name">Crestline</span>
              <span className="site-header__brand-sub">Painting</span>
            </div>
          </Link>

          <nav className="site-header__nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="site-header__link">
                {item.label}
              </Link>
            ))}
          </nav>

          <Link href="/contact" className="site-header__cta">
            Request a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}