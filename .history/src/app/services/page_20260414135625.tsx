import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";
import PageHero from "@/components/shared/page-hero";
import ServiceCardGrid from "@/components/shared/service-card-grid";

export default function ServicesPage() {
  return (
    <>
      <SiteHeader light />
      <main>
        <PageHero
          eyebrow="Services"
          title="Professional painting services for commercial, multifamily, strata, custom home, and interior work."
          copy="Crestline Painting provides a practical, high-standard service mix designed for real project environments across British Columbia, with a focus on quality, coordination, and consistent finishes."
        />

        <section className="section">
          <div className="container">
            <ServiceCardGrid />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}