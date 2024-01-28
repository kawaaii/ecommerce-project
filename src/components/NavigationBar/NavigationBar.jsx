import "./NavigationBar.css";

import MagnifyingGlassIcon from "../../images/icons/MagnifyingGlassIcon";

const NavigationBar = () => {
  return (
    <>
      <nav className="container flex flex-row justify-evenly">
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
              <button
                type="submit"
                className="absolute inset-y-0 right-0 pr-1 dark:text-white"
              >
                <MagnifyingGlassIcon />
              </button>
            </div>
          </form>
        </div>
        <div className="navBarItems"></div>
      </nav>
    </>
  );
};

export default NavigationBar;
