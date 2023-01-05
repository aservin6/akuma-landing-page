import React from "react";
import ImageOne from "./ImageOne";
import ImageTwo from "./ImageTwo";
import ImageThree from "./ImageThree";

const Gallery = () => {
  return (
    <section id="gallery" className="px-5 pt-10 md:py-20 bg-zinc-800">
      <div className="grid max-w-xl grid-rows-2 gap-3 mx-auto text-white md:max-w-6xl md:space-y-0 md:grid-cols-[2fr_1fr]">
        <ImageOne />
        <ImageTwo />
        <ImageThree />
      </div>
    </section>
  );
};

export default Gallery;
