import "./NavigationBar.css";

import MagnifyingGlassIcon from "../../images/icons/MagnifyingGlassIcon";
import UserCircleIcon from "../../images/icons/UserCircleIcon";
import SunIcon from "../../images/icons/SunIcon";
import MoonIcon from "../../images/icons/MoonIcon";

function darkMode() {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  // Whenever the user explicitly chooses light mode
  localStorage.theme = "light";

  // Whenever the user explicitly chooses dark mode
  localStorage.theme = "dark";

  // Whenever the user explicitly chooses to respect the OS preference
  localStorage.removeItem("theme");
}

function DarkModeIconToggle() {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    return <MoonIcon />;
  } else {
    return <SunIcon />;
  }
}

const NavigationBar = () => {
  return (
    <nav className="container flex flex-row justify-between">
      <div className="navBarLogo">
        <img src="#!" alt="LOGO" />
      </div>
      <div className="searchBar">
        <form className="flex gap-1 align-middle" action="#!">
          <div className="relative">
            <input
              type="text"
              className="rounded text-black placeholder-black ring-1 ring-[#0b0c0f] dark:bg-neutral-900 dark:text-white dark:placeholder-white dark:ring-1 dark:ring-[#d1d1d1]"
              placeholder="WIP"
            />
            <button type="submit" className="absolute inset-y-0 right-0 pr-1 ">
              <MagnifyingGlassIcon />
            </button>
          </div>
        </form>
      </div>
      <div className="navBarItems flex flex-row gap-2">
        <button className="hover:text-[#9499ff]">Login / Register</button>
        <a href="#!" className="hover:text-[#9499ff]">
          <UserCircleIcon />
        </a>
        <button
          onClick={darkMode}
          className="rounded-full"
          aria-label="Toggle Dark Mode"
        >
          <DarkModeIconToggle />
        </button>
      </div>
    </nav>
  );
};

export default NavigationBar;
