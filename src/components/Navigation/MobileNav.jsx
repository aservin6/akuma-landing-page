import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import MobileMenu from "./MobileMenu";
import BackdropPortal from "./BackdropPortal";

const MobileNav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const closeMenu = () => setShowMenu(false);
  const openMenu = () => setShowMenu(true);

  const toggleMenu = () => {
    if (showMenu) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  return (
    <>
      <nav className="fixed top-0 z-50 w-screen px-5 bg-opacity-50 md:hidden bg-zinc-300 backdrop-blur">
        <MobileMenu showMenu={showMenu} />
        <BackdropPortal onClose={closeMenu} showMenu={showMenu} />
        <div className="flex items-center justify-between max-w-6xl mx-auto h-14">
          <div className="text-2xl md:text-3xl text-zinc-900 font-bold border-[3px] border-zinc-900 px-1 hover:cursor-default whitespace-nowrap">
            悪魔
          </div>
          <div className="flex items-center gap-2">
            <button onClick={toggleMenu} className="p-3">
              <BsChevronDown className="w-5 h-5" />
            </button>
            <a
              target="_blank" href="https://kbdfans.com/collections/akuma/products/akuma-80-keyboard"
              className="px-3 whitespace-nowrap py-1.5 text-white bg-rose-700 rounded-full w-fit text-sm"
            >
              Buy Now
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MobileNav;
