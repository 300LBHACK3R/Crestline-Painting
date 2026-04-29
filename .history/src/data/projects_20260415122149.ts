export type ProjectItem = {
  title: string;
  category: string;
  location: string;
  description: string;
  image: string;
};

export const projects: ProjectItem[] = [
  {
    title: "Langley Strata Repaint",
    category: "Commercial",
    location: "Br",
    description:
      "Professional repainting support for business and operational environments with clean scheduling and reliable execution.",
    image: "/images/projects/South-Surrey-Commercial-Paint-Exterior-Painting-Crestline-Painting-Construction.jpg",
  },
  {
    title: "Modern Tower Development",
    category: "Multi-Family",
    location: "British Columbia",
    description:
      "Consistent finishes across large residential developments with strong coordination and production systems.",
    image: "/images/projects/Oxford-Properties-Remodel-ConstructionPainting-Exterior-Painting-Crestline-Painting.jpg",
  },
  {
    title: "Luxury Custom Home",
    category: "Custom Homes",
    location: "Kelowna, BC",
    description:
      "High-end residential work showcasing premium finishes, upscale design, and custom-home visual appeal.",
    image: "/images/projects/W42Residence-Custom-Interior-Crestline-Painting-Construction-Exterior-Painting.jpg",
  },
  {
    title: "Langley Strata Repaint",
    category: "Strata",
    location: "Langley, BC",
    description:
      "Exterior repainting and presentation-focused work for a townhouse-style strata environment.",
    image: "/images/projects/Vancouver-Painting-Crestline-Painting-Construction-Interior-Exterior-Strata.jpg",
  },
];