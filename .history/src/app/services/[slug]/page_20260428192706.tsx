import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";
import PageHero from "@/components/shared/page-hero";
import ServiceCardGrid from "@/components/shared/service-card-grid";
import ServicesProofStrip from "@/components/services/services-proof-strip";
import HomeCta from "@/components/home/home-cta";

export default function ServicesPage() {
  return (
    <>
      <SiteHeader light />

      <main className="services-page">

        <PageHero
          eyebrow="Services"
          title="Professional painting services built for real project environments."
          copy="From large-scale multi-family and commercial work to strata maintenance, custom homes, and interior painting, Crestline Painting delivers organized execution and consistent finish quality across every project."
          backgroundImage="/images/services/services-hero.jpg"
          darkOverlay
        />

        <section className="section section--services-main">
          <div className="container">

            <ServicesProofStrip />

            <ServiceCardGrid />

          </div>
        </section>

        <section className="section section--services-cta">
          <div className="container">
            <HomeCta />
          </div>
        </section>

      </main>

      <SiteFooter />
    </>
  );
}