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
      "/images/projects/multi-family/Brickwater-Village-4-Buildings-Crestline-Painting-Exterior1.jpg",
  },
  {
    slug: "strata",
    title: "Strata",
    short:
      "Portfolio work for strata properties, occupied buildings, shared spaces, and long-term property presentation.",
    description:
      "Explore Crestline Painting strata projects, including shared properties, exterior repainting, common areas, building maintenance, and property-focused painting work.",
    image:
      "/images/projects/strata/York-Langley-Strata-Townhouse-Crestline-Painting.jpg",
  },
  {
    slug: "commercial",
    title: "Commercial",
    short:
      "Commercial painting work for offices, retail, tenant improvements, institutions, and active business environments.",
    description:
      "Explore Crestline Painting commercial projects, including offices, retail spaces, tenant improvements, industrial environments, and professional business-facing spaces.",
    image:
      "/images/projects/commercial/Vancouver-Warehouse-Crestline-Painting-Exterior-Commercial-Construction.jpg",
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
        src: "/images/projects/custom-homes/SouthBourough-Estate-Painting-Construction-CrestlinePainting-Interior-Exterior0.jpeg",
        alt: "SouthBorough Estate custom home painting project by Crestline Painting",
      },
      {
        src: "/images/projects/custom-homes/SouthBourough-Estate-Painting-Construction-CrestlinePainting-Interior-Exterior.jpg",
        alt: "SouthBorough Estate custom home painting detail by Crestline Painting",
      },
      {
        src: "/images/projects/custom-homes/SouthBourough-Estate-Painting-Construction-CrestlinePainting-Interior-Exterior1.jpg",
        alt: "SouthBorough Estate interior painting by Crestline Painting",
      },
      {
        src: "/images/projects/custom-homes/SouthBourough-Estate-Painting-Construction-CrestlinePainting-Interior-Exterior2.jpg",
        alt: "SouthBorough Estate finished painting work by Crestline Painting",
      },
    ],
  },
  {
    id: "brickwater-village",
    slug: "brickwater-village",
    title: "Brickwater Village",
    category: "multi-family",
    categoryTitle: "Multi-Family",
    location: "British Columbia",
    type: "Multi-Family",
    description:
      "A multi-family exterior painting project completed across a larger residential property, with a focus on consistent finish quality, building presentation, and organized project execution.",
    coverImage:
      "/images/projects/multi-family/Brickwater-Village-4-Buildings-Crestline-Painting-Exterior1.jpg",
    images: [
      {
        src: "/images/projects/multi-family/Brickwater-Village-4-Buildings-Crestline-Painting-Exterior1.jpg",
        alt: "Brickwater Village multi-family exterior painting by Crestline Painting",
      },
      {
        src: "/images/projects/multi-family/Brickwater-Village-4-Buildings-Crestline-Painting-Exterior2.jpg",
        alt: "Brickwater Village exterior painting project by Crestline Painting",
      },
      {
        src: "/images/projects/multi-family/Brickwater-Village-4-Buildings-Crestline-Painting-Exterior3.jpg",
        alt: "Brickwater Village residential building painting by Crestline Painting",
      },
    ],
  },
  {
    id: "edge-on-edge-maple-ridge",
    slug: "edge-on-edge-maple-ridge",
    title: "Edge on Edge Maple Ridge",
    category: "multi-family",
    categoryTitle: "Multi-Family",
    location: "Maple Ridge, BC",
    type: "Multi-Family",
    description:
      "A multi-family painting project focused on exterior presentation, clean finish work, and organized painting support for a residential building environment.",
    coverImage:
      "/images/projects/multi-family/edge-on-edge-3-maple-ridge-Crestline-Painting.jpg",
    images: [
      {
        src: "/images/projects/multi-family/edge-on-edge-3-maple-ridge-Crestline-Painting.jpg",
        alt: "Edge on Edge Maple Ridge painting project by Crestline Painting",
      },
      {
        src: "/images/projects/multi-family/edge-on-edge-3-maple-ridge-Crestline-Painting0.jpg",
        alt: "Edge on Edge Maple Ridge multi-family painting by Crestline Painting",
      },
    ],
  },
  {
    id: "the-shore",
    slug: "the-shore",
    title: "The Shore",
    category: "multi-family",
    categoryTitle: "Multi-Family",
    location: "British Columbia",
    type: "Multi-Family",
    description:
      "A multi-family exterior painting project completed with attention to building presentation, surface preparation, and consistent finished results.",
    coverImage:
      "/images/projects/multi-family/The-Shore-Exterior-Painting-Construction-Crestlinepainting.jpg",
    images: [
      {
        src: "/images/projects/multi-family/The-Shore-Exterior-Painting-Construction-Crestlinepainting.jpg",
        alt: "The Shore exterior painting project by Crestline Painting",
      },
      {
        src: "/images/projects/multi-family/The-Shore-Exterior-Painting-Construction-Crestlinepainting0.jpg",
        alt: "The Shore multi-family exterior painting by Crestline Painting",
      },
    ],
  },
  {
    id: "fantom-tower-white-rock",
    slug: "fantom-tower-white-rock",
    title: "Fantom Tower White Rock",
    category: "multi-family",
    categoryTitle: "Multi-Family",
    location: "White Rock, BC",
    type: "Multi-Family",
    description:
      "A residential tower painting project focused on exterior presentation, professional execution, and high-visibility multi-family property work.",
    coverImage:
      "/images/projects/multi-family/Fantom-Tower-White-Rock-Crestline-Painting.jpg",
    images: [
      {
        src: "/images/projects/multi-family/Fantom-Tower-White-Rock-Crestline-Painting.jpg",
        alt: "Fantom Tower White Rock painting project by Crestline Painting",
      },
    ],
  },
  {
    id: "acorn-multi-family",
    slug: "acorn-multi-family",
    title: "Acorn Multi-Family",
    category: "multi-family",
    categoryTitle: "Multi-Family",
    location: "British Columbia",
    type: "Multi-Family",
    description:
      "A multi-family painting project involving exterior and interior painting support, with a focus on durability, presentation, and clean completed results.",
    coverImage:
      "/images/projects/multi-family/Acorn-Multi-Family-Crestline-painting-Exterior-Interior.jpg",
    images: [
      {
        src: "/images/projects/multi-family/Acorn-Multi-Family-Crestline-painting-Exterior-Interior.jpg",
        alt: "Acorn multi-family exterior and interior painting by Crestline Painting",
      },
    ],
  },
  {
    id: "block-multi-family",
    slug: "block-multi-family",
    title: "Block Multi-Family",
    category: "multi-family",
    categoryTitle: "Multi-Family",
    location: "British Columbia",
    type: "Multi-Family",
    description:
      "A multi-family painting project completed with attention to exterior and interior surfaces, property presentation, and organized project delivery.",
    coverImage:
      "/images/projects/multi-family/Block-Multi-Family-Crestline-Painting-Exterior-Interior.jpg",
    images: [
      {
        src: "/images/projects/multi-family/Block-Multi-Family-Crestline-Painting-Exterior-Interior.jpg",
        alt: "Block multi-family painting project by Crestline Painting",
      },
    ],
  },
  {
    id: "richmond-mid-rise",
    slug: "richmond-mid-rise",
    title: "Richmond Mid-Rise",
    category: "multi-family",
    categoryTitle: "Multi-Family",
    location: "Richmond, BC",
    type: "Multi-Family",
    description:
      "A mid-rise multi-family painting project focused on exterior and interior building presentation, coordinated execution, and consistent finish quality.",
    coverImage:
      "/images/projects/multi-family/Richmond-Mid-Rise-Crestline-Painting-Exterior-Interior-Multi-Family.jpg",
    images: [
      {
        src: "/images/projects/multi-family/Richmond-Mid-Rise-Crestline-Painting-Exterior-Interior-Multi-Family.jpg",
        alt: "Richmond mid-rise multi-family painting project by Crestline Painting",
      },
    ],
  },
  {
    id: "bordeaux-soltara",
    slug: "bordeaux-soltara",
    title: "Bordeaux Soltara",
    category: "multi-family",
    categoryTitle: "Multi-Family",
    location: "British Columbia",
    type: "Multi-Family",
    description:
      "A multi-family painting project focused on exterior and interior finishes, professional presentation, and clean execution across a residential property.",
    coverImage:
      "/images/projects/multi-family/Bordeaux-Soltara-Multi-Family-Crestline-Painting-Exterior-Interior.jpg",
    images: [
      {
        src: "/images/projects/multi-family/Bordeaux-Soltara-Multi-Family-Crestline-Painting-Exterior-Interior.jpg",
        alt: "Bordeaux Soltara multi-family painting project by Crestline Painting",
      },
    ],
  },
  {
    id: "mcnair-north-vancouver",
    slug: "mcnair-north-vancouver",
    title: "McNair North Vancouver",
    category: "strata",
    categoryTitle: "Strata",
    location: "North Vancouver, BC",
    type: "Strata",
    description:
      "A strata exterior painting project completed with attention to surface preparation, property presentation, and long-term building appearance.",
    coverImage:
      "/images/projects/strata/McNair-North-Vancouver-Crestline-Painting-Exterior.jpg",
    images: [
      {
        src: "/images/projects/strata/McNair-North-Vancouver-Crestline-Painting-Exterior.jpg",
        alt: "McNair North Vancouver strata exterior painting by Crestline Painting",
      },
      {
        src: "/images/projects/strata/McNair-North-Vancouver-Crestline-Painting-Exterior0.jpg",
        alt: "McNair North Vancouver strata painting project by Crestline Painting",
      },
    ],
  },
  {
    id: "sandhurst-south-surrey-townhouse-complex",
    slug: "sandhurst-south-surrey-townhouse-complex",
    title: "Sandhurst South Surrey Townhouse Complex",
    category: "strata",
    categoryTitle: "Strata",
    location: "South Surrey, BC",
    type: "Strata",
    description:
      "A townhouse complex painting project focused on consistent exterior finishes, organized coordination, and professional strata property presentation.",
    coverImage:
      "/images/projects/strata/Sandhurst-South-Surrey-townhouse-complex-Painting-Crestline-Painting.jpg",
    images: [
      {
        src: "/images/projects/strata/Sandhurst-South-Surrey-townhouse-complex-Painting-Crestline-Painting.jpg",
        alt: "Sandhurst South Surrey townhouse complex painting by Crestline Painting",
      },
      {
        src: "/images/projects/strata/Sandhurst-South-Surrey-townhouse-complex-Painting-Crestline-Painting0.jpg",
        alt: "Sandhurst South Surrey strata townhouse painting by Crestline Painting",
      },
    ],
  },
  {
    id: "shaughnessy-place-vancouver",
    slug: "shaughnessy-place-vancouver",
    title: "Shaughnessy Place Vancouver",
    category: "strata",
    categoryTitle: "Strata",
    location: "Vancouver, BC",
    type: "Strata",
    description:
      "A strata property painting project completed with attention to exterior appearance, coordinated execution, and long-term building presentation.",
    coverImage:
      "/images/projects/strata/Shaughnessy-Place-Vancouver-Crestline-Painting.jpg",
    images: [
      {
        src: "/images/projects/strata/Shaughnessy-Place-Vancouver-Crestline-Painting.jpg",
        alt: "Shaughnessy Place Vancouver strata painting by Crestline Painting",
      },
      {
        src: "/images/projects/strata/Shaughnessy-Place-Vancouver-Crestline-Painting0.jpg",
        alt: "Shaughnessy Place Vancouver painting project by Crestline Painting",
      },
      {
        src: "/images/projects/strata/Shaughnessy-Place-Vancouver-Crestline-Painting1.jpg",
        alt: "Shaughnessy Place Vancouver strata exterior painting by Crestline Painting",
      },
      {
        src: "/images/projects/strata/Shaughnessy-Place-Vancouver-Crestline-Painting2.jpg",
        alt: "Shaughnessy Place Vancouver finished painting work by Crestline Painting",
      },
    ],
  },
  {
    id: "york-langley-strata-townhouse",
    slug: "york-langley-strata-townhouse",
    title: "York Langley Strata Townhouse",
    category: "strata",
    categoryTitle: "Strata",
    location: "Langley, BC",
    type: "Strata",
    description:
      "A strata townhouse painting project focused on exterior presentation, finish consistency, and clean execution across a residential property.",
    coverImage:
      "/images/projects/strata/York-Langley-Strata-Townhouse-Crestline-Painting.jpg",
    images: [
      {
        src: "/images/projects/strata/York-Langley-Strata-Townhouse-Crestline-Painting.jpg",
        alt: "York Langley strata townhouse painting by Crestline Painting",
      },
      {
        src: "/images/projects/strata/York-Langley-Strata-Townhouse-Crestline-Painting0.jpg",
        alt: "York Langley strata townhouse exterior painting by Crestline Painting",
      },
      {
        src: "/images/projects/strata/York-Langley-Strata-Townhouse-Crestline-Painting1.jpg",
        alt: "York Langley strata townhouse finished painting work by Crestline Painting",
      },
    ],
  },
  {
    id: "vancouver-warehouse",
    slug: "vancouver-warehouse",
    title: "Vancouver Warehouse",
    category: "commercial",
    categoryTitle: "Commercial",
    location: "Vancouver, BC",
    type: "Commercial",
    description:
      "A commercial warehouse painting project focused on exterior presentation, durable coatings, clean execution, and professional building appearance.",
    coverImage:
      "/images/projects/commercial/Vancouver-Warehouse-Crestline-Painting-Exterior-Commercial-Construction.jpg",
    images: [
      {
        src: "/images/projects/commercial/Vancouver-Warehouse-Crestline-Painting-Exterior-Commercial-Construction.jpg",
        alt: "Vancouver Warehouse commercial exterior painting by Crestline Painting",
      },
      {
        src: "/images/projects/commercial/Vancouver-Warehouse-Crestline-Painting-Exterior-Commercial-Construction0.jpg",
        alt: "Vancouver Warehouse commercial painting project by Crestline Painting",
      },
    ],
  },
  {
    id: "south-surrey-commercial",
    slug: "south-surrey-commercial",
    title: "South Surrey Commercial",
    category: "commercial",
    categoryTitle: "Commercial",
    location: "South Surrey, BC",
    type: "Commercial",
    description:
      "A commercial painting project focused on exterior finish quality, professional presentation, and clean execution for a business-facing property.",
    coverImage:
      "/images/projects/commercial/South-SurreyCommercial-Painting-CrestlinePainting.jpg",
    images: [
      {
        src: "/images/projects/commercial/South-SurreyCommercial-Painting-CrestlinePainting.jpg",
        alt: "South Surrey commercial painting project by Crestline Painting",
      },
      {
        src: "/images/projects/commercial/South-SurreyCommercial-Painting-CrestlinePainting0.jpg",
        alt: "South Surrey commercial exterior painting by Crestline Painting",
      },
      {
        src: "/images/projects/commercial/South-SurreyCommercial-Painting-CrestlinePainting1.jpg",
        alt: "South Surrey commercial finished painting work by Crestline Painting",
      },
    ],
  },
  {
    id: "save-on-foods-commercial",
    slug: "save-on-foods-commercial",
    title: "Save-On-Foods Commercial",
    category: "commercial",
    categoryTitle: "Commercial",
    location: "British Columbia",
    type: "Commercial",
    description:
      "A commercial exterior painting project completed with attention to scheduling, durability, presentation, and a clean professional finish.",
    coverImage:
      "/images/projects/commercial/Save-On-Foods-Commercial-Crestline-Painting-exterior-Construction.jpeg",
    images: [
      {
        src: "/images/projects/commercial/Save-On-Foods-Commercial-Crestline-Painting-exterior-Construction.jpeg",
        alt: "Save-On-Foods commercial exterior painting by Crestline Painting",
      },
    ],
  },
  {
    id: "remdal-commercial-warehouse",
    slug: "remdal-commercial-warehouse",
    title: "Remdal Commercial Warehouse",
    category: "commercial",
    categoryTitle: "Commercial",
    location: "British Columbia",
    type: "Commercial",
    description:
      "A commercial warehouse repaint and repair project involving concrete repair, repainting, and practical exterior building restoration work.",
    coverImage:
      "/images/projects/commercial/Remdal-Commercial-Warehouse-Concrete-repair-and-repaint-Crestline-Painting.jpg",
    images: [
      {
        src: "/images/projects/commercial/Remdal-Commercial-Warehouse-Concrete-repair-and-repaint-Crestline-Painting.jpg",
        alt: "Remdal Commercial Warehouse concrete repair and repaint by Crestline Painting",
      },
      {
        src: "/images/projects/commercial/Remdal-Commercial-Warehouse-Concrete-repair-and-repaint-Crestline-Painting0.jpg",
        alt: "Remdal Commercial Warehouse repaint project by Crestline Painting",
      },
      {
        src: "/images/projects/commercial/Remdal-Commercial-Warehouse-Concrete-repair-and-repaint-Delta-Crestline-Painting.jpg",
        alt: "Commercial warehouse repaint and concrete repair in Delta by Crestline Painting",
      },
    ],
  },
  {
    id: "carson-exterior-painting",
    slug: "carson-exterior-painting",
    title: "Carson Exterior Painting",
    category: "commercial",
    categoryTitle: "Commercial",
    location: "British Columbia",
    type: "Commercial",
    description:
      "A commercial exterior painting project completed with focus on surface preparation, building presentation, and long-lasting finish quality.",
    coverImage:
      "/images/projects/commercial/Carson-Crestline-Painting-Exterior-Painting.jpg",
    images: [
      {
        src: "/images/projects/commercial/Carson-Crestline-Painting-Exterior-Painting.jpg",
        alt: "Carson commercial exterior painting project by Crestline Painting",
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