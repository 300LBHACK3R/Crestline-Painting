export type ServiceItem = {
  slug: string;
  title: string;
  short: string;
  intro: string;
  bullets: string[];
  image: string;
};

export const services: ServiceItem[] = [
  {
    slug: "multi-family",
    title: "Multi-Family",
    short:
      "Large-scale painting for apartments, townhomes, and condominium developments.",
    intro:
      "We specialize in large-scale multi-family projects, delivering consistent finishes across apartments, townhomes, and condominium developments. Our team is structured for high-volume production while maintaining strict quality control at every stage.",
    bullets: [
      "Interior and exterior painting",
      "Apartment, condo, and townhouse developments",
      "Parkades and common areas",
      "Spray finishes and production coatings",
      "Drywall repair and surface preparation",
    ],
    image:
      "/images/home/Apartment-Kelowna-Painting-Building-ConstructionPainting-Crestline-Painting.jpg",
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
    image:
      "/images/projects/W42Residence-Custom-Interior-Crestline-Painting-Construction-Exterior-Painting.jpg",
  },
  {
    slug: "commercial-painting",
    title: "Commercial Painting",
    short:
      "Professional painting solutions for offices, retail units, tenant improvements, and industrial spaces.",
    intro:
      "We provide professional painting solutions for commercial environments including offices, retail units, industrial buildings, and tenant improvements, with a focus on clean execution and reliable scheduling.",
    bullets: [
      "Offices, retail spaces, and tenant improvements",
      "Warehouses and industrial buildings",
      "Schools, universities, and education facilities",
      "Hospitals and medical buildings",
      "Interior and exterior repaints",
      "Protective and durable coatings",
    ],
    image:
      "/images/services/Oxford-Properties-Remodel-ConstructionPainting-Exterior-Painting-Crestline-Painting.jpg",
  },
  {
    slug: "strata-building-maintenance",
    title: "Strata & Building Maintenance",
    short:
      "Long-term painting and maintenance support for strata properties and occupied buildings.",
    intro:
      "We provide comprehensive painting and maintenance solutions for strata properties and existing buildings, helping extend the life, appearance, and long-term performance of the property.",
    bullets: [
      "Exterior repaints and building refreshes",
      "Routine maintenance programs",
      "Envelope repairs and surface restoration",
      "Wood, metal, and concrete coatings",
      "Pressure washing and surface preparation",
    ],
    image:
      "/images/projects/Vancouver-Painting-Crestline-Painting-Construction-Interior-Exterior-Strata.jpg",
  },
  {
    slug: "interior-painting",
    title: "Interior Painting",
    short:
      "Clean, detailed interior painting for residential and commercial environments.",
    intro:
      "Our interior painting services are built around proper preparation, clean execution, and a professional finish that elevates the space. From occupied homes to commercial interiors, we focus on detail, protection, and a polished result.",
    bullets: [
      "Walls, ceilings, and trim",
      "Residential and commercial interiors",
      "Surface preparation and patching",
      "Clean masking and jobsite protection",
      "Detailed finish work",
    ],
    image:
      "/images/services/Oxford-Properties-Remodel-ConstructionPainting-Exterior-Painting-Crestline-Painting.jpg",
  },
];