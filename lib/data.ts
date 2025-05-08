import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import decathlon from "@/public/decathlon1.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordScramblle from "@/public/Desktop_1350px.jpg";

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
      "Development with Cobol and maintenance of batch/online programs. Working on the migration from Banesto, OpenBank to Santander Bank.",
    icon: React.createElement(CgWorkAlt),
    date: "2017- 2019",
  },
  {
    title: "Full Stack developer - Orange Spain",
    location: "Madrid, Spain",
    description:
      "Orders management department in charge of fixing errors in relation to media query functionality.",
    icon: React.createElement(CgWorkAlt),
    date: "2020- 2021",
  },
  {
    title: "Graduated bootcamp - Ironhack",
    location: "Barcelona, Spain",
    description:
      "I graduated after 6 months of studying and immediately was hired from the bootcamp Ironhack as a teacher assistant.",
    icon: React.createElement(LuGraduationCap),
    date: "2021-2022",
  },
  {
    title: "Full-Stack Developer - Decathlon Digital",
    location: "Madrid, Spain",
    description:
      "I'm now a full-stack developer working in Decathlon Digital. My stack includes Javascript, Svelte, React, TypeScript, Node.js, etc.",
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
      "HTML",
      "CSS",
    ],
    imageUrl: decathlon,
  },
  {
    title: "Project Management",
    description:
      "A react project management that contains features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Node.Js"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Scramblle",
    description: "Fun game app where you’re presented with a scrambled word.",
    tags: ["Javascript", "HTML", "CSS"],
    imageUrl: wordScramblle,
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
