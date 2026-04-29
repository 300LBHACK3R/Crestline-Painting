import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";
import PageHero from "@/components/shared/page-hero";
import SectionIntro from "@/components/shared/section-intro";
import ServiceCardGrid from "@/components/shared/service-card-grid";
import HomeCta from "@/components/home/home-cta";

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />

      <main>
        <PageHero
          eyebrow="Services"
          title="Professional painting services built for real project environments."
          copy="From large-scale multi-family and commercial work to strata maintenance, custom homes, and interior painting, Crestline Painting delivers organized execution and consistent finish quality across every job."
        />

        <section className="section">
          <div className="container">
            <SectionIntro
              eyebrow="Service Areas"
              title="Structured painting services across British Columbia."
              copy="Explore Crestline Painting’s core service areas below. Each offering is built around clean execution, dependable coordination, and professional finish quality."
            />

            <ServiceCardGrid />
          </div>
        </section>

        <HomeCta />
      </main>

      <SiteFooter />
    </>
  );
}