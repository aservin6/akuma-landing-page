import React, { useState, useEffect } from "react";
import { BsChevronDown } from "react-icons/bs";
import MobileMenu from "./MobileMenu";
import BackdropPortal from "./BackdropPortal";

const MobileNav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const closeMenu = () => setShowMenu(false);
  const openMenu = () => setShowMenu(true);

  const toggleMenu = () => {
    if (showMenu) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`fixed top-0 z-50 w-screen px-5 md:hidden transition-all duration-1000 ${showMenu || scrollPosition > 300 ? "bg-zinc-800 text-zinc-100 bg-opacity-100" : "bg-opacity-0"}`}>
        <MobileMenu showMenu={showMenu} />
        <BackdropPortal onClose={closeMenu} showMenu={showMenu} />
        <div className="flex items-center justify-between max-w-6xl mx-auto h-14">
          <div className={`text-2xl md:text-3xl  font-bold border-[3px] px-1 hover:cursor-default whitespace-nowrap ${showMenu || scrollPosition > 300 ? "text-zinc-100 border-zinc-100" : "border-zinc-900 text-zinc-900"}`}>
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
