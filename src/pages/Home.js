import React from "react";

// COMPONENTS
import Banner from "../components/Banner";
import About from "../components/About";
import Rocket from "../components/Rocket";
import Elon from "../components/Elon";
import Launch from "../components/Launches";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Rocket />
      <Elon />
      <Launch />
    </div>
  );
}

export default Home;
