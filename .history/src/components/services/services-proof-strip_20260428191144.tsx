export default function ServicesProofStrip() {
  const items = [
    {
      value: "20+",
      label: "Years of experience",
      copy:
        "Built around dependable scheduling, site professionalism, and consistent finish quality.",
    },
    {
      value: "BC",
      label: "Serving British Columbia",
      copy:
        "Supporting commercial, multi-family, strata, custom home, and interior environments.",
    },
    {
      value: "Clean",
      label: "Professional delivery standard",
      copy:
        "Every service area is structured around coordination, presentation, and dependable execution.",
    },
  ];

  return (
    <section
      className="services-proof-strip"
      aria-label="Why clients choose Crestline"
    >
      <div className="container">
        <div className="services-proof-strip__grid">
          {items.map((item) => (
            <article
              key={item.label}
              className="services-proof-strip__card"
            >
              <div className="services-proof-strip__topline" />

              <div className="services-proof-strip__value">
                {item.value}
              </div>

              <h3 className="services-proof-strip__label">
                {item.label}
              </h3>

              <p className="services-proof-strip__copy">
                {item.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}