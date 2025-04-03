import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import decathlon from "@/public/decahtlon.jpg";
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
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2016- 2017",
  },
  {
    title: "Frontend Developer",
    location: "Madrid, Spain",
    description:
      "I worked as a front-end developer for a year in Orange. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2017 - 2018",
  },
  {
    title: "Graduated bootcamp",
    location: "Barcelona, Spain",
    description:
      "I graduated after 6 months of studying. I immediately hired form Ironhack and after 6 months found a job as a front-end developer in Extia, Decathlon.",
    icon: React.createElement(LuGraduationCap),
    date: "2021-2022",
  },
  {
    title: "Full-Stack Developer",
    location: "Madrid, Spain",
    description:
      "I'm now a full-stack developer working in Decathlon Digital. My stack includes Javascript, Svelte, React, TypeScript, Node.js",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Decathlon Digital",
    description:
      "I worked as a full-stack developer on this company project for 2 years.",
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
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
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
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
] as const;
