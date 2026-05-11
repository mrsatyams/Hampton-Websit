import React from "react";
import HomeHero from "./components/Hero";
import AboutSection from "./components/About";
import ContentSection from "./components/Content";
import Dining from "./components/Dining";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{width: "100%"}}>
      <HomeHero />
      <AboutSection />
      <ContentSection />
      <Dining />
      <Footer />
    </div>
  );
}

export default App;