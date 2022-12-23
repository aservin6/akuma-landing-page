import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const CarouselItem = ({image, id, selectedImage, setSelectedImage, number}) => {
  const { ref, inView } = useInView({
    root: null,
    rootMargin: "0px",
    threshold: 0.85,
  });

  useEffect(() => {
    if (inView) {
        setSelectedImage(number);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      id={id}
      className="w-full carousel-item scroll-mt-52 md:scroll-mt-20"
    >
      <img src={image} className="w-full" />
    </div>
  );
};

export default CarouselItem;
