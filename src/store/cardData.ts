// src/data/cardData.ts
import images from "@/assets/images";

export interface CardData {
  title: string;
  description: string;
  coverImage: string;
  wholeCoverImage: string;
  link: string;
}

export const cardData: CardData[] = [
  {
    title: "Academe LMS",
    description: "Learning Management",
    coverImage: images.cover3,
    wholeCoverImage: images.wholecover1,
    link: "https://ui.academelms.com/",
  },
  {
    title: "CassaReal",
    description: "Real Estate Platform",
    coverImage: images.cover2,
    wholeCoverImage: images.wholecover2,
    link: "https://ui.academelms.com/",
  },
  {
    title: "3D Shirt",
    description: "Customization Shirt",
    coverImage: images.cover4,
    wholeCoverImage: images.wholecover3,
    link: "#",
  },
];
