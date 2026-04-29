import Link from "next/link";

export default function HomeAboutPreview() {
  return (
    <section className="section">
      <div className="container">
        <div className="about-feature">
          <div className="split-panel split-panel--about-home">
            <div className="split-panel__content about-feature__content">
              <div className="section-intro__eyebrow">About Crestline</div>

              <h2 className="section-intro__title">
                Built on craftsmanship, integrity, and over two decades of proven results.
              </h2>

              <p className="section-intro__copy">
                Founded in 2003, Crestline Painting Ltd. has grown from a family-run operation into
                a trusted full-scale painting company delivering consistent, high-quality results
                across custom homes, multi-family developments, commercial properties, and strata
                projects throughout British Columbia.
              </p>

              <p className="section-intro__copy">
                With a strong focus on preparation, coordination, and finish quality, every project
                is approached with the same level of professionalism, regardless of size or scope.
              </p>

              <Link href="/about" className="about-feature__link">
                Learn More About Crestline
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="stats-card stats-card--feature">
              <div className="stats-card__eyebrow">Company Snapshot</div>

              <div className="stats-card__item">
                <strong>2003</strong>
                <span>Founded</span>
              </div>

              <div className="stats-card__item">
                <strong>20+</strong>
                <span>Years of experience</span>
              </div>

              <div className="stats-card__item">
                <strong>BC</strong>
                <span>Serving projects across British Columbia</span>
              </div>

              <div className="stats-card__footer">
                Professional standards, organized execution, and dependable results across every
                phase of the project.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}