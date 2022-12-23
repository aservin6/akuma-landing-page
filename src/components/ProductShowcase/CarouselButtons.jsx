import React, { useState, useEffect } from "react";

const CarouselButtons = () => {
  const [selectedImage, setSelectedImage] = useState("1");

  const handleImageChange = (e) => {
    setSelectedImage(e.target.attributes["data-image"].value);
  };

  return (
    <div className="flex items-start gap-5 md:col-start-2 -order-1 md:order-none w-fit">
      <a
        onClick={handleImageChange}
        href="#item1"
        className={`p-5 bg-zinc-800 rounded-full ${
          selectedImage == 1 &&
          "outline-1 outline-zinc-400 outline outline-offset-4"
        }`}
        data-image={1}
      ></a>
      <a
        onClick={handleImageChange}
        href="#item2"
        className={`p-5 bg-rose-800 rounded-full ${
          selectedImage == 2 &&
          "outline-1 outline-zinc-400 outline outline-offset-4"
        }`}
        data-image={2}
      ></a>
      <a
        onClick={handleImageChange}
        href="#item3"
        className={`p-5 bg-zinc-500 rounded-full ${
          selectedImage == 3 &&
          "outline-1 outline-zinc-400 outline outline-offset-4"
        }`}
        data-image={3}
      ></a>
      <a
        onClick={handleImageChange}
        href="#item4"
        className={`p-5 bg-blue-800 rounded-full ${
          selectedImage == 4 &&
          "outline-1 outline-zinc-400 outline outline-offset-4"
        }`}
        data-image={4}
      ></a>
      <a
        onClick={handleImageChange}
        href="#item5"
        className={`p-5 bg-indigo-900 rounded-full ${
          selectedImage == 5 &&
          "outline-1 outline-zinc-400 outline outline-offset-4"
        }`}
        data-image={5}
      ></a>
    </div>
  );
};

export default CarouselButtons;
