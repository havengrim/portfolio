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
    title: "iPHONE 15 Pro",
    description: "Apple Website Clone",
    coverImage: images.cover11,
    wholeCoverImage: images.wholecover10,
    link: "https://3-d-iphone.vercel.app/",
  },

  {
    title: "HiLink Travel",
    description: "Travel Companion",
    coverImage: images.cover6,
    wholeCoverImage: images.wholecover5,
    link: "https://travel-iota-ten.vercel.app/",
  },
  {
    title: "3D Portfolio",
    description: "Learning threeJS",
    coverImage: images.cover9,
    wholeCoverImage: images.wholecover8,
    link: "  https://3d-portfolio-gules.vercel.app/",
  },
  {
    title: "CSE Study Corner",
    description: "Host, Connect, Celebrate",
    coverImage: images.cover15,
    wholeCoverImage: images.wholecover14,
    link: "https://study-corner-es9e.vercel.app/",
  },
  {
    title: "Tech Innovations",
    description: "Exploring technology",
    coverImage: images.cover10,
    wholeCoverImage: images.wholecover9,
    link: "  https://tech-innovations.vercel.app/",
  },
  {
    title: "St. Joseph School",
    description: "School Website",
    coverImage: images.cover8,
    wholeCoverImage: images.wholecover7,
    link: "  https://saintjoseph.vercel.app/",
  },
  {
    title: "The18 Manager",
    description: "Business Tracker",
    coverImage: images.cover7,
    wholeCoverImage: images.wholecover6,
    link: "https://the18.vercel.app/",
  },
  {
    title: "Howard University",
    description: "School Website",
    coverImage: images.cover12,
    wholeCoverImage: images.wholecover11,
    link: "https://howard-university-r5rq.vercel.app/",
  },

  {
    title: "Community Church",
    description: "Our Church Website",
    coverImage: images.cover13,
    wholeCoverImage: images.wholecover12,
    link: "https://clhcc.vercel.app/",
  },

  {
    title: "Evently Connect",
    description: "Host, Connect, Celebrate",
    coverImage: images.cover14,
    wholeCoverImage: images.wholecover13,
    link: "https://evently-qstz.vercel.app/",
  },





  
];

