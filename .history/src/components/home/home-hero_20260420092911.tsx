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
            Commercial • Multi-Family • Strata • Custom Homes
          </div>

          <h1 className="home-hero__title">
            Painting built for clean finishes, strong presentation, and reliable execution.
          </h1>

          <p className="home-hero__copy">
            Crestline Painting Ltd. delivers professional painting services across British Columbia,
            supporting commercial, multi-family, strata, and high-end residential projects with a
            focus on quality, coordination, and long-term performance.
          </p>

          <div className="home-hero__actions">
            <Link href="/contact" className="site-header__cta">
              Request a Quote
            </Link>

            <Link href="/services" className="text-link text-link--light">
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}