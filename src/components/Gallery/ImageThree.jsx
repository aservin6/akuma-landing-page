import React from "react";
import { useInView } from "react-intersection-observer";
import chromaWeight from "/assets/chroma-weight.png";

const ImageThree = () => {
  const { ref, inView } = useInView({
    root: null,
    rootMargin: "0px",
    threshold: 0.85,
  });

  return (
    <div ref={ref} className="relative w-full pt-3 md:pt-0 md:col-start-2 md:row-start-2">
      <img src={chromaWeight} className="mb-3 border border-white rounded-md border-opacity-30" alt="chroma brass weight" />
      <p className={`absolute text-2xl lg:text-3xl md:bottom-6 font-semibold translate-x-full transition-all duration-1000 ${
          inView ? "opacity-100 translate-x-0 md:translate-x-4" : "opacity-0"
        }`}>
            <span className="text-blue-300">Laser</span> etched brass
            weight
          </p>
    </div>
  );
};

export default ImageThree;