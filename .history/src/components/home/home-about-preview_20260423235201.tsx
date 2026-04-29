import Link from "next/link";

export default function HomeAboutPreview() {
  return (
    <section className="section">
      <div className="container">
        <div className="about-feature">
          <div className="split-panel split-panel--about-home">
            <div className="about-feature__content">
              <div className="section-intro__eyebrow">About Crestline</div>

              <h2 className="section-intro__title">
                Built on craftsmanship, professionalism, and consistent results.
              </h2>

              <p className="section-intro__copy">
                Crestline Painting Ltd. supports projects across British Columbia with a practical,
                organized approach built around preparation, clean execution, and dependable finish quality.
              </p>

              <p className="section-intro__copy">
                From commercial and multi-family work to strata, custom homes, and interior painting,
                each project is approached with the same commitment to coordination, workmanship, and presentation.
              </p>

              <Link href="/about" className="about-feature__link">
                Learn More About Crestline
              </Link>
            </div>

            <div className="stats-card stats-card--feature">
              <div className="stats-card__eyebrow">Why Clients Choose Crestline</div>

              <div className="stats-card__item">
                <strong>Organized</strong>
                <span>Structured workflow, practical coordination, and professional delivery.</span>
              </div>

              <div className="stats-card__item">
                <strong>Dependable</strong>
                <span>Built around consistent standards, finish quality, and reliable execution.</span>
              </div>

              <div className="stats-card__item">
                <strong>Versatile</strong>
                <span>Supporting commercial, multi-family, strata, custom home, and interior projects.</span>
              </div>

              <div className="stats-card__footer">
                Crestline Painting is positioned to deliver professional painting services with the level of
                care and presentation clients expect from an established contractor.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}