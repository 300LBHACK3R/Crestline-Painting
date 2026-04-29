import Link from "next/link";

export default function HomeCta() {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-panel">
          <div>
            <div className="section-intro__eyebrow">Start the Conversation</div>
            <h2 className="section-intro__title">Ready to discuss your next project?</h2>
            <p className="section-intro__copy">
              Reach out with your project type, service needs, location, and timing to get the
              conversation started clearly.
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