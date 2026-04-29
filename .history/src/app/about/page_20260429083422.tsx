import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";
import PageHero from "@/components/shared/page-hero";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <SiteHeader light />

      <main className="about-page">
        

        {/* 🔥 STORY */}
        <section className="section">
          <div className="container">

            <div className="split-panel split-panel--about">

              <div className="split-panel__content">
                <div className="section-intro__eyebrow">Our Story</div>

                <h2 className="section-intro__title">
                  From a family-run foundation to a trusted name across British Columbia.
                </h2>

                <p className="section-intro__copy">
                  Crestline Painting Ltd. was founded in 2003 with a simple focus: do the work
                  properly, maintain strong standards, and deliver results clients can rely on.
                </p>

                <p className="section-intro__copy">
                  Over the years, that approach has built a reputation for quality,
                  organization, and consistency across a wide range of project types.
                </p>

                <p className="section-intro__copy">
                  Every project is approached with preparation, communication,
                  workmanship, and finish quality — because results come from execution.
                </p>
              </div>

              {/* 🔥 CLEAN MEDIA PANEL */}
              <div className="media-panel media-panel--about" />

            </div>

          </div>
        </section>

        {/* 🔥 PROOF SECTION */}
        <section className="section section--soft">
          <div className="container">

            <div className="card-grid card-grid--three about-stats">

              <article className="stats-card stats-card--about">
                <strong className="stats-card__value">20+</strong>
                <span>Years of experience</span>
              </article>

              <article className="stats-card stats-card--about">
                <strong className="stats-card__value">BC</strong>
                <span>Serving British Columbia</span>
              </article>

              <article className="stats-card stats-card--about">
                <strong className="stats-card__value">Trusted</strong>
                <span>Commercial to custom projects</span>
              </article>

            </div>

          </div>
        </section>

        {/* 🔥 CTA */}
        <section className="section">
          <div className="container">

            <div className="cta-panel cta-panel--about">

              <div className="cta-panel__content">
                <div className="section-intro__eyebrow">Work With Crestline</div>
                

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