import React, { useEffect } from "react";
import Parallax from "parallax-js";
import akumaHero from "/assets/akuma-hero.webp";

const Hero = () => {
  useEffect(() => {
    const scene = document.getElementById("scene");
    new Parallax(scene);
  }, []);

  return (
    <>
      <section id="hero" className="min-h-screen overflow-hidden">
        <div id="scene" className="z-0 text-8xl bg-zinc-300">
          <img
            src={akumaHero}
            data-depth="0.04"
            alt="hero background"
            className="object-cover min-h-screen animate-on-load"
          />
        </div>
        <div className="absolute z-10 w-full leading-none text-center top-32 md:top-48 text-zinc-800 animate-on-load hover:cursor-default">
          <h1 className="font-bold text-7xl md:text-9xl lg:text-[11rem] font-accent">
            Akuma
          </h1>
          <p className="text-base md:text-4xl">Enthusiast Keyboard</p>
        </div>
      </section>
    </>
  );
};

export default Hero;
