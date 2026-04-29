"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { services } from "@/data/services";

type HomeServicePreviewItem = {
  slug: string;
  title: string;
  short: string;
  image?: string;
  detailImage?: string;
};

const typedServices = services as readonly HomeServicePreviewItem[];

const FALLBACK_SERVICE_IMAGE = "/images/services/services-hero.jpg";

function getServiceImage(service?: HomeServicePreviewItem) {
  return service?.detailImage ?? service?.image ?? FALLBACK_SERVICE_IMAGE;
}

export default function HomeServicesPreview() {
  const featuredServices = useMemo<HomeServicePreviewItem[]>(
    () => typedServices.slice(0, 5),
    []
  );

  const [activeSlug, setActiveSlug] = useState<string>(
    featuredServices[0]?.slug ?? ""
  );

  const activeService =
    featuredServices.find((service) => service.slug === activeSlug) ??
    featuredServices[0];

  const backgroundImage = getServiceImage(activeService);

  return (
    <section className="home-services-hero" aria-label="Featured services">
      <div
        className="home-services-hero__bg"
        style={{
          backgroundImage: `url("${backgroundImage}")`,
        }}
      />

      <div className="home-services-hero__overlay" />

      <div className="container">
        <div className="home-services-hero__inner">
          <div className="home-services-hero__grid">
            {featuredServices.map((service) => {
              const isActive = activeService?.slug === service.slug;

              return (
                <Link
                  key={service.slug}
                  href="/services"
                  className={`home-service-column${
                    isActive ? " home-service-column--active" : ""
                  }`}
                  onMouseEnter={() => setActiveSlug(service.slug)}
                  onFocus={() => setActiveSlug(service.slug)}
                  aria-label="View Crestline Painting services"
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