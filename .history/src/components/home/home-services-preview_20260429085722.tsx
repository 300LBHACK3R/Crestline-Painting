"use client";

import Link from "next/link";
import { useState } from "react";
import { services } from "@/data/services";

const FALLBACK_SERVICE_IMAGE =
  "/images/services/Apartment-Kelowna-Painting-Building-ConstructionPainting-Crestline-Painting.jpg";

export default function HomeServicesPreview() {
  const featuredServices = services.slice(0, 5);
  const firstService = featuredServices[0];

  const [activeSlug, setActiveSlug] = useState(firstService?.slug ?? "");

  const activeService =
    featuredServices.find((service) => service.slug === activeSlug) ??
    firstService;

  const backgroundImage =
    activeService?.detailImage || activeService?.image || FALLBACK_SERVICE_IMAGE;

  return (
    <section
      className="home-services-hero"
      aria-labelledby="home-services-heading"
    >
      <div
        className="home-services-hero__bg"
        style={{
          backgroundImage: `url("${backgroundImage}")`,
        }}
        aria-hidden="true"
      />

      <div className="home-services-hero__overlay" aria-hidden="true" />

      <div className="container">
        <div className="home-services-hero__inner">
          <h2 id="home-services-heading" className="sr-only">
            Crestline Painting services
          </h2>

          <div className="home-services-hero__grid">
            {featuredServices.map((service) => {
              const isActive = activeService?.slug === service.slug;

              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className={`home-service-column ${
                    isActive ? "home-service-column--active" : ""
                  }`}
                  aria-label={`Learn more about ${service.title}`}
                  onMouseEnter={() => setActiveSlug(service.slug)}
                  onFocus={() => setActiveSlug(service.slug)}
                >
                  <div className="home-service-column__content">
                    <h3 className="home-service-column__title">
                      {service.title}
                    </h3>

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
            <Link href="/services" className="site-header__cta">
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}