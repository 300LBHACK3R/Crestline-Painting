import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";
import PageHero from "@/components/shared/page-hero";
import { services } from "@/data/services";

export default function InteriorPaintingPage() {
  const service = services.find((item) => item.slug === "interior-painting")!;

  return (
    <>
      <SiteHeader light />
      <main>
        <PageHero
          eyebrow="Interior Painting"
          title={service.title}
          copy={service.intro}
        />

        <section className="section">
          <div className="container">
            <div className="split-panel">
              <div className="split-panel__content">
                <div className="section-intro__eyebrow">Overview</div>

                <h2 className="section-intro__title">
                  Clean, detailed interior painting built around finish quality and presentation.
                </h2>

                <p className="section-intro__copy">
                  Interior painting has a direct impact on how a space feels, looks, and performs
                  over time. Crestline Painting approaches interior work with a strong focus on
                  preparation, protection, clean execution, and a polished final result.
                </p>

                <p className="section-intro__copy">
                  From occupied residential spaces to professional interiors and common areas, every
                  project is handled with care and attention to detail. Surfaces are prepared
                  properly, transitions are kept clean, and the finish is completed to a standard
                  that supports both appearance and durability.
                </p>

                <p className="section-intro__copy">
                  Whether the work involves walls, ceilings, trim, patching, or detailed finish
                  work, Crestline delivers interior painting solutions that are organized,
                  efficient, and built to look sharp from every angle.
                </p>
              </div>

              <div className="stats-card">
                <div className="stats-card__item">
                  <strong>Clean</strong>
                  <span>Careful masking, protection, and organized execution</span>
                </div>

                <div className="stats-card__item">
                  <strong>Detailed</strong>
                  <span>Walls, ceilings, trim, patching, and finish work</span>
                </div>

                <div className="stats-card__item">
                  <strong>Professional</strong>
                  <span>Strong presentation and consistent interior finish quality</span>
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
                Interior painting services include
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