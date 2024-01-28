import MagnifyingGlassIcon from "../images/icons/MagnifyingGlassIcon";
import UserCircleIcon from "../images/icons/UserCircleIcon";
import SunIcon from "../images/icons/SunIcon";
import MoonIcon from "../images/icons/MoonIcon";
import ShopIcon from "../images/icons/ShopIcon";
import CartIcon from "../images/icons/CartIcon";
import { useDarkMode } from "./DarkMode";

const NavigationBar = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="fixed top-0 flex w-full items-center justify-between border-b border-black bg-slate-100 p-5 dark:border-white dark:bg-neutral-900">
      <a href="/" className="navBarLogo flex flex-row items-center gap-2">
        <ShopIcon className="text-5xl text-black dark:text-white" />
        <strong>Hamro Pasal</strong>
      </a>
      <div className="searchBar">
        <form className="flex gap-1 align-middle" action="#!">
          <div className="relative">
            <input
              type="text"
              className="h-9 w-72 rounded-full text-center text-black placeholder-black ring-1 ring-[#0b0c0f] placeholder:text-center placeholder:decoration-transparent dark:bg-neutral-900 dark:text-white dark:placeholder-white dark:ring-1 dark:ring-[#d1d1d1]"
              placeholder="WIP"
            />
            <button type="submit" className="absolute inset-y-0 right-2 pr-1">
              <MagnifyingGlassIcon className=" ml-[-0.5rem]" />
            </button>
          </div>
        </form>
      </div>
      <div className="navBarItems flex gap-3">
        <a href="#!" className="hover:text-[#9499ff]">
          <CartIcon />
        </a>
        <div className="flex gap-2 hover:text-[#9499ff]">
          <span>
            <UserCircleIcon />
          </span>
          Login / Register
        </div>
        <button
          onClick={toggleDarkMode}
          className="rounded-full"
          aria-label="Dark/Light Mode Toggle"
        >
          {isDarkMode ? <MoonIcon /> : <SunIcon />}
        </button>
      </div>
    </div>
  );
};

export default NavigationBar;
