import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

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
    <nav className={`fixed top-0 z-50 hidden w-screen px-3 md:block transition-all duration-1000 ${scrollPosition < 500 ? "bg-opacity-0" : "bg-zinc-800 text-zinc-100 bg-opacity-100"}`}>
      <div className="flex items-center justify-between max-w-6xl mx-auto h-14 md:h-16">
        <a
          href="/"
          className={`text-2xl md:text-3xl text-zinc-900 font-bold border-[3px] px-1 whitespace-nowrap ${scrollPosition < 500 ? "text-zinc-900 border-zinc-900" : "text-zinc-100 border-zinc-100"}`}
        >
          悪魔
        </a>
        <ul className="flex items-center text-xs md:gap-2 md:text-sm">
          <a
            href="#hero"
            className="p-3 hover:underline hover:underline-offset-2"
          >
            Hero
          </a>
          <a
            href="#details"
            className="p-3 hover:underline hover:underline-offset-2"
          >
            Details
          </a>
          <a
            href="#showcase"
            className="p-3 hover:underline hover:underline-offset-2"
          >
            Showcase
          </a>
          <a
            target="_blank"
            href="https://kbdfans.com/collections/akuma/products/akuma-80-keyboard"
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
