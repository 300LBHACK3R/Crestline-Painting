import Link from "next/link";

const items = [
  {
    number: "01",
    label: "Primary Contact",
    value: "info@crestlinepainting.ca",
    href: "mailto:info@crestlinepainting.ca",
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
    <section className="section contact-details">
      <div className="container">
        <div className="card-grid contact-details__grid">

          {items.map((item) => (
            <article key={item.number} className="card contact-details__card">

              <div className="card__eyebrow">{item.number}</div>

              <div className="card__meta">{item.label}</div>

              {item.href ? (
                <a href={item.href} className="card__title contact-details__link">
                  {item.value}
                </a>
              ) : (
                <h3 className="card__title">{item.value}</h3>
              )}

              <p className="card__copy">{item.text}</p>

            </article>
          ))}

        </div>
      </div>
    </section>
  );
}