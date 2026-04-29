import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";

import PageHero from "@/components/shared/page-hero";
import ServiceCardGrid from "@/components/shared/service-card-grid";
import HomeCta from "@/components/home/home-cta";
import ServicesProofStrip from "@/components/services/services-proof-strip";

export default function ServicesPage() {
  return (
    <>
      <SiteHeader light />

      <main className="services-page">

        <PageHero
          eyebrow="Services"
          title="Professional painting services built for real project environments."
          copy="From large-scale multi-family and commercial work to strata maintenance, custom homes, and interior painting, Crestline Painting delivers organized execution and consistent finish quality across every job."
          backgroundImage="/images/services/services-hero.jpg"
          backgroundPosition="center center"
          darkOverlay
        />

        {/* 🔥 PROOF STRIP (own section = cleaner hierarchy) */}
        <section className="section section--services-proof">
          <div className="container">
            <ServicesProofStrip />
          </div>
        </section>

        {/* 🔥 SERVICES GRID */}
        <section className="section section--services-main">
          <div className="container">
            <ServiceCardGrid />
          </div>
        </section>

        {/* 🔥 CTA (no extra container nesting) */}
        <section className="section section--services-cta">
          <HomeCta />
        </section>

      </main>

      <SiteFooter />
    </>
  );
}