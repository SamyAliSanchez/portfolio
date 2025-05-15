"use client";

import React, { useEffect, useState, createContext, useContext } from "react";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>("light");

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    window.localStorage.setItem("theme", newTheme);
  };

  const toggleTheme = () => {
    handleThemeChange(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    // Handle initial theme
    const initializeTheme = () => {
      const localTheme = window.localStorage.getItem("theme") as Theme | null;
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      if (localTheme) {
        handleThemeChange(localTheme);
      } else if (systemPrefersDark) {
        handleThemeChange("dark");
      }
    };

    // Handle system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      const localTheme = window.localStorage.getItem("theme");
      if (!localTheme) {
        handleThemeChange(e.matches ? "dark" : "light");
      }
    };

    initializeTheme();
    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, setTheme: handleThemeChange }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }
  return context;
}
