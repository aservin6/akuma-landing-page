import React from "react";
import akumaBlack from "/assets/akuma-black.webp";
import akumaRed from "/assets/akuma-red.webp";
import akumaGray from "/assets/akuma-gray.webp";
import akumaBlue from "/assets/akuma-blue.webp";
import akumaPurple from "/assets/akuma-purple.webp";
import CarouselItem from "./CarouselItem";

const Carousel = ({selectedImage, setSelectedImage}) => {
  return (
    <>
      <div className="w-full border rounded-md border-zinc-400 carousel md:row-span-2">
        <CarouselItem id={"item1"} number={1} image={akumaBlack} selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
        <CarouselItem id={"item2"} number={2} image={akumaRed} selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
        <CarouselItem id={"item3"} number={3} image={akumaGray} selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
        <CarouselItem id={"item4"} number={4} image={akumaBlue} selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
        <CarouselItem id={"item5"} number={5} image={akumaPurple} selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
      </div>
    </>
  );
};

export default Carousel;
