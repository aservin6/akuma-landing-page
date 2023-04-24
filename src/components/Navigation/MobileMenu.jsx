import React from "react";

const MobileMenu = ({ showMenu }) => {
  return (
    <>
      {
        <div
          className={`fixed top-14 left-0 z-50 w-screen bg-zinc-800 text-sm text-zinc-100 transition-all duration-500 md:hidden ${
            !showMenu && "opacity-0 -translate-y-96"
          } ${showMenu && "opacity-100"}`}
        >
          <div className="flex flex-col">
            <a
              href="#hero"
              className="py-3.5 pl-5 hover:bg-zinc-400 hover:bg-opacity-30 focus:bg-zinc-400 focus:bg-opacity-30"
            >
              Hero
            </a>
            <a
              href="#details"
              className="py-3.5 pl-5 hover:bg-zinc-400 hover:bg-opacity-30 focus:bg-zinc-400 focus:bg-opacity-30"
            >
              Details
            </a>
            <a
              href="#showcase"
              className="py-3.5 pl-5 hover:bg-zinc-400 hover:bg-opacity-30 focus:bg-zinc-400 focus:bg-opacity-30"
            >
              Showcase
            </a>
          </div>
        </div>
      }
    </>
  );
};

export default MobileMenu;
