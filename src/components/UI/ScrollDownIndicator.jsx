import React, { useState, useEffect } from "react";
import { BsChevronDoubleDown } from "react-icons/bs";

const ScrollDownIndicator = () => {
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
    <div
      className={`absolute w-full bottom-8 animate-bounce transition-opacity duration-1000 ${
        scrollPosition < 500 ? "opacity-100" : "opacity-0"
      }`}
    >
      <BsChevronDoubleDown className="w-8 h-8 mx-auto" />
    </div>
  );
};

export default ScrollDownIndicator;
