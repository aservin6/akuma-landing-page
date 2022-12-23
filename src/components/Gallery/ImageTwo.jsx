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
    <div ref={ref} className="relative w-full pt-3 md:col-start-2 md:row-start-1 md:pt-0">
      <img src={akumaBadging} className="mb-3 border border-white rounded-md border-opacity-30" alt="keyboard akuma badging" />
      <p className={`absolute z-10 text-2xl lg:text-3xl md:bottom-6 font-semibold translate-x-full transition-all duration-1000 ${
          inView ? "opacity-100 translate-x-0 md:translate-x-4" : "opacity-0"
        }`}>
            Exclusive <span className="text-rose-300">Akuma</span> badging
          </p>
    </div>
  );
};

export default ImageTwo;