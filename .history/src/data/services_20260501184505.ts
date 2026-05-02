export type ServiceItem = {
  slug: string;
  title: string;
  short: string;
  intro: string;
  bullets: string[];
  image: string;
  homeHeroImage: string;
  detailImage: string;
  galleryImages: string[];
};

export const services = [
  {
    slug: "multi-family",
    title: "Multi-Family",
    short:
      "Large-scale painting solutions for apartments, townhomes, condominiums, and residential developments.",
    intro:
      "Crestline Painting supports multi-family developments with organized production, consistent finishes, and the coordination required for larger project environments.",
    bullets: [
      "Interior and exterior multi-family painting",
      "Apartment, condominium, and townhouse developments",
      "Common areas, corridors, parkades, and shared spaces",
      "Spray finishes and production coating workflows",
      "Drywall repair, surface preparation, and touch-up planning",
    ],
    image:
      "/images/services/Apartment-Kelowna-Painting-Building-ConstructionPainting-Crestline-Painting.jpg",
    homeHeroImage:
      "/images/services/The-Shore-Exterior-Painting-Construction-Crestlinepainting.jpg",
    detailImage:
      "/images/services/Apartment-Kelowna-Painting-Building-ConstructionPainting-Crestline-Painting.jpg",
    galleryImages: [
      "/images/services/Apartment-Kelowna-Painting-Building-ConstructionPainting-Crestline-Painting.jpg",
      "/images/services/Brick-Water-Village-Exterior-Interior-Custom-Paint-Job-Crestline-Painting.jpg",
    ],
  },

  {
    slug: "custom-homes",
    title: "Custom Homes",
    short:
      "Precision-focused painting for custom homes, detailed interiors, fine finishes, and designer-led spaces.",
    intro:
      "Custom homes require a higher level of care. Crestline Painting focuses on preparation, detail, and finish quality from the first surface through final walkthrough.",
    bullets: [
      "Fine finish spraying and hand-applied coatings",
      "Detailed trim, millwork, doors, and feature walls",
      "Specialty finishes and designer specifications",
      "Interior and exterior coatings for custom homes",
      "Meticulous preparation for refined final presentation",
    ],
    image:
      "/images/services/W42Residence-Custom-Interior-Crestline-Painting-Construction-Exterior-Painting.jpg",
    homeHeroImage:
      "/images/services/Andover-Mansion-Project-Construction-Painting-Interior-Exterior-CrestlinePainting3.jpg",
    detailImage:
      "/images/services/W42Residence-Custom-Interior-Crestline-Painting-Construction-Exterior-Painting.jpg",
    galleryImages: [
      "/images/services/W42Residence-Custom-Interior-Crestline-Painting-Construction-Exterior-Painting.jpg",
    ],
  },

  {
    slug: "strata",
    title: "Strata",
    short:
      "Painting and maintenance support for strata properties, occupied buildings, and long-term asset presentation.",
    intro:
      "Crestline Painting helps strata properties and existing buildings maintain strong presentation through repainting, surface restoration, and planned maintenance support.",
    bullets: [
      "Exterior repaints and full building refreshes",
      "Strata painting and maintenance programs",
      "Envelope touch-ups and surface restoration",
      "Wood, metal, concrete, and exterior coating systems",
      "Pressure washing, preparation, and repaint planning",
    ],
    image:
      "/images/services/Vancouver-Painting-Crestline-Painting-Construction-Interior-Exterior-Strata.jpg",
    homeHeroImage:
      "/images/services/Sandhurst-South-Surrey-townhouse-complex-Painting-Crestline-Painting.jpg",
    detailImage:
      "/images/services/Vancouver-Painting-Crestline-Painting-Construction-Interior-Exterior-Strata.jpg",
    galleryImages: [
      "/images/services/Vancouver-Painting-Crestline-Painting-Construction-Interior-Exterior-Strata.jpg",
    ],
  },

  {
    slug: "commercial",
    title: "Commercial",
    short:
      "Professional painting for offices, retail spaces, tenant improvements, institutions, and industrial environments.",
    intro:
      "Crestline Painting provides commercial painting with reliable scheduling, clean execution, and finish standards suited for professional environments.",
    bullets: [
      "Offices, retail spaces, and tenant improvements",
      "Warehouses, industrial buildings, and operational spaces",
      "Schools, education facilities, and institutional projects",
      "Hospitals, clinics, and medical environments",
      "Interior and exterior commercial repaints",
    ],
    image:
      "/images/services/South-Surrey-Commercial-Paint-Exterior-Painting-Crestline-Painting-Construction.jpg",
    homeHeroImage:
      "/images/services/South-Surrey-Commercial-Paint-Exterior-Painting-Crestline-Painting-Construction.jpg",
    detailImage:
      "/images/services/South-Surrey-Commercial-Paint-Exterior-Painting-Crestline-Painting-Construction.jpg",
    galleryImages: [
      "/images/services/South-Surrey-Commercial-Paint-Exterior-Painting-Crestline-Painting-Construction.jpg",
    ],
  },
] as const satisfies ServiceItem[];

export type ServiceSlug = (typeof services)[number]["slug"];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getServicePath(slug: string) {
  return `/services/${slug}`;
}