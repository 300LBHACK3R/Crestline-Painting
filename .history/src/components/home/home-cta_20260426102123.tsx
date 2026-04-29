import Link from "next/link";

export default function HomeCta() {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-panel home-cta-panel">
          <div className="cta-panel__content">
            <div className="section-intro__eyebrow">Request a Quote</div>

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
            <Link href="/contact" className="site-header__cta">
              Request a Quote
            </Link>

            <Link href="/projects" className="text-link">
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}