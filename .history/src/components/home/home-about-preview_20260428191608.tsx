import Link from "next/link";

export default function HomeAboutPreview() {
  const stats = [
    {
      title: "Organized",
      copy:
        "Structured workflow, practical coordination, and professional delivery.",
    },
    {
      title: "Dependable",
      copy:
        "Built around consistent standards, finish quality, and reliable execution.",
    },
    {
      title: "Versatile",
      copy:
        "Supporting commercial, multi-family, strata, custom home, and interior projects.",
    },
  ];

  return (
    <section className="section home-about">
      <div className="container">
        <div className="about-feature">
          <div className="split-panel split-panel--about-home">

            {/* LEFT */}
            <div className="about-feature__content">
              <span className="section-intro__eyebrow">
                About Crestline
              </span>

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

              <Link
                href="/about"
                className="about-feature__link"
                aria-label="Learn more about Crestline Painting"
              >
                Learn More About Crestline →
              </Link>
            </div>

            {/* RIGHT */}
            <div className="stats-card stats-card--feature">
              <span className="stats-card__eyebrow">
                Why Clients Choose Crestline
              </span>

              {stats.map((item) => (
                <div key={item.title} className="stats-card__item">
                  <strong>{item.title}</strong>
                  <span>{item.copy}</span>
                </div>
              ))}

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