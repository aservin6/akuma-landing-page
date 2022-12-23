import React from "react";
import Details from "./components/Details/Details";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navigation/Navbar";
import MobileNav from "./components/Navigation/MobileNav";
import BackToTopButton from "./components/UI/BackToTopButton";
import ScrollDownIndicator from "./components/UI/ScrollDownIndicator";
import Showcase from "./components/ProductShowcase/Showcase";
import Gallery from "./components/Gallery/Gallery";
import CallToAction from "./components/CallToAction/CallToAction";
import FooterLinks from "./components/Footer/FooterLinks";

const App = () => {
  return (
    <div className="text-zinc-900 font-primary">
      <MobileNav />
      <Navbar />
      <header>
        <Hero />
      </header>
      <main>
        <Details />
        <Showcase />
        <Gallery />
      </main>
      <footer>
        <CallToAction />
        <FooterLinks />
      </footer>
      <ScrollDownIndicator />
      <BackToTopButton />
    </div>
  );
};

export default App;
