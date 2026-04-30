"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { services, type ServiceItem } from "@/data/services";

const HOME_SERVICE_ORDER = [
  "multi-family",
  "custom-homes",
  "strata",
  "commercial",
] as const;

export default function HomeHero() {
  const orderedServices = useMemo<ServiceItem[]>(() => {
    const bySlug = new Map(
      services.map((service) => [service.slug, service] as const)
    );

    return HOME_SERVICE_ORDER.map((slug) => bySlug.get(slug)).filter(
      (value): value is ServiceItem => Boolean(value)
    );
  }, []);

  const [activeSlug, setActiveSlug] = useState<string>("multi-family");

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
          backgroundImage: `url("${
            activeService.detailImage || activeService.image
          }")`,
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
                  href={`/services/${service.slug}`}
                  className={`home-service-column${
                    isActive ? " home-service-column--active" : ""
                  }`}
                  onMouseEnter={() => setActiveSlug(service.slug)}
                  onFocus={() => setActiveSlug(service.slug)}
                  aria-label={`View ${service.title} service details`}
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