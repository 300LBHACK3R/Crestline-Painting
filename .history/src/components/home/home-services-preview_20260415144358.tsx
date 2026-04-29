import SectionIntro from "@/components/shared/section-intro";
import ServiceCardGrid from "@/components/shared/service-card-grid";

export default function HomeServicesPreview() {
  return (
    <section className="section">
      <div className="container">
        <SectionIntro
          eyebrow="Services"
          title="Professional painting services built for real project environments."
          copy="Crestline Painting delivers commercial, multi-family, strata, custom home, and interior painting services with a focus on preparation, coordination, and consistent, high-quality finishes."
        />

        <ServiceCardGrid />
      </div>
    </section>
  );
}