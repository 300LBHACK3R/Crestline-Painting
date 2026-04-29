const items = [
  {
    number: "01",
    label: "Email",
    value: "info@crestlinepainting.ca",
    text: "Best for project details, scope discussion, and supporting information.",
  },
  {
    number: "02",
    label: "Service Area",
    value: "All of BC",
    text: "Supporting projects across British Columbia.",
  },
  {
    number: "03",
    label: "Project Focus",
    value: "Commercial to Custom Homes",
    text: "Commercial, multifamily, strata, interior, exterior, and custom home painting.",
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