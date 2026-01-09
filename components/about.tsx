"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I'm a <span className="font-medium">Software Engineer</span> with over 4
        years of experience building scalable web applications using{" "}
        <span className="font-medium">React</span>,{" "}
        <span className="font-medium">TypeScript</span>,{" "}
        <span className="font-medium">Node.js</span>, and modern web
        architectures. I'm passionate about creating user-focused solutions and
        working in collaborative, Agile environments.
      </p>
      <p className="mb-3">
        My journey started in banking technology, but I quickly realized I
        wanted to work on more dynamic, product-focused projects. This led me to
        move to Australia to improve my English and gain international
        experience. Upon returning, I completed a Full-Stack bootcamp at{" "}
        <span className="font-medium">Ironhack</span>, where my performance
        earned me a position as a{" "}
        <span className="font-medium">Teaching Assistant</span>, helping
        students and contributing to various projects.
      </p>
      <p className="mb-3">
        Currently, I'm working as a software engineer at{" "}
        <span className="font-medium">Decathlon Digital</span>, where I build
        and maintain e-commerce platforms that serve millions of users. I'm
        always learning, improving, and striving to write clean, high-quality
        code that makes a difference.
      </p>
    </motion.section>
  );
}
