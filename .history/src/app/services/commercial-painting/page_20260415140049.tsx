import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";
import PageHero from "@/components/shared/page-hero";
import { services } from "@/data/services";

export default function CommercialPaintingPage() {
  const service = services.find((item) => item.slug === "commercial-painting")!;

  return (
    <>
      <SiteHeader light />
      <main>
        <PageHero
          eyebrow="Commercial Painting"
          title={service.title}
          copy={service.intro}
        />

        {/* Intro Section (NEW – makes page feel complete) */}
        <section className="section">
          <div className="container">
            <div className="split-panel">
              <div className="split-panel__content">
                <div className="section-intro__eyebrow">Overview</div>

                <h2 className="section-intro__title">
                  Professional painting solutions built for commercial environments.
                </h2>

                <p className="section-intro__copy">
                  Crestline Painting delivers reliable, high-quality commercial painting
                  services across offices, retail units, industrial buildings, and
                  tenant improvement projects. Every job is approached with a focus on
                  organization, efficiency, and minimal disruption to ongoing operations.
                </p>

                <p className="section-intro__copy">
                  With structured workflows and experienced project coordination,
                  Crestline ensures projects stay on schedule while maintaining a
                  consistent, professional finish across all spaces.
                </p>
              </div>

              <div className="stats-card">
                <div className="stats-card__item">
                  <strong>Flexible</strong>
                  <span>Scheduling including after-hours work</span>
                </div>

                <div className="stats-card__item">
                  <strong>Efficient</strong>
                  <span>Minimal disruption to business operations</span>
                </div>

                <div className="stats-card__item">
                  <strong>Durable</strong>
                  <span>Commercial-grade coatings and finishes</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Included Services */}
        <section className="section">
          <div className="container">
            <div className="card">
              <div className="card__eyebrow">Included</div>

              <h3 className="card__title">
                Commercial painting services include
              </h3>

              <ul className="simple-list">
                {service.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}