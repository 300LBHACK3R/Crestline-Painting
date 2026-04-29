import Link from "next/link";

export default function ContactCtaStrip() {
  return (
    <section
      className="section contact-cta"
      aria-labelledby="contact-cta-heading"
    >
      <div className="container">
        <div className="cta-panel contact-cta__panel">
          <div className="contact-cta__content">
            <span className="section-intro__eyebrow">Next Step</span>

            <h2 id="contact-cta-heading" className="section-intro__title">
              Start your project with a clear first conversation.
            </h2>

            <p className="section-intro__copy">
              Send your project details, location, and timeline. Crestline
              Painting will review the information and provide a practical next
              step to move the project forward.
            </p>
          </div>

          <div className="cta-panel__actions contact-cta__actions">
            <Link
              href="/contact"
              className="button button--primary contact-cta__primary"
              aria-label="Request a quote from Crestline Painting"
            >
              Request a Quote
            </Link>

            <a
              href="mailto:info@crestlinepainting.ca"
              className="text-link"
              aria-label="Email Crestline Painting"
            >
              Email Crestline
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}