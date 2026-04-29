"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { services } from "@/data/services";

export default function HomeServicesPreview() {
  const featuredServices = useMemo(() => services.slice(0, 5), []);
  const [activeSlug, setActiveSlug] = useState(featuredServices[0]?.slug ?? "");

  const activeService =
    featuredServices.find((service) => service.slug === activeSlug) ?? featuredServices[0];

  return (
    <section className="home-services-hero">
      <div
        className="home-services-hero__bg"
        style={{
          backgroundImage: `url('${
            activeService?.detailImage ||
            activeService?.image ||
            "/images/services/Apartment-Kelowna-Painting-Building-ConstructionPainting-Crestline-Painting.jpg"
          }')`,
        }}
      />
      <div className="home-services-hero__overlay" />

      <div className="container">
        <div className="home-services-hero__inner">
          <div className="home-services-hero__grid">
            {featuredServices.map((service, index) => {
              const isActive = activeService?.slug === service.slug;

              return (
                <div
                  key={service.slug}
                  className={`home-service-column ${isActive ? "home-service-column--active" : ""}`}
                  onMouseEnter={() => setActiveSlug(service.slug)}
                  onFocus={() => setActiveSlug(service.slug)}
                  tabIndex={0}
                >
                  <div className="home-service-column__content">
                    <h2 className="home-service-column__title">{service.title}</h2>
                    <p className="home-service-column__copy">{service.short}</p>

                    {index === 0 && (
                      <Link
                        href={`/services/${service.slug}`}
                        className="home-service-column__button"
                      >
                        Learn More
                      </Link>
                    )}
                  </div>
                </div>
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