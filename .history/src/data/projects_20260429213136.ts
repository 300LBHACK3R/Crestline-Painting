export type ProjectCategorySlug =
  | "custom-homes"
  | "multi-family"
  | "strata"
  | "commercial";

export type ProjectImage = {
  src: string;
  alt: string;
};

export type ProjectItem = {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategorySlug;
  categoryTitle: string;
  location: string;
  type: string;
  description: string;
  coverImage: string;
  images: ProjectImage[];
};

export type ProjectCategory = {
  slug: ProjectCategorySlug;
  title: string;
  short: string;
  description: string;
  image: string;
};

export const projectCategories: ProjectCategory[] = [
  {
    slug: "custom-homes",
    title: "Custom Homes",
    short:
      "Detailed painting work for custom homes, high-end interiors, exterior finishes, and designer-led residential spaces.",
    description:
      "Explore Crestline Painting custom home projects, including detailed interiors, refined exterior finishes, trim, feature areas, and premium residential painting work.",
    image:
      "/images/services/W42Residence-Custom-Interior-Crestline-Painting-Construction-Exterior-Painting.jpg",
  },
  {
    slug: "multi-family",
    title: "Multi-Family",
    short:
      "Large-scale painting projects for apartments, townhomes, condominiums, and residential developments.",
    description:
      "Explore Crestline Painting multi-family projects, including apartment buildings, townhouse developments, shared spaces, corridors, exteriors, and large residential painting scopes.",
    image:
      "/images/services/Apartment-Kelowna-Painting-Building-ConstructionPainting-Crestline-Painting.jpg",
  },
  {
    slug: "strata",
    title: "Strata",
    short:
      "Portfolio work for strata properties, occupied buildings, shared spaces, and long-term property presentation.",
    description:
      "Explore Crestline Painting strata projects, including shared properties, exterior repainting, common areas, building maintenance, and property-focused painting work.",
    image:
      "/images/services/Vancouver-Painting-Crestline-Painting-Construction-Interior-Exterior-Strata.jpg",
  },
  {
    slug: "commercial",
    title: "Commercial",
    short:
      "Commercial painting work for offices, retail, tenant improvements, institutions, and active business environments.",
    description:
      "Explore Crestline Painting commercial projects, including offices, retail spaces, tenant improvements, industrial environments, and professional business-facing spaces.",
    image:
      "/images/services/South-Surrey-Commercial-Paint-Exterior-Painting-Crestline-Painting-Construction.jpg",
  },
];

export const projects: ProjectItem[] = [
  {
    id: "w42-residence",
    slug: "w42-residence",
    title: "W42 Residence",
    category: "custom-homes",
    categoryTitle: "Custom Homes",
    location: "British Columbia",
    type: "Custom Home",
    description:
      "A detailed custom home painting project focused on refined interior finishes, clean presentation, and high-end residential workmanship.",
    coverImage:
      "/images/services/W42Residence-Custom-Interior-Crestline-Painting-Construction-Exterior-Painting.jpg",
    images: [
      {
        src: "/images/services/W42Residence-Custom-Interior-Crestline-Painting-Construction-Exterior-Painting.jpg",
        alt: "W42 Residence custom home painting by Crestline Painting",
      },
    ],
  },
  {
    id: "kelowna-apartment-project",
    slug: "kelowna-apartment-project",
    title: "Kelowna Apartment Project",
    category: "multi-family",
    categoryTitle: "Multi-Family",
    location: "Kelowna, BC",
    type: "Multi-Family",
    description:
      "A multi-family painting project involving coordinated production work, consistent finishes, and organized execution across a larger residential property.",
    coverImage:
      "/images/services/Apartment-Kelowna-Painting-Building-ConstructionPainting-Crestline-Painting.jpg",
    images: [
      {
        src: "/images/services/Apartment-Kelowna-Painting-Building-ConstructionPainting-Crestline-Painting.jpg",
        alt: "Kelowna apartment multi-family painting project by Crestline Painting",
      },
    ],
  },
  {
    id: "brick-water-village",
    slug: "brick-water-village",
    title: "Brick Water Village",
    category: "multi-family",
    categoryTitle: "Multi-Family",
    location: "British Columbia",
    type: "Multi-Family",
    description:
      "A large residential painting project focused on exterior and shared-space presentation for a multi-family environment.",
    coverImage:
      "/images/services/Brick-Water-Village-Exterior-Interior-Custom-Paint-Job-Crestline-Painting.jpg",
    images: [
      {
        src: "/images/services/Brick-Water-Village-Exterior-Interior-Custom-Paint-Job-Crestline-Painting.jpg",
        alt: "Brick Water Village painting project by Crestline Painting",
      },
    ],
  },
  {
    id: "vancouver-strata-project",
    slug: "vancouver-strata-project",
    title: "Vancouver Strata Project",
    category: "strata",
    categoryTitle: "Strata",
    location: "Vancouver, BC",
    type: "Strata",
    description:
      "A strata-focused painting project supporting long-term property presentation, exterior coating work, and organized building maintenance.",
    coverImage:
      "/images/services/Vancouver-Painting-Crestline-Painting-Construction-Interior-Exterior-Strata.jpg",
    images: [
      {
        src: "/images/services/Vancouver-Painting-Crestline-Painting-Construction-Interior-Exterior-Strata.jpg",
        alt: "Vancouver strata painting project by Crestline Painting",
      },
    ],
  },
  {
    id: "south-surrey-commercial",
    slug: "south-surrey-commercial",
    title: "South Surrey Commercial Project",
    category: "commercial",
    categoryTitle: "Commercial",
    location: "South Surrey, BC",
    type: "Commercial",
    description:
      "A commercial painting project focused on durable finishes, professional presentation, and clean execution for a business-facing environment.",
    coverImage:
      "/images/services/South-Surrey-Commercial-Paint-Exterior-Painting-Crestline-Painting-Construction.jpg",
    images: [
      {
        src: "/images/services/South-Surrey-Commercial-Paint-Exterior-Painting-Crestline-Painting-Construction.jpg",
        alt: "South Surrey commercial painting project by Crestline Painting",
      },
    ],
  },
];

export function getProjectCategory(slug: string) {
  return projectCategories.find((category) => category.slug === slug);
}

export function getProjectCategoryPath(slug: ProjectCategorySlug | string) {
  return `/projects/${slug}`;
}

export function getProjectsByCategory(slug: string) {
  return projects.filter((project) => project.category === slug);
}

export function getPreviewProjects(limit = 4) {
  return projects.slice(0, limit);
}