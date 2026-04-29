import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";
import PageHero from "@/components/shared/page-hero";
import { services } from "@/data/services";

export default function StrataBuildingMaintenancePage() {
  const service = services.find((item) => item.slug === "strata-building-maintenance")!;

  return (
    <>
      <SiteHeader light />
      <main>
        <PageHero
          eyebrow="Strata & Maintenance"
          title={service.title}
          copy={service.intro}
        />

        <section className="section">
          <div className="container">
            <div className="split-panel">
              <div className="split-panel__content">
                <div className="section-intro__eyebrow">Overview</div>

                <h2 className="section-intro__title">
                  Long-term painting and maintenance solutions for strata and existing buildings.
                </h2>

                <p className="section-intro__copy">
                  Crestline Painting provides comprehensive painting and maintenance services for
                  strata properties, multi-unit buildings, and existing structures that require
                  ongoing care, repair, and presentation updates.
                </p>

                <p className="section-intro__copy">
                  Working in occupied environments requires clear communication, organization, and
                  respect for residents and property operations. Crestline coordinates closely with
                  property managers and strata councils to ensure projects are handled smoothly,
                  safely, and with minimal disruption.
                </p>

                <p className="section-intro__copy">
                  The focus is always on long-term value — using the right products, preparation
                  methods, and coating systems to protect surfaces, extend building life, and
                  maintain a clean, professional appearance over time.
                </p>
              </div>

              <div className="stats-card">
                <div className="stats-card__item">
                  <strong>Ongoing</strong>
                  <span>Maintenance programs and scheduled upkeep</span>
                </div>

                <div className="stats-card__item">
                  <strong>Coordinated</strong>
                  <span>Clear communication with strata and property management</span>
                </div>

                <div className="stats-card__item">
                  <strong>Durable</strong>
                  <span>Long-lasting coatings for building protection</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="card">
              <div className="card__eyebrow">Included</div>

              <h3 className="card__title">
                Strata and maintenance services include
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