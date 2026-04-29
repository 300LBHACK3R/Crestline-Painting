import Link from "next/link";

export default function ContactServiceAreas() {
  return (
    <section
      className="section contact-service-areas"
      aria-labelledby="contact-service-areas-heading"
    >
      <div className="container">
        <div className="cta-panel contact-service-areas__panel">
          <div className="contact-service-areas__content">
            <span className="section-intro__eyebrow">Service Area</span>

            <h2
              id="contact-service-areas-heading"
              className="section-intro__title"
            >
              Supporting painting projects across British Columbia.
            </h2>

            <p className="section-intro__copy">
              Crestline Painting works with commercial, multi-family, strata,
              custom home, and interior clients across British Columbia,
              bringing organized coordination, professional site standards, and
              consistent finish quality to every project.
            </p>
          </div>

          <div className="contact-service-areas__actions">
            <Link
              href="/contact"
              className="button button--primary"
              aria-label="Request a quote for painting services in British Columbia"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}