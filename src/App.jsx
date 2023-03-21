import React from "react";
import Section from "./components/SectionPrincipal";
import SectionText from "./components/SectionText";
import Trailers from "./components/Trailers";
import About from "./components/SectionAbout";
import Characters from "./components/SectionCharaters";
import CarouselCharacters from "./components/CarouselCharacters";

function App() {
  return (
    <>
      <Section />
      <SectionText />
      <Trailers />
      <About />
      <Characters />
      <CarouselCharacters />
    </>
  );
}

export default App;
