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
    link: "https://cassareal.com/",
  },
  {
    title: "3D Shirt",
    description: "Customization Shirt",
    coverImage: images.cover4,
    wholeCoverImage: images.wholecover3,
    link: "https://threejs-sand-three.vercel.app/",
  },
  {
    title: "AI Bank",
    description: "HooBank Website",
    coverImage: images.cover5,
    wholeCoverImage: images.wholecover4,
    link: "https://ai-one-rust.vercel.app/",
  },
  {
    title: "HiLink Travel",
    description: "Travel Companion",
    coverImage: images.cover6,
    wholeCoverImage: images.wholecover5,
    link: "https://travel-iota-ten.vercel.app/",
  },
  {
    title: "The18 Manager",
    description: "Business Tracker",
    coverImage: images.cover7,
    wholeCoverImage: images.wholecover6,
    link: "https://the18.vercel.app/",
  },
];

