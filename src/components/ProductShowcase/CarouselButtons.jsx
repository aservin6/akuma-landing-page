import React, { useState } from "react";

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
          "ring-1 ring-zinc-400 ring-offset-4"
        }`}
        data-image={1}
      ></a>
      <a
        onClick={handleImageChange}
        href="#item2"
        className={`p-5 bg-rose-800 rounded-full ${
          selectedImage == 2 &&
          "ring-1 ring-zinc-400 ring-offset-4"
        }`}
        data-image={2}
      ></a>
      <a
        onClick={handleImageChange}
        href="#item3"
        className={`p-5 bg-zinc-500 rounded-full ${
          selectedImage == 3 &&
          "ring-1 ring-zinc-400 ring-offset-4"
        }`}
        data-image={3}
      ></a>
      <a
        onClick={handleImageChange}
        href="#item4"
        className={`p-5 bg-blue-800 rounded-full ${
          selectedImage == 4 &&
          "ring-1 ring-zinc-400 ring-offset-4"
        }`}
        data-image={4}
      ></a>
      <a
        onClick={handleImageChange}
        href="#item5"
        className={`p-5 bg-indigo-900 rounded-full ${
          selectedImage == 5 &&
          "ring-1 ring-zinc-400 ring-offset-4"
        }`}
        data-image={5}
      ></a>
    </div>
  );
};

export default CarouselButtons;
