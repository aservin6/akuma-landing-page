import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 hidden w-screen px-3 bg-zinc-300 bg-opacity-30 backdrop-blur-lg md:block">
      <div className="flex items-center justify-between max-w-6xl mx-auto h-14 md:h-16">
        <a href="/" className="text-2xl md:text-3xl text-zinc-900 font-bold border-[3px] border-zinc-900 px-1 whitespace-nowrap">
          悪魔
        </a>
        <ul className="flex items-center text-xs md:gap-2 md:text-sm">
          <a href="#hero" className="p-3 hover:underline hover:underline-offset-2">
            Hero
          </a>
          <a href="#details" className="p-3 hover:underline hover:underline-offset-2">
            Details
          </a>
          <a href="#showcase" className="p-3 hover:underline hover:underline-offset-2">
            Showcase
          </a>
          <a
            target="_blank" href="https://kbdfans.com/collections/akuma/products/akuma-80-keyboard"
            className="px-3 whitespace-nowrap py-1.5 text-white bg-rose-700 rounded-full"
          >
            Buy Now
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
