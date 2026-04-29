import Link from "next/link";

export default function HomeCta() {
  return (
    <section className="section home-cta">
      <div className="container">
        <div className="cta-panel home-cta-panel">

          <div className="cta-panel__content">
            <span className="section-intro__eyebrow">
              Request a Quote
            </span>

            <h2 className="section-intro__title">
              Need a painting team that brings professionalism, coordination, and clean results?
            </h2>

            <p className="section-intro__copy">
              Crestline Painting works across British Columbia on commercial, multi-family, strata,
              custom home, and interior projects with a practical, organized approach built to deliver
              strong finishes and dependable execution.
            </p>
          </div>

          <div className="cta-panel__actions">
            <Link
              href="/contact"
              className="site-header__cta cta-panel__primary"
              aria-label="Request a quote from Crestline Painting"
            >
              Request a Quote
            </Link>

            <Link
              href="/projects"
              className="text-link"
              aria-label="View Crestline Painting project portfolio"
            >
              View Projects →
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}