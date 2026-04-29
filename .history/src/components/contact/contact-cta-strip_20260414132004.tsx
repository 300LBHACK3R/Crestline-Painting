import Link from "next/link";

export default function ContactCtaStrip() {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-panel">
          <div>
            <div className="section-intro__eyebrow">Next Step</div>
            <h2 className="section-intro__title">Send your project details and start the conversation.</h2>
          </div>

          <div className="cta-panel__actions">
            <Link href="mailto:info@crestlinepainting.ca" className="site-header__cta">
              Email Crestline
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}