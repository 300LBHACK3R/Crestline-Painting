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
    <section className="home-services-band">
      <div
        className="home-services-band__bg"
        style={{
          backgroundImage: `url('${
            activeService?.detailImage || activeService?.image || "/images/home/Apartment-Kelowna-Painting-Building-ConstructionPainting-Crestline-Painting.jpg"
          }')`,
        }}
      />
      <div className="home-services-band__overlay" />

      <div className="container">
        <div className="home-services-band__shell">
          <div className="home-services-band__top">
            <div>
              <div className="section-intro__eyebrow section-intro__eyebrow--light">
                Service Areas
              </div>
              <h2 className="home-services-band__title">
                Built to support real project environments across British Columbia.
              </h2>
            </div>

            <Link href="/services" className="home-services-band__button">
              View All Services
            </Link>
          </div>

          <div className="home-services-band__grid">
            {featuredServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`service-spotlight-card ${
                  activeService?.slug === service.slug ? "service-spotlight-card--active" : ""
                }`}
                onMouseEnter={() => setActiveSlug(service.slug)}
                onFocus={() => setActiveSlug(service.slug)}
              >
                <div className="service-spotlight-card__title">{service.title}</div>
                <p className="service-spotlight-card__copy">{service.short}</p>
                <span className="service-spotlight-card__link">Learn More</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}