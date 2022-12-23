import React from "react";

const CallToAction = () => {
  return (
    <section id="cta" className="h-[400px] bg-zinc-300 bg-akuma-keyboard bg-cover bg-center bg-no-repeat">
      <div className="max-w-6xl mx-auto flex flex-col h-full justify-center gap-5">
        <p className="font-bold text-white text-center text-6xl">
          Group Buy Available Now
        </p>
        <a
          target="_blank"
          href="https://kbdfans.com/collections/akuma/products/akuma-80-keyboard"
          className="px-5 whitespace-nowrap py-2 text-white bg-rose-700 rounded-full w-fit text-sm md:text-lg mx-auto"
        >
          Buy Now
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
