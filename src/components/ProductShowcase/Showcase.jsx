import React, {useState} from "react";
import Carousel from "./Carousel";
import CarouselButtons from "./CarouselButtons";
import { useInView } from "react-intersection-observer";

const Showcase = () => {
  const [selectedImage, setSelectedImage] = useState("1");

  const { ref, inView } = useInView({
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  return (
    <section
      id="showcase"
      ref={ref}
      className="relative z-40 px-5 py-10 md:py-20 bg-zinc-200"
    >
      <div className="grid md:grid-cols-2 max-w-xl md:max-w-6xl mx-auto gap-x-5 gap-y-5 md:gap-y-10 md:grid-rows-[min-content_1fr] md:gap-x-10">
        <Carousel
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
        <h3
          className={`text-6xl font-bold order-first md:order-none transition-opacity duration-1000 tracking-tight h-fit ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        >
          Available in multiple colors to match any setup
        </h3>
        <CarouselButtons
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      </div>
    </section>
  );
};

export default Showcase;
