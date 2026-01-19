import CareerPath from "@/components/pages/CareerPath";
import Contact from "@/components/pages/Contact";
import FeaturedProjects from "@/components/pages/FeaturedProjects";
import TechStack from "@/components/pages/TechStack";
import { ComponentType } from "react";

export type Landing = {
  ref: string;
  name: string;
  comp: ComponentType;
};

export const landings: Landing[] = [
  {
    ref: "tech-stack",
    name: "Tech Stack",
    comp: TechStack,
  },
  {
    ref: "career-path",
    name: "Career Path",
    comp: CareerPath,
  },
  {
    ref: "featured-projects",
    name: "Featured Projects",
    comp: FeaturedProjects,
  },
  {
    ref: "contact",
    name: "Contact",
    comp: Contact,
  },
];
