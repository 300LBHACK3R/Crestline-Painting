import Link from "next/link";
import { services } from "@/data/services";

export default function ServiceCardGrid() {
  return (
    <div className="service-grid">
      {services.map((service) => (
        <Link
          key={service.slug} // safe to keep
          href="/services" // ✅ FIXED (no more slug routing)
          className="service-card"
          aria-label={`View services`}
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

              <div className="service-card__overlay" />
            </div>

            <div className="service-card__body">
              <div className="card__eyebrow">Service Area</div>

              <h3 className="service-card__title">
                {service.title}
              </h3>

              <p className="service-card__copy">
                {service.short}
              </p>

              <div className="service-card__link">
                View Services
                <span className="service-card__arrow">→</span>
              </div>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
}