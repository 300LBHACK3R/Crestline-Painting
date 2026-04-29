export type ProjectItem = {
  id: string;
  slug: string;
  title: string;
  category: string;
  location: string;
  description: string;
  image: string;
  featured?: boolean;
};

export const projects = [
  {
    id: "commercial-office-vernon",
    slug: "commercial-office-building-vernon",
    title: "Commercial Office Building",
    category: "Commercial",
    location: "Vernon, BC",
    description:
      "Commercial painting completed with a focus on clean finishes, surface durability, and consistent presentation across the property.",
    image:
      "/images/projects/South-Surrey-Commercial-Paint-Exterior-Painting-Crestline-Painting-Construction.jpg",
    featured: true,
  },

  {
    id: "luxury-home-kelowna",
    slug: "luxury-custom-home-kelowna",
    title: "Luxury Custom Home",
    category: "Custom Homes",
    location: "Kelowna, BC",
    description:
      "Custom home painting with detailed preparation, refined finish work, and a strong focus on craftsmanship.",
    image:
      "/images/projects/W42Residence-Custom-Interior-Crestline-Painting-Construction-Exterior-Painting.jpg",
    featured: true,
  },

  {
    id: "luxury-home-vancouver",
    slug: "luxury-custom-home-vancouver",
    title: "Luxury Custom Home",
    category: "Custom Homes",
    location: "Vancouver, BC",
    description:
      "High-end residential repaint focused on restoring surfaces, improving presentation, and supporting long-term finish quality.",
    image:
      "/images/projects/Vancouver-Painting-Crestline-Construction-Custom-Homes-Interior-Painting.png",
  },

  {
    id: "modern-tower-vancouver",
    slug: "modern-tower-development-vancouver",
    title: "Modern Tower Development",
    category: "Multi-Family",
    location: "Vancouver, BC",
    description:
      "Multi-residential tower painting delivered with organized coordination, consistent finishes, and efficient production workflows.",
    image:
      "/images/projects/Oxford-Properties-Remodel-ConstructionPainting-Exterior-Painting-Crestline-Painting.jpg",
    featured: true,
  },

  {
    id: "langley-strata",
    slug: "langley-strata-repaint",
    title: "Langley Strata Repaint",
    category: "Strata",
    location: "Langley, BC",
    description:
      "Strata repaint focused on restoring exterior surfaces, improving curb appeal, and supporting long-term building protection.",
    image:
      "/images/projects/Vancouver-Painting-Crestline-Painting-Construction-Interior-Exterior-Strata.jpg",
  },

  {
    id: "strata-restoration-vancouver",
    slug: "strata-exterior-restoration-vancouver",
    title: "Strata Exterior Restoration",
    category: "Multi-Family",
    location: "Vancouver, BC",
    description:
      "Large-scale strata exterior repaint designed to refresh the property, strengthen presentation, and maintain durability.",
    image:
      "/images/projects/edge-on-edge-3-maple-ridge-1_Crestline-Painting-Exterior-Painting.jpg",
  },

  {
    id: "commercial-kamloops",
    slug: "commercial-exterior-repaint-kamloops",
    title: "Commercial Exterior Repaint",
    category: "Commercial",
    location: "Kamloops, BC",
    description:
      "Commercial exterior repaint completed to improve curb appeal, refresh building presentation, and support durable performance.",
    image:
      "/images/projects/Crestline-Painting-Commercial-Warehouse-Concrete-repair-and-repaint-Delta.jpg",
  },

  {
    id: "luxury-home-nelson",
    slug: "luxury-custom-home-repaint-nelson",
    title: "Luxury Custom Home",
    category: "Custom Homes",
    location: "Nelson, BC",
    description:
      "Exterior custom home repaint focused on restoring architectural detail, protecting surfaces, and improving long-term presentation.",
    image:
      "/images/projects/Nelson-Crestline-Painting-Exterior-Custom-Home-Paint-Job.png",
  },
] as const satisfies ProjectItem[];