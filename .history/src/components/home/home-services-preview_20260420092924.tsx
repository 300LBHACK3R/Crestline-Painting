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

        <div className="card-grid">
          {services.map((service) => (
            <article key={service.slug} className="card">
              <div className="card__eyebrow">Service Area</div>
              <h3 className="card__title">{service.title}</h3>
              <p className="card__copy">{service.short}</p>
              <Link href={`/services/${service.slug}`} className="card__link">
                View Service
              </Link>
            </article>
          ))}
        </div>

        <div className="section__actions">
          <Link href="/services" className="card__link">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}