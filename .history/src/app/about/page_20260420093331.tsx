import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";
import PageHero from "@/components/shared/page-hero";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <SiteHeader light />
      <main>
        <PageHero
          eyebrow="About"
          title="A painting company built on workmanship, reliability, and long-term trust."
          copy="Crestline Painting Ltd. has been serving British Columbia since 2003, delivering consistent, high-quality painting solutions across commercial, multi-family, strata, custom home, and interior projects."
        />

        <section className="section">
          <div className="container">
            <div className="split-panel">
              <div className="split-panel__content">
                <div className="section-intro__eyebrow">Our Story</div>
                <h2 className="section-intro__title">
                  From a family-run foundation to a trusted name across British Columbia.
                </h2>

                <p className="section-intro__copy">
                  Crestline Painting Ltd. was founded in 2003 with a simple focus: do the work
                  properly, maintain strong standards, and deliver results clients can rely on.
                  Over the years, that approach has helped build a reputation for quality,
                  organization, and consistency across a wide range of project types.
                </p>

                <p className="section-intro__copy">
                  Today, Crestline continues to support commercial developments, multi-family
                  construction, strata properties, custom homes, and interior painting projects
                  with the same practical mindset that built the company from the start.
                </p>

                <p className="section-intro__copy">
                  Every project is approached with a commitment to preparation, communication,
                  workmanship, and finish quality — because a strong result is not just about
                  paint, but about how the entire job is managed from start to finish.
                </p>
              </div>

              <div
                className="media-panel"
                style={{
                  backgroundImage:
                    "url('/images/about/about-crestline-placeholder.jpg')",
                }}
              />
            </div>
          </div>
        </section>

        <section className="section section--soft">
          <div className="container">
            <div className="card-grid card-grid--three">
              <article className="stats-card">
                <div className="stats-card__item">
                  <strong>20+</strong>
                  <span>Years of painting experience</span>
                </div>
              </article>

              <article className="stats-card">
                <div className="stats-card__item">
                  <strong>BC</strong>
                  <span>Serving projects across British Columbia</span>
                </div>
              </article>

              <article className="stats-card">
                <div className="stats-card__item">
                  <strong>Trusted</strong>
                  <span>Commercial, strata, multi-family, and custom home capability</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="cta-panel">
              <div className="cta-panel__content">
                <div className="section-intro__eyebrow">Work With Crestline</div>
                <h2 className="section-intro__title">
                  Need a team that brings clean finishes and dependable execution?
                </h2>
                <p className="section-intro__copy">
                  Crestline Painting is built to support projects with professionalism,
                  organization, and a strong standard of workmanship.
                </p>
              </div>

              <div className="cta-panel__actions">
                <Link href="/contact" className="site-header__cta">
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}