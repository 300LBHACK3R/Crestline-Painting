import Link from "next/link";

export default function ContactCtaStrip() {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-panel">
          <div>
            <div className="section-intro__eyebrow">Next Step</div>

            <h2 className="section-intro__title">
              Start your project with a clear, professional first conversation.
            </h2>

            <p className="section-intro__copy">
              Send over your project details, location, and timeline. Crestline Painting will review the information and provide a clear, practical response to move things forward.
            </p>
          </div>

          <div className="cta-panel__actions">
            <Link
              href="mailto:info@crestlinepainting.ca"
              className="site-header__cta"
            >
              Email Crestline
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}