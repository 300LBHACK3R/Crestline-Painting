export default function ServicesProofStrip() {
  return (
    <section className="services-proof-strip" aria-label="Why clients choose Crestline">
      <div className="services-proof-strip__grid">
        <article className="services-proof-strip__card">
          <div className="services-proof-strip__topline" />
          <div className="services-proof-strip__value">20+</div>
          <h3 className="services-proof-strip__label">Years of experience</h3>
          <p className="services-proof-strip__copy">
            Built around dependable scheduling, site professionalism, and consistent finish quality.
          </p>
        </article>

        <article className="services-proof-strip__card">
          <div className="services-proof-strip__topline" />
          <div className="services-proof-strip__value">BC</div>
          <h3 className="services-proof-strip__label">Serving British Columbia</h3>
          <p className="services-proof-strip__copy">
            Supporting commercial, multi-family, strata, custom home, and interior environments.
          </p>
        </article>

        <article className="services-proof-strip__card">
          <div className="services-proof-strip__topline" />
          <div className="services-proof-strip__value">Clean</div>
          <h3 className="services-proof-strip__label">Professional delivery standard</h3>
          <p className="services-proof-strip__copy">
            Every service area is structured around coordination, presentation, and dependable execution.
          </p>
        </article>
      </div>
    </section>
  );
}