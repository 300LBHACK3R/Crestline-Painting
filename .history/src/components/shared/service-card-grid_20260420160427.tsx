import Link from "next/link";
import { services } from "@/data/services";

export default function ServiceCardGrid() {
  return (
    <div className="service-grid">
      {services.map((service) => (
        <article key={service.slug} className="service-card">
          <div className="service-card__media">
            <img
              src={service.image}
              alt={service.title}
              className="service-card__image"
            />
          </div>

          <div className="service-card__body">
            <div className="card__eyebrow">Service Area</div>
            <h3 className="service-card__title">{service.title}</h3>
            <p className="service-card__copy">{service.short}</p>

            <Link
              href={`/services/${service.slug}`}
              className="service-card__link"
              aria-label={`View details for ${service.title}`}
            >
              View Service
              <span className="service-card__arrow">→</span>
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}