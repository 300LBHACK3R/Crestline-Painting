import Link from "next/link";

export default function ContactServiceAreas() {
  return (
    <section className="section contact-service-areas">
      <div className="container">

        <div className="cta-panel contact-service-areas__panel">

          <div className="contact-service-areas__content">
            <div className="section-intro__eyebrow">Service Area</div>

            <h2 className="section-intro__title">
              Supporting projects across British Columbia.
            </h2>

            <p className="section-intro__copy">
              Crestline Painting operates across British Columbia, supporting commercial,
              multi-family, strata, custom home, and interior painting projects with a focus on
              coordination, quality, and consistent results.
            </p>
          </div>

          {/* 🔥 ACTION (this was missing) */}
          <div className="contact-service-areas__actions">
            <Link href="/contact" className="site-header__cta">
              Request a Quote
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}