import SectionIntro from "@/components/shared/section-intro";
import ServiceCardGrid from "@/components/shared/service-card-grid";

export default function HomeServicesPreview() {
  return (
    <section className="section">
      <div className="container">
        <SectionIntro
          eyebrow="Services"
          title="A practical, premium service mix built for real project types."
          copy="Crestline Painting works across commercial, multi-family, strata, custom home, and interior painting categories with a focus on quality, coordination, and consistent finishes."
        />
        <ServiceCardGrid />
      </div>
    </section>
  );
}