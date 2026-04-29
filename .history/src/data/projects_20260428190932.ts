export type ProjectItem = {
  id: string; // PRIMARY KEY (use this in React)
  slug: string; // keep for future SEO pages (not used right now)
  title: string;
  category: string;
  location: string;
  description: string;
  image: string;
  featured?: boolean;
};

export const projects: ProjectItem[] = [
  {
    id: "commercial-office-vernon",
    slug: "commercial-office-building-vernon",
    title: "Commercial Office Building",
    category: "Commercial",
    location: "Vernon, BC",
    description:
      "Large-scale commercial painting project focused on clean finishes, durability, and consistent presentation across all surfaces.",
    image:
      "/images/projects/South-Surrey-Commercial-Paint-Exterior-Painting-Crestline-Painting-Construction.jpg",
    featured: true,
  },

  {
    id: "luxury-home-kelowna",
    slug: "luxury-custom-home-kelowna",
    title: "Luxury Custom Home — Kelowna",
    category: "Custom Homes",
    location: "Kelowna, BC",
    description:
      "High-end custom home painting with detailed preparation, fine finishes, and a strong focus on craftsmanship.",
    image:
      "/images/projects/W42Residence-Custom-Interior-Crestline-Painting-Construction-Exterior-Painting.jpg",
    featured: true,
  },

  {
    id: "luxury-home-vancouver",
    slug: "luxury-custom-home-vancouver",
    title: "Luxury Custom Home — Vancouver",
    category: "Custom Homes",
    location: "Vancouver, BC",
    description:
      "High-end residential repaint focused on restoring surfaces and enhancing long-term presentation.",
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
      "Multi-residential tower project delivering uniform finishes across units and common areas with efficient coordination.",
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
      "Strata repaint focused on restoring exterior surfaces and delivering long-lasting protection.",
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
      "Large-scale strata repaint designed to enhance curb appeal and maintain long-term durability.",
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
      "Exterior repaint of a commercial facility focused on durability and improved curb appeal.",
    image:
      "/images/projects/Crestline-Painting-Commercial-Warehouse-Concrete-repair-and-repaint-Delta.jpg",
  },

  {
    id: "luxury-home-nelson",
    slug: "luxury-custom-home-repaint-nelson",
    title: "Luxury Custom Home — Nelson",
    category: "Custom Homes",
    location: "Nelson, BC",
    description:
      "Exterior repaint restoring architectural detail and providing long-term protection.",
    image:
      "/images/projects/Nelson-Crestline-Painting-Exterior-Custom-Home-Paint-Job.png",
  },
];