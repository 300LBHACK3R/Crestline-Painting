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
      "/images/projects/custom-homes/Altamont-Custom-Homes-Interior-Painting-Crestline-Construction.jpg",
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
    id: "altamont-custom-homes",
    slug: "altamont-custom-homes",
    title: "Altamont Custom Homes",
    category: "custom-homes",
    categoryTitle: "Custom Homes",
    location: "British Columbia",
    type: "Custom Home",
    description:
      "A custom home painting project focused on detailed interior preparation, refined finish quality, and clean residential presentation.",
    coverImage:
      "/images/projects/custom-homes/Altamont-Custom-Homes-Interior-Painting-Crestline-Construction.jpg",
    images: [
      {
        src: "/images/projects/custom-homes/Altamont-Custom-Homes-Interior-Painting-Crestline-Construction.jpg",
        alt: "Altamont custom home painting project by Crestline Painting",
      },
      {
        src: "/images/projects/custom-homes/Altamont-Custom-Homes-Interior-Painting-Crestline-Construction0.jpg",
        alt: "Altamont custom home interior painting by Crestline Painting",
      },
      {
        src: "/images/projects/custom-homes/Altamont-Custom-Homes-Interior-Painting-Crestline-Construction1.jpg",
        alt: "Altamont custom home painting detail by Crestline Painting",
      },
      {
        src: "/images/projects/custom-homes/Altamont-Custom-Homes-Interior-Painting-Crestline-Construction2.jpg",
        alt: "Altamont custom home finished painting work by Crestline Painting",
      },
    ],
  },
  {
    id: "andover-mansion-project",
    slug: "andover-mansion-project",
    title: "Andover Mansion Project",
    category: "custom-homes",
    categoryTitle: "Custom Homes",
    location: "British Columbia",
    type: "Custom Home",
    description:
      "A large custom residence project involving interior and exterior painting work with a focus on professional preparation, finish quality, and high-end presentation.",
    coverImage:
      "/images/projects/custom-homes/Andover-Mansion-Project-Construction-Painting-Interior-Exterior-CrestlinePainting.jpg",
    images: [
      {
        src: "/images/projects/custom-homes/Andover-Mansion-Project-Construction-Painting-Interior-Exterior-CrestlinePainting.jpg",
        alt: "Andover Mansion custom home painting project by Crestline Painting",
      },
      {
        src: "/images/projects/custom-homes/Andover-Mansion-Project-Construction-Painting-Interior-Exterior-CrestlinePainting0.jpg",
        alt: "Andover Mansion interior and exterior painting by Crestline Painting",
      },
      {
        src: "/images/projects/custom-homes/Andover-Mansion-Project-Construction-Painting-Interior-Exterior-CrestlinePainting1.jpg",
        alt: "Andover Mansion custom home painting detail by Crestline Painting",
      },
      {
        src: "/images/projects/custom-homes/Andover-Mansion-Project-Construction-Painting-Interior-Exterior-CrestlinePainting2.jpg",
        alt: "Andover Mansion residential painting work by Crestline Painting",
      },
      {
        src: "/images/projects/custom-homes/Andover-Mansion-Project-Construction-Painting-Interior-Exterior-CrestlinePainting3.jpg",
        alt: "Andover Mansion finished painting work by Crestline Painting",
      },
      {
        src: "/images/projects/custom-homes/Andover-Mansion-Project-Construction-Painting-Interior-Exterior-CrestlinePainting4.jpg",
        alt: "Andover Mansion premium residential painting by Crestline Painting",
      },
      {
        src: "/images/projects/custom-homes/Andover-Mansion-Project-Construction-Painting-Interior-Exterior-CrestlinePainting5.jpg",
        alt: "Andover Mansion custom residence painting by Crestline Painting",
      },
      {
        src: "/images/projects/custom-homes/Andover-Mansion-Project-Construction-Painting-Interior-Exterior-CrestlinePainting6.jpg",
        alt: "Andover Mansion exterior and interior painting by Crestline Painting",
      },
    ],
  },
  {
    id: "farmleigh-farm",
    slug: "farmleigh-farm",
    title: "Farmleigh Farm",
    category: "custom-homes",
    categoryTitle: "Custom Homes",
    location: "British Columbia",
    type: "Custom Home",
    description:
      "A custom property painting project completed with attention to interior and exterior surfaces, project coordination, and clean professional results.",
    coverImage:
      "/images/projects/custom-homes/Farmleigh-Farm-British-Properties-Interior-Exterior-Painting-Crestline-Painting.jpg",
    images: [
      {
        src: "/images/projects/custom-homes/Farmleigh-Farm-British-Properties-Interior-Exterior-Painting-Crestline-Painting.jpg",
        alt: "Farmleigh Farm custom home painting project by Crestline Painting",
      },
      {
        src: "/images/projects/custom-homes/Farmleigh-Farm-British-Properties-Interior-Exterior-Painting-Crestline-Painting0.jpg",
        alt: "Farmleigh Farm interior and exterior painting by Crestline Painting",
      },
      {
        src: "/images/projects/custom-homes/Farmleigh-Farm-British-Properties-Interior-Exterior-Painting-Crestline-Painting1.jpg",
        alt: "Farmleigh Farm painting detail by Crestline Painting",
      },
      {
        src: "/images/projects/custom-homes/Farmleigh-Farm-British-Properties-Interior-Exterior-Painting-Crestline-Painting2.jpg",
        alt: "Farmleigh Farm residential painting work by Crestline Painting",
      },
      {
        src: "/images/projects/custom-homes/Farmleigh-Farm-British-Properties-Interior-Exterior-Painting-Crestline-Painting3.jpg",
        alt: "Farmleigh Farm finished painting project by Crestline Painting",
      },
    ],
  },
  {
    id: "millstream-project",
    slug: "millstream-project",
    title: "Millstream Project",
    category: "custom-homes",
    categoryTitle: "Custom Homes",
    location: "British Columbia",
    type: "Custom Home",
    description:
      "A custom residential painting project focused on interior and exterior finishes, careful surface preparation, and a clean completed presentation.",
    coverImage:
      "/images/projects/custom-homes/Millstream-Project-Interior-Exterior-Painting-Construction-Crestline-Painting.WEBP",
    images: [
      {
        src: "/images/projects/custom-homes/Millstream-Project-Interior-Exterior-Painting-Construction-Crestline-Painting.WEBP",
        alt: "Millstream custom home painting project by Crestline Painting",
      },
      {
        src: "/images/projects/custom-homes/Millstream-Project-Interior-Exterior-Painting-Construction-Crestline-Painting0.WEBP",
        alt: "Millstream interior and exterior painting by Crestline Painting",
      },
      {
        src: "/images/projects/custom-homes/Millstream-Project-Interior-Exterior-Painting-Construction-Crestline-Painting1.WEBP",
        alt: "Millstream residential painting detail by Crestline Painting",
      },
    ],
  },
  {
    id: "nelson-residence",
    slug: "nelson-residence",
    title: "Nelson Residence",
    category: "custom-homes",
    categoryTitle: "Custom Homes",
    location: "British Columbia",
    type: "Custom Home",
    description:
      "A residential custom home painting project focused on interior and exterior finishes, clean execution, and professional presentation.",
    coverImage:
      "/images/projects/custom-homes/Nelson-Residence-Construction-Crestline-Painting-Interior-Exterior-Painting.jpeg",
    images: [
      {
        src: "/images/projects/custom-homes/Nelson-Residence-Construction-Crestline-Painting-Interior-Exterior-Painting.jpeg",
        alt: "Nelson Residence custom home painting project by Crestline Painting",
      },
      {
        src: "/images/projects/custom-homes/Nelson-Residence-Construction-Crestline-Painting-Interior-Exterior-Painting0.jpeg",
        alt: "Nelson Residence interior and exterior painting by Crestline Painting",
      },
      {
        src: "/images/projects/custom-homes/Nelson-Residence-Construction-Crestline-Painting-Interior-Exterior-Painting1.jpeg",
        alt: "Nelson Residence painting detail by Crestline Painting",
      },
      {
        src: "/images/projects/custom-homes/Nelson-Residence-Construction-Crestline-Painting-Interior-Exterior-Painting2.jpeg",
        alt: "Nelson Residence residential painting work by Crestline Painting",
      },
      {
        src: "/images/projects/custom-homes/Nelson-Residence-Construction-Crestline-Painting-Interior-Exterior-Painting3.jpeg",
        alt: "Nelson Residence finished painting work by Crestline Painting",
      },
    ],
  },
  {
    id: "southborough-estate",
    slug: "southborough-estate",
    title: "SouthBorough Estate",
    category: "custom-homes",
    categoryTitle: "Custom Homes",
    location: "British Columbia",
    type: "Custom Home",
    description:
      "A custom estate painting project completed with attention to finish quality, detailed preparation, and strong residential presentation.",
    coverImage:
      "/images/projects/custom-homes/SouthBorough-Estate-Painting-Construction-CrestlinePainting-Interior-Exterior.jpeg",
    images: [
      {
        src: "/images/projects/custom-homes/SouthBorough-Estate-Painting-Construction-CrestlinePainting-Interior-Exterior.jpeg",
        alt: "SouthBorough Estate custom home painting project by Crestline Painting",
      },
      {
        src: "/images/projects/custom-homes/SouthBorough-Estate-Painting-Construction-CrestlinePainting-Interior-Exterior0.jpg",
        alt: "SouthBorough Estate custom home painting detail by Crestline Painting",
      },
      {
        src: "/images/projects/custom-homes/SouthBorough-Estate-Painting-Construction-CrestlinePainting-Interior-Exterior (2).jpg",
        alt: "SouthBorough Estate interior painting by Crestline Painting",
      },
      {
        src: "/images/projects/custom-homes/SouthBorough-Estate-Painting-Construction-CrestlinePainting-Interior-Exterior (3).jpg",
        alt: "SouthBorough Estate finished painting work by Crestline Painting",
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