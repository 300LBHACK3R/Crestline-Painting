import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";

export default function ServiceCardGrid() {
  return (
    <div className="service-grid" aria-label="Crestline Painting services">
      {services.map((service) => (
        <Link
          key={service.slug}
          href={`/services/${service.slug}`}
          className="service-card"
          aria-label={`View ${service.title} service details`}
        >
          <article className="service-card__inner">
            <div className="service-card__media">
              <Image
                src={service.image}
                alt={`${service.title} by Crestline Painting`}
                className="service-card__image"
                fill
                sizes="(max-width: 860px) 100vw, 50vw"
              />

              <div className="service-card__overlay" aria-hidden="true" />
            </div>

            <div className="service-card__body">
              <div className="card__eyebrow">Service</div>

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