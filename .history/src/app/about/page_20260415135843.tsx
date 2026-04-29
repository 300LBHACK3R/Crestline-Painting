import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";
import PageHero from "@/components/shared/page-hero";

export default function AboutPage() {
  return (
    <>
      <SiteHeader light />
      <main>
        <PageHero
          eyebrow="About Crestline Painting"
          title="Built on craftsmanship, integrity, and over two decades of proven results."
          copy="Founded in 2003, Crestline Painting Ltd. has grown from a family-run operation into a trusted full-scale painting company serving custom homes, multi-family developments, commercial properties, strata complexes, and complex repair and restoration projects across British Columbia."
        />

        <section className="section">
          <div className="container">
            <div className="split-panel">
              <div className="split-panel__content">
                <div className="section-intro__eyebrow">Who We Are</div>

                <h2 className="section-intro__title">
                  We do not just paint. We set the standard.
                </h2>

                <p className="section-intro__copy">
                  At Crestline Painting Ltd., what began as a small family-run operation has grown
                  into a trusted full-scale painting company known for delivering exceptional
                  results across every sector. While the company has expanded, one thing has never
                  changed: a commitment to craftsmanship, integrity, and doing the job right the
                  first time.
                </p>

                <p className="section-intro__copy">
                  Today, Crestline Painting stands at the forefront of the industry, specializing
                  in everything from high-end custom homes to large-scale multi-family
                  developments, commercial properties, strata complexes, and complex repair and
                  restoration projects. No matter the size or scope, every project is approached
                  with the same precision, professionalism, and attention to detail.
                </p>

                <p className="section-intro__copy">
                  What sets Crestline apart is more than experience. Over the years, the team has
                  refined its processes, invested in better systems, stayed current with product
                  innovations, and built reliable workflows that consistently deliver superior
                  finishes. That combination of deep product knowledge, proven technique, and
                  organized execution allows Crestline to produce durable, high-quality results
                  across a wide range of project types.
                </p>

                <p className="section-intro__copy">
                  Crestline believes great painting is both an art and a science. Whether the work
                  involves achieving a flawless finish in a luxury home or coordinating the demands
                  of a large commercial or multi-family project, the approach remains the same:
                  bring expertise, accountability, and consistency to every phase of the job.
                </p>

                <p className="section-intro__copy">
                  As a family-rooted company, relationships matter. Crestline takes pride in
                  building long-term partnerships with homeowners, builders, developers, and
                  property managers who expect quality without compromise.
                </p>
              </div>

              <div className="stats-card">
                <div className="stats-card__item">
                  <strong>2003</strong>
                  <span>Founded</span>
                </div>

                <div className="stats-card__item">
                  <strong>20+</strong>
                  <span>Years of active painting experience in British Columbia</span>
                </div>

                <div className="stats-card__item">
                  <strong>BC</strong>
                  <span>Serving projects across British Columbia</span>
                </div>

                <div className="stats-card__item">
                  <strong>All Sectors</strong>
                  <span>Custom homes, multi-family, commercial, strata, and restoration work</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}