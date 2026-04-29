"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { services } from "@/data/services";

export default function HomeServicesPreview() {
  const featuredServices = useMemo(() => services.slice(0, 5), []);

  const [activeSlug, setActiveSlug] = useState(
    featuredServices[0]?.slug ?? ""
  );

  const activeService =
    featuredServices.find((service) => service.slug === activeSlug) ??
    featuredServices[0];

  return (
    <section className="home-services-hero">
      {/* BACKGROUND */}
      <div
        className="home-services-hero__bg"
        style={{
          backgroundImage: `url("${
            activeService?.detailImage ||
            activeService?.image ||
            "/images/services/Apartment-Kelowna-Painting-Building-ConstructionPainting-Crestline-Painting.jpg"
          }")`,
        }}
      />

      {/* OVERLAY */}
      <div className="home-services-hero__overlay" />

      <div className="container">
        <div className="home-services-hero__inner">

          <div className="home-services-hero__grid">
            {featuredServices.map((service) => {
              const isActive = activeService?.slug === service.slug;

              return (
                <Link
                  key={service.slug}
                  href="/services" // ✅ FIXED (NO MORE SLUG ROUTING)
                  className={`home-service-column ${
                    isActive ? "home-service-column--active" : ""
                  }`}
                  onMouseEnter={() => setActiveSlug(service.slug)}
                  onFocus={() => setActiveSlug(service.slug)}
                >
                  <div className="home-service-column__content">
                    <h2 className="home-service-column__title">
                      {service.title}
                    </h2>

                    <p className="home-service-column__copy">
                      {service.short}
                    </p>

                    <span className="home-service-column__button">
                      Learn More →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* MOBILE CTA */}
          <div className="home-services-hero__mobile-actions">
            <Link href="/services" className="site-header__cta">
              View All Services
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}