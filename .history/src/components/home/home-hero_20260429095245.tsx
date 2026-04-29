"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { services, type ServiceItem } from "@/data/services";

const HOME_SERVICE_ORDER = [
  "interior-painting",
  "multi-family",
  "custom-homes",
  "commercial-painting",
  "strata-building-maintenance",
] as const;

export default function HomeHero() {
  const orderedServices = useMemo<ServiceItem[]>(() => {
    const servicesBySlug = new Map(
      services.map((service) => [service.slug, service] as const)
    );

    const ordered = HOME_SERVICE_ORDER.map((slug) =>
      servicesBySlug.get(slug)
    ).filter((service): service is ServiceItem => Boolean(service));

    return ordered.length > 0 ? ordered : services;
  }, []);

  const [activeSlug, setActiveSlug] = useState<string>(
    orderedServices[0]?.slug ?? ""
  );

  const activeService =
    orderedServices.find((service) => service.slug === activeSlug) ??
    orderedServices[0];

  if (!activeService) return null;

  return (
    <section className="home-services-hero" aria-label="Featured services">
      <div
        key={activeService.slug}
        className="home-services-hero__bg"
        style={{
          backgroundImage: `url("${activeService.detailImage || activeService.image}")`,
        }}
      />

      <div className="home-services-hero__overlay" />

      <div className="home-services-hero__inner">
        <div className="container">
          <div className="home-services-hero__grid">
            {orderedServices.map((service) => {
              const isActive = service.slug === activeSlug;

              return (
                <Link
                  key={service.slug}
                  href="/services"
                  className={`home-service-column${
                    isActive ? " home-service-column--active" : ""
                  }`}
                  onMouseEnter={() => setActiveSlug(service.slug)}
                  onFocus={() => setActiveSlug(service.slug)}
                  aria-label={`View Crestline Painting services`}
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

          <div className="home-services-hero__mobile-actions">
            <Link
              href="/services"
              className="site-header__cta"
              aria-label="View all Crestline Painting services"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}