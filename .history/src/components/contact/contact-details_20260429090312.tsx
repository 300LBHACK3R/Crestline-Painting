type ContactDetailItem = {
  number: string;
  label: string;
  value: string;
  href?: string;
  text: string;
};

const contactDetails: ContactDetailItem[] = [
  {
    number: "01",
    label: "Primary Contact",
    value: "info@crestlinepainting.ca",
    href: "mailto:info@crestlinepainting.ca",
    text:
      "Best for project details, scope discussions, plans, photos, timelines, and supporting information.",
  },
  {
    number: "02",
    label: "Phone",
    value: "(604) 243-0328",
    href: "tel:+16042430328",
    text:
      "Call Crestline Painting directly to discuss availability, project type, and next steps.",
  },
  {
    number: "03",
    label: "Service Area",
    value: "British Columbia",
    text:
      "Supporting commercial, multi-family, strata, custom home, and interior painting projects across BC.",
  },
  {
    number: "04",
    label: "Project Types",
    value: "Commercial to Custom Homes",
    text:
      "Commercial, multi-family, strata, interior, exterior, and high-end custom home painting services.",
  },
];

export default function ContactDetails() {
  return (
    <section
      className="section contact-details"
      aria-labelledby="contact-details-heading"
    >
      <div className="container">
        <div className="section-intro contact-details__intro">
          <span className="section-intro__eyebrow">Get in Touch</span>

          <h2 id="contact-details-heading" className="section-intro__title">
            Clear contact options for your next painting project.
          </h2>

          <p className="section-intro__copy">
            Send project details, request a quote, or connect directly with
            Crestline Painting to discuss scope, timing, and service needs.
          </p>
        </div>

        <div className="card-grid contact-details__grid">
          {contactDetails.map((item) => (
            <article key={item.number} className="card contact-details__card">
              <span className="card__eyebrow">{item.number}</span>

              <div className="card__meta">{item.label}</div>

              {item.href ? (
                <a
                  href={item.href}
                  className="card__title contact-details__link"
                  aria-label={`${item.label}: ${item.value}`}
                >
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