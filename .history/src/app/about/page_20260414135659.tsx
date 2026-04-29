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
          copy="Founded in 2003, Crestline Painting Ltd. has grown from a family-run operation into a trusted full-scale painting company serving custom homes, multi-family developments, commercial properties, strata complexes, and repair and restoration projects across British Columbia."
        />

        <section className="section">
          <div className="container">
            <div className="split-panel">
              <div className="split-panel__content">
                <div className="section-intro__eyebrow">Who We Are</div>
                <h2 className="section-intro__title">A company built to deliver at every scale.</h2>
                <p className="section-intro__copy">
                  Crestline Painting Ltd. was founded in 2003 as a small family-run operation and
                  has grown into a trusted full-scale painting company known for delivering
                  exceptional results across British Columbia.
                </p>
                <p className="section-intro__copy">
                  While the company has expanded, its core values have remained the same:
                  craftsmanship, integrity, and doing the job right the first time.
                </p>
                <p className="section-intro__copy">
                  Today, Crestline serves high-end custom homes, large-scale multi-family
                  developments, commercial properties, and strata environments with the same
                  precision and professionalism on every project.
                </p>
              </div>

              <div className="stats-card">
                <div className="stats-card__item">
                  <strong>2003</strong>
                  <span>Founded</span>
                </div>
                <div className="stats-card__item">
                  <strong>20+</strong>
                  <span>Years of experience</span>
                </div>
                <div className="stats-card__item">
                  <strong>BC</strong>
                  <span>Serving projects across British Columbia</span>
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