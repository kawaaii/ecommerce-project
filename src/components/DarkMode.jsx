import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [isDarkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.theme;
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    return storedTheme === "dark" || (!storedTheme && prefersDarkMode);
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.theme = isDarkMode ? "dark" : "light";
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return { isDarkMode, toggleDarkMode };
};
