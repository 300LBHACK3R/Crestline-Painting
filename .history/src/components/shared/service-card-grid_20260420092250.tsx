import Link from "next/link";
import { services } from "@/data/services";

export default function ServiceCardGrid() {
  return (
    <div className="card-grid">
      {services.map((service) => (
        <article key={service.slug} className="card">
          <div className="card__eyebrow">Service Area</div>
          <h3 className="card__title">{service.title}</h3>
          <p className="card__copy">{service.short}</p>

          <Link
            href={`/services/${service.slug}`}
            className="card__link"
            aria-label={`View details for ${service.title}`}
          >
            View Service
          </Link>
        </article>
      ))}
    </div>
  );
}