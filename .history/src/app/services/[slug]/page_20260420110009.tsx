import { notFound } from "next/navigation";
import Link from "next/link";
import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";
import PageHero from "@/components/shared/page-hero";
import { services } from "@/data/services";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <SiteHeader light />
      <main>
        <PageHero eyebrow="Service" title={service.title} copy={service.intro} />

        <section className="section">
          <div className="container">
            <div className="split-panel">
              <div className="split-panel__content">
                <div className="section-intro__eyebrow">Service Overview</div>

                <h2 className="section-intro__title">
                  Professional execution built around preparation, coordination, and finish quality.
                </h2>

                <p className="section-intro__copy">{service.intro}</p>

                <ul className="feature-list">
                  {service.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>

                <div className="section__actions">
                  <Link href="/contact" className="site-header__cta">
                    Request a Quote
                  </Link>
                </div>
              </div>

              <div
                className="media-panel"
                style={{
                  backgroundImage: `url('${service.image}')`,
                }}
              />
            </div>
          </div>
        </section>

        <section className="section section--soft">
          <div className="container">
            <div className="cta-panel">
              <div className="cta-panel__content">
                <div className="section-intro__eyebrow">Need Pricing or Scope Review?</div>
                <h2 className="section-intro__title">
                  Let’s review your project and map out the right next step.
                </h2>
                <p className="section-intro__copy">
                  Crestline Painting supports projects across British Columbia with a practical,
                  organized, and quality-driven approach built for reliable outcomes.
                </p>
              </div>

              <div className="cta-panel__actions">
                <Link href="/contact" className="site-header__cta">
                  Contact Crestline
                </Link>
                <Link href="/services" className="text-link">
                  Back to Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}