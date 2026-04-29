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

function getOrderedServices(): ServiceItem[] {
  const servicesBySlug = new Map(
    services.map((service) => [service.slug, service] as const)
  );

  const orderedServices = HOME_SERVICE_ORDER.map((slug) =>
    servicesBySlug.get(slug)
  ).filter((service): service is ServiceItem => Boolean(service));

  return orderedServices.length > 0 ? orderedServices : [...services];
}

export default function HomeHero() {
  const orderedServices = useMemo(() => getOrderedServices(), []);
  const firstService = orderedServices[0];

  const [activeSlug, setActiveSlug] = useState(firstService?.slug ?? "");

  const activeService =
    orderedServices.find((service) => service.slug === activeSlug) ??
    firstService;

  if (!activeService) return null;

  const activeImage = activeService.detailImage || activeService.image;

  return (
    <section
      className="home-services-hero"
      aria-labelledby="home-services-hero-heading"
    >
      <div
        key={activeService.slug}
        className="home-services-hero__bg"
        style={{
          backgroundImage: `url("${activeImage}")`,
        }}
        aria-hidden="true"
      />

      <div className="home-services-hero__overlay" aria-hidden="true" />

      <div className="home-services-hero__inner">
        <div className="container">
          <h1 id="home-services-hero-heading" className="sr-only">
            Crestline Painting services across British Columbia
          </h1>

          <div className="home-services-hero__grid">
            {orderedServices.map((service) => {
              const isActive = service.slug === activeService.slug;

              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className={`home-service-column${
                    isActive ? " home-service-column--active" : ""
                  }`}
                  onMouseEnter={() => setActiveSlug(service.slug)}
                  onFocus={() => setActiveSlug(service.slug)}
                  aria-label={`Learn more about ${service.title}`}
                >
                  <div className="home-service-column__content">
                    <h2 className="home-service-column__title">
                      {service.title}
                    </h2>

                    <p className="home-service-column__copy">
                      {service.short}
                    </p>

                    <span className="home-service-column__button">
                      Learn More
                      <span aria-hidden="true"> →</span>
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