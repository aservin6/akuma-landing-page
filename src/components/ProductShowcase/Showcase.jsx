import React, { useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import akumaBlack from "/assets/akuma-black.webp";
import akumaRed from "/assets/akuma-red.webp";
import akumaGray from "/assets/akuma-gray.webp";
import akumaBlue from "/assets/akuma-blue.webp";
import akumaPurple from "/assets/akuma-purple.webp";

const Showcase = () => {
  const { ref, inView } = useInView({
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const carousel = useRef(null);

  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <div className="w-full">
      <img
        src={akumaBlack}
        onDragStart={handleDragStart}
        role="presentation"
        alt="black keyboard"
        color="bg-zinc-800"
        className="w-full"
      />
    </div>,
    <div className="w-full">
      <img
        src={akumaRed}
        onDragStart={handleDragStart}
        role="presentation"
        alt="red keyboard"
        color="bg-rose-800"
        className="w-full"
      />
    </div>,
    <div className="w-full">
      <img
        src={akumaGray}
        onDragStart={handleDragStart}
        role="presentation"
        alt="gray keyboard"
        color="bg-zinc-500"
        className="w-full"
      />
    </div>,
    <div className="w-full">
      <img
        src={akumaBlue}
        onDragStart={handleDragStart}
        role="presentation"
        alt="blue keyboard"
        color="bg-blue-800"
        className="w-full"
      />
    </div>,
    <div className="w-full">
      <img
        src={akumaPurple}
        onDragStart={handleDragStart}
        role="presentation"
        alt="purple keyboard"
        color="bg-indigo-900"
        className="w-full"
      />
    </div>,
  ];

  return (
    <section
      id="showcase"
      ref={ref}
      className="relative z-40 px-5 py-10 md:py-20 bg-zinc-200"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-xl md:max-w-6xl mx-auto gap-x-5 gap-y-5 md:gap-y-10 md:grid-rows-[min-content_1fr] md:gap-x-10">
        <div className="w-full md:row-span-2">
          <AliceCarousel
            mouseTracking
            items={items}
            disableButtonsControls
            disableDotsControls
            activeIndex={activeIndex}
            ref={carousel}
          />
        </div>
        <h3
          className={`text-6xl font-bold order-first md:order-none transition-opacity duration-1000 tracking-tight h-fit ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        >
          Available in multiple colors to match any setup
        </h3>
        <div className="flex items-start gap-5 md:col-start-2 -order-1 md:order-none w-fit">
          <button
            onClick={() => {
              carousel?.current?.slideTo(0);
              setActiveIndex(0);
            }}
            className={`p-5 rounded-full bg-zinc-800 ${
              activeIndex == 0 && "ring-1 ring-zinc-400 ring-offset-4"
            }`}
          ></button>
          <button
            onClick={() => {
              carousel?.current?.slideTo(1);
              setActiveIndex(1);
            }}
            className={`p-5 rounded-full bg-rose-800 ${
              activeIndex == 1 && "ring-1 ring-zinc-400 ring-offset-4"
            }`}
          ></button>
          <button
            onClick={() => {
              carousel?.current?.slideTo(2);
              setActiveIndex(2);
            }}
            className={`p-5 rounded-full bg-zinc-500 ${
              activeIndex == 2 && "ring-1 ring-zinc-400 ring-offset-4"
            }`}
          ></button>
          <button
            onClick={() => {
              carousel?.current?.slideTo(3);
              setActiveIndex(3);
            }}
            className={`p-5 rounded-full bg-blue-800 ${
              activeIndex == 3 && "ring-1 ring-zinc-400 ring-offset-4"
            }`}
          ></button>
          <button
            onClick={() => {
              carousel?.current?.slideTo(4);
              setActiveIndex(4);
            }}
            className={`p-5 rounded-full bg-indigo-900 ${
              activeIndex == 4 && "ring-1 ring-zinc-400 ring-offset-4"
            }`}
          ></button>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
