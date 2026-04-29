import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";
import PageHero from "@/components/shared/page-hero";
import { services } from "@/data/services";

export default function CommercialPaintingPage() {
  const service = services.find((item) => item.slug === "commercial-painting")!;

  return (
    <>
      <SiteHeader light />
      <main>
        <PageHero eyebrow="Service" title={service.title} copy={service.intro} />
        <section className="section">
          <div className="container">
            <div className="card">
              <div className="card__eyebrow">Included</div>
              <ul className="simple-list">
                {service.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}