import React from "react";
import ImageOne from "./ImageOne";
import ImageTwo from "./ImageTwo";
import ImageThree from "./ImageThree";

const Gallery = () => {  
  return (
    <section id="gallery" className="px-5 bg-zinc-800">
      <div className="grid center max-w-xl md:max-w-6xl py-20 mx-auto space-y-10 text-white md:space-y-0 md:gap-x-3 gap-y-8 md:gap-y-0 md:grid-cols-[66.33%_1fr]">
        <ImageOne />
        <ImageTwo />
        <ImageThree />
      </div>
    </section>
  );
};

export default Gallery;
