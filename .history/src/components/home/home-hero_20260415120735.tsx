import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="home-hero">
      <div
        className="home-hero__photo"
        style={{ backgroundImage: "url('/images/home/hero.jpg')" }}
      />
      <div className="home-hero__overlay" />

      <div className="container">
        <div className="home-hero__content">
          <div className="home-hero__eyebrow">
            Commercial • Multifamily • Strata • Custom Homes
          </div>

          <h1 className="home-hero__title">
            Professional painting services built for cleaner presentation, stronger trust, and
            reliable execution.
          </h1>

          <p className="home-hero__copy">
            Crestline Painting Ltd. serves British Columbia with a focus on commercial,
            multi-family, strata, and high-end residential work backed by craftsmanship,
            organization, and long-term reliability.
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