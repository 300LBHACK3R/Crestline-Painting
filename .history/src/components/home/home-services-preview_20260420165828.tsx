import Link from "next/link";
import { services } from "@/data/services";
import SectionIntro from "@/components/shared/section-intro";

export default function HomeServicesPreview() {
  return (
    <section className="section section--soft">
      <div className="container">
        <SectionIntro
          eyebrow="Services"
          title="Professional painting services built for real project environments."
          copy="From large-scale multi-family and commercial work to strata maintenance, custom homes, and interior painting, Crestline Painting delivers organized execution and consistent finish quality across every job."
        />

        <div className="service-grid">
          {services.map((service) => (
            <article key={service.slug} className="service-card">
              <div className="service-card__media">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-card__image"
                  loading="lazy"
                  decoding="async"
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

        <div className="section__actions">
          <Link href="/services" className="site-header__cta">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}