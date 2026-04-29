export type ProjectItem = {
  title: string;
  category: string;
  location: string;
  description: string;
  image: string;
};

export const projects: ProjectItem[] = [
  {
    title: "Commercial Repaint Program",
    category: "Commercial",
    location: "British Columbia",
    description:
      "Professional repainting support for business and operational environments with clean scheduling and reliable execution.",
    image: "/images/projects/York-Langley-strata-Paint-Exterior-Painting-Crestline-Painting-Cunstruction.jpg",
  },
  {
    title: "Multi-Family Development Finish",
    category: "Multi-Family",
    location: "British Columbia",
    description:
      "Consistent finishes across large residential developments with strong coordination and production systems.",
    image: "/images/projects/Oxford-Properties-Remodel-ConstructionPainting-Exterior-Painting-Crestline-Painting.jpg",
  },
  {
    title: "Custom Home Interior & Exterior",
    category: "Custom Homes",
    location: "British Columbia",
    description:
      "Detail-focused finishing for high-end residential work with a premium standard of preparation and execution.",
    image: "/images/projects/Bordeaux-Soltara-Crestline-Painting-Construction-Exterior-Painting.jpg",
  },
  {
    title: "Strata Refresh & Maintenance",
    category: "Strata",
    location: "British Columbia",
    description:
      "Ongoing maintenance and repainting support for occupied properties, common areas, and exterior scopes.",
    image: "/images/projects/Vancouver-Painting-Crestline-Painting-Construction-Interior-Exterior-Painting.jpg",
  },
];