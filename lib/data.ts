import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { FaUniversity, FaCocktail } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import decathlon from "@/public/decathlon1.png";
import rmtdevImg from "@/public/rmtdev.png";
import pokedexImg from "@/public/pokedex.png";

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
    title: "software developer - Santander Bank",
    location: "Madrid, Spain",
    description:
      "Participated in a training program, working with COBOL, maintaining batch/online programs, and supporting the migration from Banesto and OpenBank to Santander.",
    icon: React.createElement(FaUniversity),
    date: "2017- 2019",
  },
  {
    title: "Bar Manager - Raes on Wategos",
    location: "New South Wales, Australia",
    description:
      "Managed bar operations, crafted bespoke cocktails, and optimized sales in a luxury beachfront venue.",
    icon: React.createElement(FaCocktail),
    date: "2019- 2021",
  },
  {
    title: "Graduated bootcamp - Ironhack",
    location: "Barcelona, Spain",
    description:
      "I graduated after 6 months of studying and immediately was hired from the bootcamp Ironhack as a teacher assistant.",
    icon: React.createElement(GiTeacher),
    date: "2021-2023",
  },
  {
    title: "Full-Stack Developer - Decathlon Digital",
    location: "Madrid, Spain",
    description:
      "Currently working as a full-stack developer at Decathlon Digital, building scalable web applications using modern technologies including JavaScript, TypeScript, Svelte, React, and Node.js.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Decathlon Digital",
    description:
      "Full-stack development on Decathlon's e-commerce platform, building scalable web applications and implementing new features.",
    tags: [
      "Javascript",
      "Svelte",
      "React",
      "Typescript",
      "Node.js",
      "HTML",
      "CSS",
    ],
    imageUrl: decathlon,
    url: "https://www.decathlon.es",
  },
  {
    title: "Pokedex",
    description:
      "A pokèdex app where you can search for a pokemon and see its details.",
    tags: ["React", "TypeScript", "Tailwind", "Next.js", "Node.js"],
    imageUrl: pokedexImg,
    url: "https://binpar-samy-pokedex.vercel.app/",
  },
  {
    title: "Analysta Project",
    description:
      "A trading desk platform where users can register, analyze and operate with fictitious financial assets.",
    tags: [
      "NestJS",
      "React",
      "React Query",
      "Axios",
      "React Router",
      "TypeScript",
      "MongoDB",
      "Zustand",
      "Docker",
      "Tailwind",
    ],
    imageUrl: rmtdevImg,
    url: "https://github.com/SamyAliSanchez/analysta-project",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Svelte",
  "Next.js",
  "Node.js",
  "Redux",
  "Zustand",
  "Vercel",
  "Express",
  "Git",
  "Tailwind",
  "Figma",
  "MongoDB",
  "Postman",
  "Framer Motion",
] as const;
