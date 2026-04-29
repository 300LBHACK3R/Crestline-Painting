import Link from "next/link";

export default function HomeCta() {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-panel">
          <div>
            <div className="section-intro__eyebrow">Start the Conversation</div>

            <h2 className="section-intro__title">
              Ready to move forward with your next project?
            </h2>

            <p className="section-intro__copy">
              Share your project type, scope, location, and timeline. Crestline Painting will
              review the details and provide a clear, practical response to help you take the next
              step with confidence.
            </p>
          </div>

          <div className="cta-panel__actions">
            <Link href="/contact" className="site-header__cta">
              Contact Crestline
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}