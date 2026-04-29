import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";
import PageHero from "@/components/shared/page-hero";
import { services } from "@/data/services";

export default function MultiFamilyPage() {
  const service = services.find((item) => item.slug === "multi-family")!;

  return (
    <>
      <SiteHeader light />
      <main>
        <PageHero
          eyebrow="Multi-Family"
          title={service.title}
          copy={service.intro}
        />

        <section className="section">
          <div className="container">
            <div className="split-panel">
              <div className="split-panel__content">
                <div className="section-intro__eyebrow">Overview</div>

                <h2 className="section-intro__title">
                  Large-scale painting solutions built for multi-family projects.
                </h2>

                <p className="section-intro__copy">
                  Crestline Painting specializes in large-scale multi-family work, delivering
                  consistent finishes across apartments, townhomes, and condominium developments.
                  The team is structured to handle high-volume production while maintaining strict
                  quality control at every stage.
                </p>

                <p className="section-intro__copy">
                  Multi-family projects require more than good painting. They require coordination,
                  scheduling, and the ability to work efficiently alongside builders and other
                  trades. Crestline uses refined systems and experienced project management to keep
                  projects moving without compromising on detail.
                </p>

                <p className="section-intro__copy">
                  The result is a clean, uniform finish across every unit, common area, and shared
                  space — completed with professionalism, efficiency, and long-term durability in
                  mind.
                </p>
              </div>

              <div className="stats-card">
                <div className="stats-card__item">
                  <strong>Large Scale</strong>
                  <span>Built for apartments, condos, and townhouse developments</span>
                </div>

                <div className="stats-card__item">
                  <strong>Efficient</strong>
                  <span>Structured workflows that support timeline-driven production</span>
                </div>

                <div className="stats-card__item">
                  <strong>Consistent</strong>
                  <span>Uniform finishes with strong quality control across every stage</span>
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
                Multi-family painting services include
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