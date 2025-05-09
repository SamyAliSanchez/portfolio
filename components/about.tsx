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
        After graduating as a higher technician in{" "}
        <span className="font-medium">
          Multi-platform Applications Development
        </span>
        , I decided to pursue my passion for programming. I enrolled in a coding
        bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">What excites me most about programming</span>{" "}
        is the problem-solving aspect. I <span className="underline">love</span>{" "}
        the satisfaction of finally cracking a challenging problem. My core
        stack includes{" "}
        <span className="font-medium">
          JavaScript, TypeScript, React, Svelte, Node.js, and MongoDB
        </span>
        . I'm also experienced with Next.js and Vue.js and am always eager to
        explore new technologies.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy surfing,
        watching movies, and spending time with my dog. I'm also passionate
        about <span className="font-medium">learning new skills</span>, such as
        learning to play the guitar.
      </p>
    </motion.section>
  );
}
