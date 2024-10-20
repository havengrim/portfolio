import images from "@/assets/images";

export interface workExp {
  title: string;
  description: string;
  date: string;
}

export interface tools {
    tool:string;
    name:string;
    description:string;
}

export interface thoughts {
    title: string;
    description: string;
    date: string;
  }
  

export const workExp: workExp[] = [
  {
    title: "GoCloud Incorporation",
    description: "Developed and implemented responsive mobile and web interfaces, enhancing user experience and engagement through optimized design and seamless interactions.",
    date: "June 2023",
  },
  {
    title: "Project Management GCI",
    description: "Developed and implemented design strategies for new product lines, collaborated closely with engineers and product managers.",
    date: "March 2023"
  },
  {
    title: "Digital Marketing GCI",
    description: "Directed design strategies for new product lines, collaborating with engineers and product managers to enhance user experiences.",
    date: "February 2023"
  },
];

export const thoughs: thoughts[] = [
    {
      title: "Starting and Growing a Career in Web Design",
      description: "As the internet continues to develop and grow exponentially, jobs related to the industry do too, particularly those that relate to web design and development.",
      date: "October 2024",
    },
    {
      title: "Create a Landing Page That Performs Great",
      description: "Whether you work in marketing, sales, or product design, you understand the importance of a quality landing page. Landing pages are standalone websites used to generate leads or sales—in other words they help you increase your revenue.",
      date: "October 2024",
    },
    {
        title: "How Can Designers Prepare for the Future?",
        description: "Quality landing pages are essential for marketing, sales, and product design, as they drive leads and sales, ultimately boosting revenue.",
        date: "October 2024",
    }
  ];

export const tools: tools[] = [
    {
        tool: images.tool1,
        name: "ReactJS",
        description: " JavaScript library"
    },
    {
        tool: images.tool2,
        name: "TypeScript",
        description: "Superset of JavaScript"
    },
    {
        tool: images.tool3,
        name: "Tailwind",
        description: "Utility-first CSS"
    },
    {
        tool: images.tool4,
        name: "ShadCN",
        description: "UI Component"
    },
    {
        tool: images.tool5,
        name: "Vite",
        description: "Build Tool"
    },
    {
        tool: images.tool6,
        name: "Material UI",
        description: "Component Library"
    },
];
