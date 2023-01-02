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

  const carousel = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const handleDragStart = (e) => e.preventDefault();
  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = [
    <div
      className="w-full"
      role="presentation"
      onDragStart={handleDragStart}
      data-value="0"
    >
      <img src={akumaBlack} alt="black keyboard" className="w-full" />
    </div>,
    <div
      className="w-full"
      role="presentation"
      onDragStart={handleDragStart}
      data-value="1"
    >
      <img src={akumaRed} alt="red keyboard" className="w-full" />
    </div>,
    <div
      className="w-full"
      role="presentation"
      onDragStart={handleDragStart}
      data-value="2"
    >
      <img src={akumaGray} alt="gray keyboard" className="w-full" />
    </div>,
    <div
      className="w-full"
      role="presentation"
      onDragStart={handleDragStart}
      data-value="3"
    >
      <img src={akumaBlue} alt="blue keyboard" className="w-full" />
    </div>,
    <div
      className="w-full"
      role="presentation"
      onDragStart={handleDragStart}
      data-value="4"
    >
      <img src={akumaPurple} alt="purple keyboard" className="w-full" />
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
            activeIndex={activeIndex}
            mouseTracking
            items={items}
            disableButtonsControls
            disableDotsControls
            onSlideChanged={syncActiveIndex}
            ref={carousel}
          />
        </div>
        <h2
          className={`text-6xl font-bold order-first md:order-none transition-opacity duration-1000 tracking-tight h-fit ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        >
          Available in multiple colors to match any setup
        </h2>
        <div className="flex items-start gap-5 md:col-start-2 -order-1 md:order-none w-fit">
          <button
            onClick={() => {
              carousel?.current?.slideTo(0);
            }}
            className={`p-5 rounded-full bg-zinc-800 ${
              activeIndex == 0 && "ring-1 ring-zinc-400 ring-offset-4"
            }`}
            aria-label="show black keyboard"
          ></button>
          <button
            onClick={() => {
              carousel?.current?.slideTo(1);
            }}
            className={`p-5 rounded-full bg-rose-800 ${
              activeIndex == 1 && "ring-1 ring-zinc-400 ring-offset-4"
            }`}
            aria-label="show red keyboard"
          ></button>
          <button
            onClick={() => {
              carousel?.current?.slideTo(2);
            }}
            className={`p-5 rounded-full bg-zinc-500 ${
              activeIndex == 2 && "ring-1 ring-zinc-400 ring-offset-4"
            }`}
            aria-label="show gray keyboard"
          ></button>
          <button
            onClick={() => {
              carousel?.current?.slideTo(3);
            }}
            className={`p-5 rounded-full bg-blue-800 ${
              activeIndex == 3 && "ring-1 ring-zinc-400 ring-offset-4"
            }`}
            aria-label="show blue keyboard"
          ></button>
          <button
            onClick={() => {
              carousel?.current?.slideTo(4);
            }}
            className={`p-5 rounded-full bg-indigo-900 ${
              activeIndex == 4 && "ring-1 ring-zinc-400 ring-offset-4"
            }`}
            aria-label="show purple keyboard"
          ></button>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
