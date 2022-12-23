import React from "react";
import akumaBlack from "/assets/akuma-black.webp";
import akumaRed from "/assets/akuma-red.webp";
import akumaGray from "/assets/akuma-gray.webp";
import akumaBlue from "/assets/akuma-blue.webp";
import akumaPurple from "/assets/akuma-purple.webp";

const Carousel = () => {
  return (
    <>
      <div className="w-full border rounded-md border-zinc-400 carousel md:row-span-2">
        <div id="item1" className="w-full carousel-item scroll-mt-52 md:scroll-mt-20">
          <img src={akumaBlack} className="w-full" />
        </div>
        <div id="item2" className="w-full carousel-item scroll-mt-52 md:scroll-mt-20">
          <img src={akumaRed} className="w-full" />
        </div>
        <div id="item3" className="w-full carousel-item scroll-mt-52 md:scroll-mt-20">
          <img src={akumaGray} className="w-full" />
        </div>
        <div id="item4" className="w-full carousel-item scroll-mt-52 md:scroll-mt-20">
          <img src={akumaBlue} className="w-full" />
        </div>
        <div id="item5" className="w-full carousel-item scroll-mt-52 md:scroll-mt-20">
          <img src={akumaPurple} className="w-full" />
        </div>
      </div>
    </>
  );
};

export default Carousel;
