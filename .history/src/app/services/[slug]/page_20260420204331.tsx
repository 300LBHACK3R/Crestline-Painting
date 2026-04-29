import { notFound } from "next/navigation";
import Link from "next/link";
import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";
import PageHero from "@/components/shared/page-hero";
import { services } from "@/data/services";

type ServicePageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = services.find((item) => item.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <SiteHeader light />
      <main>
        <PageHero eyebrow={service.title} title={service.title} copy={service.intro} />

        <section className="section">
          <div className="container">
            <div className="service-detail-shell">
              <div className="split-panel split-panel--service-detail">
                <div className="split-panel__content service-detail__content">
                  <div className="section-intro__eyebrow">Overview</div>

                  <h2 className="section-intro__title">
                    Large-scale painting solutions built for {service.title.toLowerCase()} projects.
                  </h2>

                  <p className="section-intro__copy">{service.intro}</p>

                  <ul className="feature-list feature-list--service">
                    {service.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>

                  <div className="service-detail__actions">
                    <Link href="/contact" className="site-header__cta">
                      Request a Quote
                    </Link>

                    <Link href="/services" className="text-link">
                      Back to Services
                    </Link>
                  </div>
                </div>

                <div className="service-side-panel">
                  <div className="service-side-panel__media">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="service-side-panel__image"
                      loading="eager"
                      decoding="async"
                    />
                  </div>

                  <div className="service-side-panel__body">
                    <div className="service-side-panel__eyebrow">Why Crestline</div>

                    <div className="service-side-panel__item">
                      <strong>Organized</strong>
                      <span>Structured execution built around planning, coordination, and consistency.</span>
                    </div>

                    <div className="service-side-panel__item">
                      <strong>Reliable</strong>
                      <span>Professional standards focused on clean delivery, quality control, and dependable outcomes.</span>
                    </div>

                    <div className="service-side-panel__item">
                      <strong>Built for Scale</strong>
                      <span>From detailed custom work to larger production environments, Crestline delivers with control.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="cta-panel cta-panel--service">
              <div className="cta-panel__content">
                <div className="section-intro__eyebrow">Project Planning</div>
                <h2 className="section-intro__title">
                  Need a painting team that brings professionalism, coordination, and clean results?
                </h2>
                <p className="section-intro__copy">
                  Crestline Painting works across British Columbia on commercial, multi-family, strata,
                  custom home, and interior projects with a practical, organized approach built to
                  deliver strong finishes and dependable execution.
                </p>
              </div>

              <div className="cta-panel__actions">
                <Link href="/contact" className="site-header__cta">
                  Request a Quote
                </Link>
                <Link href="/projects" className="text-link">
                  View Projects
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