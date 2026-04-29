export type ServiceItem = {
  slug: string;
  title: string;
  short: string;
  intro: string;
  bullets: string[];
};

export const services: ServiceItem[] = [
  {
    slug: "multi-family",
    title: "Multi-Family",
    short:
      "Large-scale painting for apartments, townhomes, and condominium developments.",
    intro:
      "We specialize in large-scale multi-family projects, delivering consistent finishes across apartments, townhomes, and condominium developments. Our team is structured to handle high-volume production while maintaining strict quality control at every stage.",
    bullets: [
      "Interior and exterior painting",
      "Apartment, condo, and townhouse developments",
      "Parkades and common areas",
      "Spray finishes and production coatings",
      "Drywall repair and surface preparation",
    ],
  },
  {
    slug: "custom-homes",
    title: "Custom Homes",
    short:
      "Precision-driven painting for high-end homes, fine finishes, and designer spaces.",
    intro:
      "High-end homes demand a higher level of craftsmanship. Our custom home painting services focus on precision, detail, and flawless execution from preparation through final finish.",
    bullets: [
      "Fine finish spraying and hand-applied coatings",
      "Detailed trim, millwork, and feature walls",
      "Specialty finishes and designer specifications",
      "Interior and exterior luxury coatings",
      "Surface perfection and meticulous prep work",
    ],
  },
  {
    slug: "commercial-painting",
    title: "Commercial Painting",
    short:
      "Professional painting solutions for offices, retail units, tenant improvements, and industrial spaces.",
    intro:
      "We provide professional painting solutions for a wide range of commercial spaces, including offices, retail units, industrial buildings, and tenant improvements, with clean execution and reliable scheduling.",
    bullets: [
      "Offices, retail spaces, and tenant improvements",
      "Warehouses and industrial buildings",
      "Schools, universities, and education facilities",
      "Hospitals and medical buildings",
      "Interior and exterior repaints",
      "Protective and durable coatings",
    ],
  },
  {
    slug: "strata-building-maintenance",
    title: "Strata & Building Maintenance",
    short:
      "Long-term painting and maintenance support for strata properties and occupied buildings.",
    intro:
      "We offer comprehensive painting and maintenance solutions for strata properties and existing buildings, helping extend the life, appearance, and performance of the property over time.",
    bullets: [
      "Exterior repaints and building refreshes",
      "Routine maintenance programs",
      "Envelope repairs and surface restoration",
      "Wood, metal, and concrete coatings",
      "Pressure washing and surface preparation",
    ],
  },
];