import React from "react";
import { useInView } from "react-intersection-observer";
import brassWeights from "/assets/brass-weights.png";

const ImageOne = () => {
  const { ref, inView } = useInView({
    root: null,
    rootMargin: "0px",
    threshold: 0.85,
  });

  return (
    <div ref={ref} className="relative pb-16 md:row-span-2 md:pb-0">
      <img src={brassWeights} className="h-full border border-white rounded-md border-opacity-30 md:m-0" alt="brass weights" />
      <p
        className={`absolute text-2xl md:text-5xl md:bottom-4 font-semibold translate-x-full transition-all duration-1000 ${
          inView ? "opacity-100 translate-x-0 md:translate-x-4" : "opacity-0"
        }`}
      >
        <span className="text-amber-200">Brass</span> weights available in three
        materials
      </p>
    </div>
  );
};

export default ImageOne;
