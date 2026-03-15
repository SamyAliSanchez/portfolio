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
      className="mb-28 max-w-5xl mx-auto leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <div className="mt-8 grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)] items-start">
        <div className="text-left space-y-4">
          <p>
            I&apos;m a <span className="font-medium">Software Engineer</span>{" "}
            with more than <span className="font-medium">5 years of experience</span>{" "}
            building web products with{" "}
            <span className="font-medium">React (Next.js)</span>,{" "}
            <span className="font-medium">TypeScript</span> and modern stacks.
            I like to work close to the product and the user, aiming for simple,
            clear and maintainable solutions.
          </p>
          <br />
          <p>
            I especially enjoy collaborating with other teams, polishing the
            details of the user experience and continuously learning new ways
            to write better code every day.
          </p>
        </div>

        <aside className="md:text-right">
          <div className="inline-flex md:flex md:flex-col gap-4 text-left md:text-right">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
              What I enjoy the most
            </h3>

            <div className="grid gap-3">
              <div className="rounded-2xl border border-gray-200 bg-white/60 px-4 py-3 shadow-sm dark:border-white/10 dark:bg-white/5">
                <p className="text-sm text-gray-700 dark:text-gray-200">
                  🧼 Clean, easy‑to‑maintain code
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white/60 px-4 py-3 shadow-sm dark:border-white/10 dark:bg-white/5">
                <p className="text-sm text-gray-700 dark:text-gray-200">
                  ⚡ Fast interfaces with attention to detail
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white/60 px-4 py-3 shadow-sm dark:border-white/10 dark:bg-white/5">
                <p className="text-sm text-gray-700 dark:text-gray-200">
                  🤝 Teams where people share and learn
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white/60 px-4 py-3 shadow-sm dark:border-white/10 dark:bg-white/5">
                <p className="text-sm text-gray-700 dark:text-gray-200">
                  📚 Getting a bit better every day
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </motion.section>
  );
}
