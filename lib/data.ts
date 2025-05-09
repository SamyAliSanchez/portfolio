import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { FaUniversity, FaCocktail } from "react-icons/fa";
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
      "Participated in a training program, working with COBOL, maintaining batch/online programs, and supporting the migration from Banesto and OpenBank to Santander.",
    icon: React.createElement(FaUniversity),
    date: "2014- 2017",
  },
  {
    title: "Bar Manager - Raes on Wategos",
    location: "New South Wales, Australia",
    description:
      "Managed bar operations, crafted bespoke cocktails, and optimized sales in a luxury beachfront venue.",
    icon: React.createElement(FaCocktail),
    date: "2017- 2019",
  },
  {
    title: "Full-Stack developer - Orange Spain",
    location: "Madrid, Spain",
    description:
      "Orders management department in charge of fixing errors in relation to media query functionality.",
    icon: React.createElement(CgWorkAlt),
    date: "2019- 2020",
  },
  {
    title: "Graduated bootcamp - Ironhack",
    location: "Barcelona, Spain",
    description:
      "I graduated after 6 months of studying and immediately was hired from the bootcamp Ironhack as a teacher assistant.",
    icon: React.createElement(GiTeacher),
    date: "2020-2022",
  },
  {
    title: "Full-Stack Developer - Decathlon Digital",
    location: "Madrid, Spain",
    description:
      "Currently working as a full-stack developer at Decathlon Digital, building scalable web applications using modern technologies including JavaScript, TypeScript, Svelte, React, and Node.js.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Decathlon Digital",
    description:
      "I worked as a full-stack developer on this company project for 3 years and 6 months.",
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
  "Figma",
  "MongoDB",
  "Postman",
  "Express",
  "Framer Motion",
] as const;
