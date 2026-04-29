import { notFound } from "next/navigation";
import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";
import PageHero from "@/components/shared/page-hero";
import { services } from "@/data/services";

export async function generateStaticParams() {
  return [
    { slug: "multi-family" },
    { slug: "custom-homes" },
    { slug: "commercial-painting" },
    { slug: "strata-building-maintenance" },
    { slug: "interior-painting" },
  ];
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    console.log("❌ NOT FOUND:", params.slug);
    return notFound();
  }

  return (
    <>
      <SiteHeader light />

      <main>
        <PageHero
          eyebrow={service.title}
          title={service.title}
          copy={service.intro}
          backgroundImage={service.detailImage}
        />

        <section className="section">
          <div className="container">
            <p className="section-intro__copy">{service.intro}</p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}