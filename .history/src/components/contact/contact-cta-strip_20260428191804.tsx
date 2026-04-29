import Link from "next/link";

export default function ContactCtaStrip() {
  return (
    <section className="section contact-cta">
      <div className="container">

        <div className="cta-panel contact-cta__panel">

          <div className="contact-cta__content">
            <span className="section-intro__eyebrow">
              Next Step
            </span>

            <h2 className="section-intro__title">
              Start your project with a clear, professional first conversation.
            </h2>

            <p className="section-intro__copy">
              Send over your project details, location, and timeline. Crestline Painting will review the information and provide a clear, practical response to move things forward.
            </p>
          </div>

          <div className="cta-panel__actions contact-cta__actions">

            <Link
              href="/contact"
              className="site-header__cta contact-cta__primary"
              aria-label="Request a quote from Crestline Painting"
            >
              Request a Quote
            </Link>

            <a
              href="mailto:info@crestlinepainting.ca"
              className="text-link"
              aria-label="Email Crestline Painting"
            >
              Email Crestline →
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}