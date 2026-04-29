import Link from "next/link";

export default function ContactCtaStrip() {
  return (
    <section className="section contact-cta">
      <div className="container">

        <div className="cta-panel contact-cta__panel">

          <div className="contact-cta__content">
            <div className="section-intro__eyebrow">Next Step</div>

            <h2 className="section-intro__title">
              Start your project with a clear, professional first conversation.
            </h2>

            <p className="section-intro__copy">
              Send over your project details, location, and timeline. Crestline Painting will review the information and provide a clear, practical response to move things forward.
            </p>
          </div>

          {/* 🔥 STRONGER ACTION AREA */}
          <div className="cta-panel__actions contact-cta__actions">

            <Link
              href="/contact"
              className="site-header__cta contact-cta__primary"
            >
              Request a Quote
            </Link>

            <Link
              href="mailto:info@crestlinepainting.ca"
              className="text-link"
            >
              Email Crestline →
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}