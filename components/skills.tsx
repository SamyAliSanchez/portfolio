"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 40,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.06 * index,
    },
  }),
};

const groupedSkills: { label: string; items: string[] }[] = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "Svelte", "Redux", "Tailwind"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "NestJS", "PostgreSQL"],
  },
  {
    label: "Cloud & DevOps",
    items: ["Docker", "Vercel", "AWS", "Kubernetes"],
  },
  {
    label: "Tools & Design",
    items: ["Git", "Postman", "Figma", "MongoDB", "Axios", "Node"],
  },
];

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      ref={ref}
      className="mb-28 max-w-5xl scroll-mt-28 text-center sm:mb-40"
      id="skills"
    >
      <SectionHeading>My skills</SectionHeading>

      <p className="mt-4 text-sm text-gray-400">
        A mix of frontend, backend and tooling I use the most.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {groupedSkills.map((group, groupIndex) => (
          <motion.div
            key={group.label}
            className="rounded-2xl border border-white/10 bg-white/5 px-5 py-5 text-left shadow-sm dark:bg-white/5"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            custom={groupIndex}
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-400 mb-3">
              {group.label}
            </h3>
            <ul className="flex flex-wrap gap-2 text-sm text-gray-100">
              {group.items.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-white/10 bg-black/20 px-3 py-1 dark:bg-white/5"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
