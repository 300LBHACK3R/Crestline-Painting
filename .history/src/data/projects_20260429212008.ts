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
  slug: string;
  title: string;
  category: ProjectCategorySlug;
  location?: string;
  year?: string;
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
    image: "/images/projects/custom-homes/w42-residence-01.jpg",
  },
  {
    slug: "multi-family",
    title: "Multi-Family",
    short:
      "Large-scale painting projects for apartments, townhomes, condominiums, and residential developments.",
    description:
      "Explore Crestline Painting multi-family projects, including apartment buildings, townhouse developments, shared spaces, corridors, exteriors, and large residential painting scopes.",
    image: "/images/projects/multi-family/kelowna-apartment-01.jpg",
  },
  {
    slug: "strata",
    title: "Strata",
    short:
      "Portfolio work for strata properties, occupied buildings, shared spaces, and long-term property presentation.",
    description:
      "Explore Crestline Painting strata projects, including shared properties, exterior repainting, common areas, building maintenance, and property-focused painting work.",
    image: "/images/projects/strata/vancouver-strata-01.jpg",
  },
  {
    slug: "commercial",
    title: "Commercial",
    short:
      "Commercial painting work for offices, retail, tenant improvements, institutions, and active business environments.",
    description:
      "Explore Crestline Painting commercial projects, including offices, retail spaces, tenant improvements, industrial environments, and professional business-facing spaces.",
    image: "/images/projects/commercial/south-surrey-commercial-01.jpg",
  },
];

export const projects: ProjectItem[] = [
  {
    slug: "w42-residence",
    title: "W42 Residence",
    category: "custom-homes",
    location: "British Columbia",
    year: "Custom Home",
    description:
      "A detailed custom home painting project focused on refined interior finishes, clean presentation, and high-end residential workmanship.",
    coverImage: "/images/projects/custom-homes/w42-residence-01.jpg",
    images: [
      {
        src: "/images/projects/custom-homes/w42-residence-01.jpg",
        alt: "W42 Residence custom home painting by Crestline Painting",
      },
      {
        src: "/images/projects/custom-homes/w42-residence-02.jpg",
        alt: "Interior custom home painting detail at W42 Residence",
      },
    ],
  },
  {
    slug: "kelowna-apartment-project",
    title: "Kelowna Apartment Project",
    category: "multi-family",
    location: "Kelowna, BC",
    year: "Multi-Family",
    description:
      "A multi-family painting project involving coordinated production work, consistent finishes, and organized execution across a larger residential property.",
    coverImage: "/images/projects/multi-family/kelowna-apartment-01.jpg",
    images: [
      {
        src: "/images/projects/multi-family/kelowna-apartment-01.jpg",
        alt: "Kelowna apartment multi-family painting project by Crestline Painting",
      },
      {
        src: "/images/projects/multi-family/kelowna-apartment-02.jpg",
        alt: "Multi-family building painting work in Kelowna",
      },
    ],
  },
  {
    slug: "brick-water-village",
    title: "Brick Water Village",
    category: "multi-family",
    location: "British Columbia",
    year: "Multi-Family",
    description:
      "A large residential painting project focused on exterior and shared-space presentation for a multi-family environment.",
    coverImage: "/images/projects/multi-family/brick-water-village-01.jpg",
    images: [
      {
        src: "/images/projects/multi-family/brick-water-village-01.jpg",
        alt: "Brick Water Village exterior painting project by Crestline Painting",
      },
    ],
  },
  {
    slug: "vancouver-strata-project",
    title: "Vancouver Strata Project",
    category: "strata",
    location: "Vancouver, BC",
    year: "Strata",
    description:
      "A strata-focused painting project supporting long-term property presentation, exterior coating work, and organized building maintenance.",
    coverImage: "/images/projects/strata/vancouver-strata-01.jpg",
    images: [
      {
        src: "/images/projects/strata/vancouver-strata-01.jpg",
        alt: "Vancouver strata painting project by Crestline Painting",
      },
    ],
  },
  {
    slug: "south-surrey-commercial",
    title: "South Surrey Commercial Project",
    category: "commercial",
    location: "South Surrey, BC",
    year: "Commercial",
    description:
      "A commercial painting project focused on durable finishes, professional presentation, and clean execution for a business-facing environment.",
    coverImage: "/images/projects/commercial/south-surrey-commercial-01.jpg",
    images: [
      {
        src: "/images/projects/commercial/south-surrey-commercial-01.jpg",
        alt: "South Surrey commercial painting project by Crestline Painting",
      },
    ],
  },
];

export function getProjectCategory(slug: string) {
  return projectCategories.find((category) => category.slug === slug);
}

export function getProjectsByCategory(slug: string) {
  return projects.filter((project) => project.category === slug);
}

export function getProjectCategoryPath(slug: string) {
  return `/projects/${slug}`;
}