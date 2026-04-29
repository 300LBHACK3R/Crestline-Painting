"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SiteHeaderProps = {
  light?: boolean;
};

const NAV_ITEMS = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function SiteHeader({ light }: SiteHeaderProps) {
  const pathname = usePathname();

  const isLight = light ?? pathname !== "/";

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className={cn("site-header", isLight && "site-header--light")}>
      <div className="container">
        <div className="site-header__shell">
          <Link href="/" className="site-header__brand" aria-label="Crestline Painting home">
            <Image
              src="/images/branding/logo.png"
              alt="Crestline Painting"
              width={240}
              height={88}
              className="site-header__logo"
              priority={pathname === "/"}
            />
          </Link>

          <div className="site-header__nav-wrap">
            <nav className="site-header__nav-pill" aria-label="Primary navigation">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "site-header__link",
                    isActive(item.href) && "site-header__link--active"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <Link href="/contact" className="site-header__cta">
            Request a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}