"use client";

import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { useTheme } from "@/context/theme-context";

type ThemeSwitchProps = {
  className?: string;
};

export default function ThemeSwitch({ className }: ThemeSwitchProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
      className={[
        "w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-opacity-40 shadow-lg rounded-full flex items-center justify-center hover:scale-[1.08] active:scale-105 transition-all dark:bg-gray-950 bg-white border-white/40 dark:border-gray-800",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      onClick={toggleTheme}
    >
      <div className="relative w-5 h-5">
        <span className="absolute inset-0 flex items-center justify-center theme-switch-sun text-yellow-500">
          <BsSun />
        </span>
        <span className="absolute inset-0 flex items-center justify-center theme-switch-moon text-gray-300">
          <BsMoon />
        </span>
      </div>
    </button>
  );
}
