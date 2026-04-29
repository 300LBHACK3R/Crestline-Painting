import Link from "next/link";
import { services } from "@/data/services";

export default function ServiceCardGrid() {
  return (
    <div className="service-grid">
      {services.map((service) => (
        <Link
          key={service.slug}
          href="/services"
          className="service-card"
          aria-label="View Crestline Painting services"
        >
          <article>
            <div className="service-card__media">
              <img
                src={service.image}
                alt={service.title}
                className="service-card__image"
                loading="lazy"
                decoding="async"
              />

              <div className="service-card__overlay" aria-hidden="true" />
            </div>

            <div className="service-card__body">
              <span className="card__eyebrow">Service</span>

              <h3 className="service-card__title">{service.title}</h3>

              <p className="service-card__copy">{service.short}</p>

              <span className="service-card__link">
                View Service
                <span className="service-card__arrow" aria-hidden="true">
                  →
                </span>
              </span>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
}