import React, { useEffect } from "react";
import akumaDeconstructed from "/assets/akuma-deconstructed.png";
import { useInView } from "react-intersection-observer";
import Parallax from "parallax-js";

const Details = () => {
  const { ref, inView } = useInView({
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  });

  useEffect(() => {
    const scene = document.getElementById("scene-2");
    new Parallax(scene);
  }, []);

  return (
    <>
      <section ref={ref} className="relative h-auto bg-zinc-800" id="details">
        <div id="scene-2" className="z-0 text-8xl">
          <img
            src={akumaDeconstructed}
            data-depth="0.04"
            alt="hero background"
            className="object-cover w-screen h-[700px] md:h-[850px]"
          />
        </div>
        <div className="max-w-6xl text-white tracking-tight mx-auto text-[2.625rem] font-bold leading-none font-primary md:text-7xl">
          <div
            className={`absolute bottom-0 font-semibold duration-1000 transition-all px-3 mx-auto ${
              inView ? "opacity-100 bottom-3/4" : "opacity-0 top-1/2"
            }`}
          >
            Three Piece Construction
          </div>
          <div
            className={`absolute bottom-0 duration-1000 transition-all delay-500 px-3 ${
              inView
                ? "opacity-100 bottom-[62%] md:bottom-[62%]"
                : "opacity-0 top-1/2"
            }`}
          >
            Tenkeyless Layout
          </div>
          <div
            className={`absolute bottom-0 duration-1000 transition-all delay-[750ms] px-3 ${
              inView
                ? "opacity-100 bottom-[49%] md:bottom-[49%]"
                : "opacity-0 top-1/2"
            }`}
          >
            Gasket Mounted
          </div>
          <div
            className={`absolute bottom-0 duration-1000 transition-all delay-1000 px-3 ${
              inView
                ? "opacity-100 bottom-[36%] md:bottom-[36%]"
                : "opacity-0 top-1/2"
            }`}
          >
            Brass Weight
          </div>
          <div
            className={`absolute bottom-0 duration-1000 transition-all delay-[1250ms] px-3 ${
              inView
                ? "opacity-100 bottom-[23%] md:bottom-[23%]"
                : "opacity-0 top-1/2"
            }`}
          >
            RGB Underglow
          </div>
        </div>
      </section>
    </>
  );
};

export default Details;
