import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const isWindowDefined = typeof window !== "undefined";

  const getInitialDarkMode = () => {
    const storedTheme = isWindowDefined ? localStorage.theme : null;
    const prefersDarkMode =
      isWindowDefined &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    return storedTheme === "dark" || (!storedTheme && prefersDarkMode);
  };

  const [isDarkMode, setDarkMode] = useState(getInitialDarkMode);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e) => setDarkMode(e.matches);

    if (mediaQuery.addEventListener)
      mediaQuery.addEventListener("change", handleChange);
    else mediaQuery.addListener(handleChange);

    return () => {
      if (mediaQuery.removeEventListener)
        mediaQuery.removeEventListener("change", handleChange);
      else mediaQuery.removeListener(handleChange);
    };
  }, [isWindowDefined]); // Include isWindowDefined in the dependency array

  useEffect(() => {
    if (isWindowDefined) {
      document.documentElement.classList.toggle("dark", isDarkMode);
      localStorage.theme = isDarkMode ? "dark" : "light";
    }
  }, [isDarkMode, isWindowDefined]); // Include isDarkMode and isWindowDefined in the dependency array

  const toggleDarkMode = () => setDarkMode((prevDarkMode) => !prevDarkMode);

  return { isDarkMode, toggleDarkMode };
};
