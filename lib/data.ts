import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import decathlon from "@/public/DECATHLON1.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Banking software developer",
    location: "Madrid, Spain",
    description:
      "Development with Cobol and maintenance of batch/online programs. Working on the migration from Banesto, OpenBank to Santander Bank.",
    icon: React.createElement(CgWorkAlt),
    date: "2017- 2019",
  },
  {
    title: "Graduated bootcamp",
    location: "Barcelona, Spain",
    description:
      "I graduated after 6 months of studying. I immediately was hired from Ironhack as a teacher assistant.",
    icon: React.createElement(LuGraduationCap),
    date: "2021-2022",
  },
  {
    title: "Full-Stack Developer",
    location: "Madrid, Spain",
    description:
      "I'm now a full-stack developer working in Decathlon Digital. My stack includes Javascript, Svelte, React, TypeScript, Node.js, etc",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Decathlon Digital",
    description:
      "I worked as a full-stack developer on this company project for 2 years and 6 months.",
    tags: [
      "Javascript",
      "Svelte",
      "React",
      "Typescript",
      "Node.js",
      "CSS",
      "HTML",
    ],
    imageUrl: decathlon,
  },
  {
    title: "Project Management",
    description:
      "A react project management  I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Node.Js"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Git",
  "Tailwind",
  "MongoDB",
  "Postman",
  "Express",
  "Framer Motion",
] as const;
