import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="home-hero">
      <div
        className="home-hero__photo"
        style={{
          backgroundImage:
            "url('/images/home/Apartment-Kelowna-Painting-Building-ConstructionPainting-Crestline-Painting.jpg')",
        }}
      />
      <div className="home-hero__overlay" />

      <div className="container">
        <div className="home-hero__content">
          <div className="home-hero__eyebrow">
            Commercial • Multi-Family • Strata • Custom Homes • Interior Painting
          </div>

          <h1 className="home-hero__title">
            Professional painting built for clean finishes, dependable execution, and long-term presentation.
          </h1>

          <p className="home-hero__copy">
            Crestline Painting Ltd. delivers organized, high-standard painting services across British Columbia,
            supporting commercial, multi-family, strata, custom home, and interior projects with professionalism,
            coordination, and consistent quality.
          </p>

          <div className="home-hero__actions">
            <Link href="/contact" className="site-header__cta">
              Request a Quote
            </Link>

            <Link href="/projects" className="text-link text-link--light">
              View Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}