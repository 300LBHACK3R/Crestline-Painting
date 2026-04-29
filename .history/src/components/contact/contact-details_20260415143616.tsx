const items = [
  {
    number: "01",
    label: "Primary Contact",
    value: "info@crestlinepainting.ca",
    text: "Best for project details, scope discussions, and sharing plans, photos, or supporting information.",
  },
  {
    number: "02",
    label: "Service Area",
    value: "British Columbia",
    text: "Crestline Painting supports commercial, multi-family, strata, and custom home projects across BC.",
  },
  {
    number: "03",
    label: "Project Types",
    value: "Commercial to Custom Homes",
    text: "Commercial, multi-family, strata, interior, exterior, and high-end custom home painting services.",
  },
];

export default function ContactDetails() {
  return (
    <section className="section">
      <div className="container">
        <div className="card-grid">
          {items.map((item) => (
            <article key={item.number} className="card">
              <div className="card__eyebrow">{item.number}</div>

              <h3 className="card__title">{item.value}</h3>

              <div className="card__meta">{item.label}</div>

              <p className="card__copy">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}