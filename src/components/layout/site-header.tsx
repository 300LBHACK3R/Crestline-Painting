"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type SiteHeaderProps = {
  light?: boolean;
};

type NavItem = {
  href: string;
  label: string;
};

const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Home" },
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
  const [menuOpen, setMenuOpen] = useState(false);

  const isLight = light ?? pathname !== "/";

  const visibleNavItems =
    pathname === "/" ? NAV_ITEMS.filter((item) => item.href !== "/") : NAV_ITEMS;

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className={cn("site-header", isLight && "site-header--light")}>
      <div className="site-header__bar">
        <Link
          href="/"
          className="site-header__brand"
          aria-label="Crestline Painting home"
        >
          <Image
            src="/images/branding/logo.png"
            alt="Crestline Painting"
            width={260}
            height={90}
            className="site-header__logo"
            priority={pathname === "/"}
          />
        </Link>

        <button
          type="button"
          className="site-header__menu-button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>

        <div
          id="primary-navigation"
          className={cn("site-header__right", menuOpen && "site-header__right--open")}
        >
          <nav className="site-header__nav" aria-label="Primary navigation">
            {visibleNavItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "site-header__link",
                    active && "site-header__link--active"
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

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