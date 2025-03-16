import React from "react";
import GlobeHero from "./Components/GlobeHero";
import {SparklesPreview} from "./Components/SparkelesPreview";
import {SparklesPreview1} from "./Components/SparkelsPreview1";
import {TextHoverEffectDemo} from "./Components/TextHoverEffectUsuage";
import {BackgroundBeamsDemo} from "./Components/HeroBeamsDemo";
import {BackgroundBeamsWithCollisionDemo} from "./Components/BackgroundBreamswithCollisionDemo";

const App = () => {
  return (
    <div>
      <GlobeHero />
      <SparklesPreview/>
      <SparklesPreview1/>
      <TextHoverEffectDemo/>
      <BackgroundBeamsDemo/>
      <BackgroundBeamsWithCollisionDemo/>
    </div>
  );
};

export default App;
