import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";
import PageHero from "@/components/shared/page-hero";
import { services } from "@/data/services";

export default function CustomHomesPage() {
  const service = services.find((item) => item.slug === "custom-homes")!;

  return (
    <>
      <SiteHeader light />
      <main>
        <PageHero
          eyebrow="Custom Homes"
          title={service.title}
          copy={service.intro}
        />

        <section className="section">
          <div className="container">
            <div className="split-panel">
              <div className="split-panel__content">
                <div className="section-intro__eyebrow">Overview</div>

                <h2 className="section-intro__title">
                  High-end residential painting built around detail, control, and finish quality.
                </h2>

                <p className="section-intro__copy">
                  Custom homes demand a higher level of craftsmanship, and that is exactly what
                  Crestline Painting delivers. From surface preparation through final coat, every
                  stage is handled with care, precision, and close attention to the overall design
                  vision of the home.
                </p>

                <p className="section-intro__copy">
                  Whether the project includes fine finish spraying, detailed trim work, millwork,
                  feature walls, or specialty coatings, Crestline works to ensure every surface is
                  prepared properly and every finish is executed to a premium standard.
                </p>

                <p className="section-intro__copy">
                  In custom homes, every detail matters. That is why each project is approached as
                  a direct reflection of the company’s workmanship, professionalism, and finish
                  quality.
                </p>
              </div>

              <div className="stats-card">
                <div className="stats-card__item">
                  <strong>Precision</strong>
                  <span>Detailed finish work for high-end residential spaces</span>
                </div>

                <div className="stats-card__item">
                  <strong>Refined</strong>
                  <span>Fine finish spraying, trim work, and specialty coatings</span>
                </div>

                <div className="stats-card__item">
                  <strong>Premium</strong>
                  <span>Luxury-level presentation with meticulous preparation</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="card">
              <div className="card__eyebrow">Included</div>

              <h3 className="card__title">
                Custom home painting services include
              </h3>

              <ul className="simple-list">
                {service.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}