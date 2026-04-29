import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";
import PageHero from "@/components/shared/page-hero";
import ServiceCardGrid from "@/components/shared/service-card-grid";

export default function ServicesPage() {
  return (
    <>
      <SiteHeader light />
      <main>
        <PageHero
          eyebrow="Services"
          title="Professional painting services for commercial, multi-family, strata, custom home, and interior work."
          copy="Crestline Painting provides a practical, high-standard service mix designed for real project environments across British Columbia, with a focus on quality, coordination, consistent finishes, and long-term performance."
        />

        <section className="section">
          <div className="container">
            <div className="split-panel">
              <div className="split-panel__content">
                <div className="section-intro__eyebrow">Our Approach</div>

                <h2 className="section-intro__title">
                  A structured service mix built for real projects and real standards.
                </h2>

                <p className="section-intro__copy">
                  Crestline Painting works across a broad range of project types, from
                  large-scale commercial and multi-family developments to strata properties,
                  custom homes, and detailed interior painting work.
                </p>

                <p className="section-intro__copy">
                  Each service is supported by the same core strengths: strong preparation,
                  organized execution, product knowledge, reliable coordination, and a finish
                  standard built to reflect professionalism at every level of the job.
                </p>

                <p className="section-intro__copy">
                  Whether the project requires production efficiency, premium detail, long-term
                  maintenance planning, or clean occupied-space execution, Crestline brings the
                  systems and experience needed to deliver with consistency.
                </p>
              </div>

              <div className="stats-card">
                <div className="stats-card__item">
                  <strong>Versatile</strong>
                  <span>Commercial, multi-family, strata, custom homes, and interior work</span>
                </div>

                <div className="stats-card__item">
                  <strong>Organized</strong>
                  <span>Clear systems, project coordination, and reliable execution</span>
                </div>

                <div className="stats-card__item">
                  <strong>Consistent</strong>
                  <span>Finish quality built around preparation, detail, and durability</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <ServiceCardGrid />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}