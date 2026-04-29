type ProofItem = {
  value: string;
  label: string;
  copy: string;
};

const proofItems: ProofItem[] = [
  {
    value: "20+",
    label: "Years of Experience",
    copy:
      "A long-standing painting company built around dependable scheduling, clean execution, and consistent finish quality.",
  },
  {
    value: "BC",
    label: "Serving British Columbia",
    copy:
      "Supporting commercial, multi-family, strata, custom home, and interior painting projects across the province.",
  },
  {
    value: "Clean",
    label: "Professional Delivery",
    copy:
      "Every project is approached with organized coordination, jobsite respect, and a high standard of presentation.",
  },
];

export default function ServicesProofStrip() {
  return (
    <section
      className="services-proof-strip"
      aria-labelledby="services-proof-heading"
    >
      <div className="container">
        <h2 id="services-proof-heading" className="sr-only">
          Why clients choose Crestline Painting
        </h2>

        <div className="services-proof-strip__grid">
          {proofItems.map((item) => (
            <article key={item.label} className="services-proof-strip__card">
              <div className="services-proof-strip__topline" aria-hidden="true" />

              <strong className="services-proof-strip__value">
                {item.value}
              </strong>

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