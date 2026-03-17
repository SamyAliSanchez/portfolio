"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import ThemeSwitch from "@/components/theme-switch";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      {/* Mobile: remove nav, show brand */}
      <div className="fixed top-0 left-0 right-0 h-14 px-4 flex items-center justify-between bg-white/60 backdrop-blur-md border-b border-black/5 dark:bg-gray-950/40 dark:border-white/10 sm:hidden">
        <Link
          href="/"
          className="text-primary text-xl font-semibold tracking-tight"
          aria-label="Go to homepage"
        >
          <span className="text-primary">Samy</span>{" "}
          <span className="text-black dark:text-white">Ali</span>
        </Link>
        <ThemeSwitch className="w-8 h-8 shadow-none border-white/30 dark:border-white/10" />
      </div>

      {/* Desktop: keep existing header */}
      <motion.div
        className="hidden sm:block fixed top-6 left-1/2 -translate-x-1/2 h-[3.25rem] w-[36rem] rounded-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav className="hidden sm:flex fixed top-[1.7rem] left-1/2 -translate-x-1/2 items-center">
        <ul className="flex items-center justify-center text-[0.9rem] font-medium text-gray-500 gap-5">
          {links.map((link) => (
            <motion.li
              className="relative h-3/4 flex items-center justify-center"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                  {
                    "text-gray-950 dark:text-gray-200":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="absolute bg-gray-100 rounded-full inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
