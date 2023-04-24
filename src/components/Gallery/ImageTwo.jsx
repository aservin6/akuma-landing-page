import React from "react";
import { useInView } from "react-intersection-observer";
import akumaBadging from "/assets/akuma-badging.png";

const ImageTwo = () => {
  const { ref, inView } = useInView({
    root: null,
    rootMargin: "0px",
    threshold: 0.85,
  });

  return (
    <div ref={ref} className="relative w-full pb-16 md:pb-0">
      <img
        src={akumaBadging}
        className="border h-full w-full aspect-square border-white rounded-md border-opacity-30 md:m-0"
        alt="keyboard akuma badging"
      />
      <p
        className={`absolute z-10 mt-1 text-2xl lg:text-3xl md:bottom-4 font-semibold translate-x-full transition-all duration-1000 ${
          inView ? "opacity-100 translate-x-0 md:translate-x-4" : "opacity-0"
        }`}
      >
        Exclusive <span className="text-rose-300">Akuma</span> badging
      </p>
    </div>
  );
};

export default ImageTwo;
