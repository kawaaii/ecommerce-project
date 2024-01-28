import MagnifyingGlassIcon from "../images/icons/MagnifyingGlassIcon";
import UserCircleIcon from "../images/icons/UserCircleIcon";
import SunIcon from "../images/icons/SunIcon";
import MoonIcon from "../images/icons/MoonIcon";

import { useDarkMode } from "./DarkMode";

const NavigationBar = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
      <nav className="container flex flex-row justify-between">
        <div className="navBarLogo">
          <img src="#!" alt="LOGO" />
        </div>
        <div className="searchBar">
          <form className="flex gap-1 align-middle" action="#!">
            <div className="relative">
              <input
                type="text"
                className="rounded text-black placeholder-black ring-1 ring-[#0b0c0f] placeholder:text-center placeholder:decoration-transparent dark:bg-neutral-900 dark:text-white dark:placeholder-white dark:ring-1 dark:ring-[#d1d1d1]"
                placeholder="WIP"
              />
              <button
                type="submit"
                className="absolute inset-y-0 right-0 pr-1 "
              >
                <MagnifyingGlassIcon />
              </button>
            </div>
          </form>
        </div>
        <div className="navBarItems flex flex-row gap-3">
          <button
            href="#!"
            className="flex flex-row gap-2 hover:text-[#9499ff]"
          >
            <span>
              <UserCircleIcon />
            </span>
            Login / Register
          </button>
          <button
            onClick={toggleDarkMode}
            className="rounded-full"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <MoonIcon /> : <SunIcon />}
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
