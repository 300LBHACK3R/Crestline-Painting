import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";

const proofItems = [
  {
    value: "20+",
    label: "Years of experience",
  },
  {
    value: "BC",
    label: "Serving British Columbia",
  },
  {
    value: "Trusted",
    label: "Commercial to custom projects",
  },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader light />

      <main className="about-page">
        <h1 className="sr-only">About Crestline Painting Ltd.</h1>

        <section className="section section--about-story">
          <div className="container">
            <div className="split-panel split-panel--about">
              <div className="split-panel__content">
                <span className="section-intro__eyebrow">Our Story</span>

                <h2 className="section-intro__title">
                  From a family-run foundation to a trusted name across British Columbia.
                </h2>

                <p className="section-intro__copy">
                  Crestline Painting Ltd. was founded in 2003 with a simple focus:
                  complete the work properly, maintain strong standards, and deliver
                  results clients can rely on.
                </p>

                <p className="section-intro__copy">
                  Over the years, that approach has built a reputation for quality,
                  organization, and consistency across a wide range of project types.
                </p>

                <p className="section-intro__copy">
                  Every project is approached with preparation, communication,
                  workmanship, and finish quality — because dependable results come
                  from disciplined execution.
                </p>
              </div>

              <div
                className="media-panel media-panel--about"
                aria-label="Crestline Painting project work"
                role="img"
              />
            </div>
          </div>
        </section>

        <section
          className="section section--soft about-proof-section"
          aria-labelledby="about-proof-heading"
        >
          <div className="container">
            <h2 id="about-proof-heading" className="sr-only">
              Crestline Painting experience and service coverage
            </h2>

            <div className="card-grid card-grid--three about-stats">
              {proofItems.map((item) => (
                <article key={item.label} className="stats-card stats-card--about">
                  <strong className="stats-card__value">{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}