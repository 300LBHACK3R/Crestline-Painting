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


export default function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = params;

  const service = services.find((item) => item.slug === slug);

  if (!service) notFound();

  return (
    <>
      <SiteHeader light />

      <main className="service-detail-page">

        <PageHero
          eyebrow={service.title}
          title={service.title}
          copy={service.intro}
        />

        {/* 🔥 HERO BLOCK */}
        <section className="section section--service-hero">
          <div className="container">

            <div className="service-detail-hero">

              <div className="service-detail-hero__content">
                <div className="section-intro__eyebrow">
                  Project Environments
                </div>

                <h2 className="section-intro__title">
                  Built for {service.title.toLowerCase()} projects that demand clean execution and consistent results.
                </h2>

                <p className="section-intro__copy">
                  {service.intro}
                </p>

                <div className="service-detail__actions">
                  <Link href="/contact" className="site-header__cta">
                    Request a Quote
                  </Link>

                  <Link href="/projects" className="text-link">
                    View Projects
                  </Link>
                </div>
              </div>

              <div className="service-detail-hero__media">
                <img
                  src={service.detailImage}
                  alt={service.title}
                  className="service-detail-hero__image"
                />
              </div>

            </div>

          </div>
        </section>

        {/* 🔥 MAIN CONTENT */}
        <section className="section">
          <div className="container">

            <div className="split-panel split-panel--service-detail">

              {/* LEFT */}
              <div className="split-panel__content service-detail__content">

                <div className="section-intro__eyebrow">Overview</div>

                <h2 className="section-intro__title">
                  Large-scale painting solutions built for {service.title.toLowerCase()} projects.
                </h2>

                <p className="section-intro__copy">
                  {service.intro}
                </p>

                <ul className="feature-list feature-list--service">
                  {service.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>

                <div className="service-gallery">
                  {service.galleryImages.map((image, index) => (
                    <div
                      key={`${service.slug}-${index}`}
                      className="service-gallery__item"
                    >
                      <img
                        src={image}
                        alt={`${service.title} project ${index + 1}`}
                        className="service-gallery__image"
                      />
                    </div>
                  ))}
                </div>

              </div>

              {/* 🔥 RIGHT (UPGRADED PANEL) */}
              <aside className="service-side-panel">

                <div className="service-side-panel__body">
                  <div className="service-side-panel__eyebrow">
                    Why Crestline
                  </div>

                  <div className="service-side-panel__item">
                    <strong>Organized</strong>
                    <span>Structured execution and coordination.</span>
                  </div>

                  <div className="service-side-panel__item">
                    <strong>Reliable</strong>
                    <span>Consistent standards and dependable delivery.</span>
                  </div>

                  <div className="service-side-panel__item">
                    <strong>Built for Scale</strong>
                    <span>From custom to large production environments.</span>
                  </div>

                  <div className="service-side-panel__item">
                    <strong>Prepared</strong>
                    <span>Preparation and finish quality at every stage.</span>
                  </div>
                </div>

              </aside>

            </div>

          </div>
        </section>

        {/* 🔥 CTA */}
        <section className="section">
          <div className="container">

            <div className="cta-panel cta-panel--service">

              <div className="cta-panel__content">
                <div className="section-intro__eyebrow">Project Planning</div>

                <h2 className="section-intro__title">
                  Need a painting team that brings professionalism, coordination, and clean results?
                </h2>

                <p className="section-intro__copy">
                  Crestline Painting works across British Columbia with a practical, organized approach.
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