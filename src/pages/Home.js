import React, { Suspense } from "react";

// COMPONENTS
const Banner = React.lazy(() => import("../components/Banner"));
const About = React.lazy(() => import("../components/About"));
const Rocket = React.lazy(() => import("../components/Rocket"));
const Elon = React.lazy(() => import("../components/Elon"));
const Launch = React.lazy(() => import("../components/Launches"));

const Home = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading . . .</div>}>
        <Banner />
        <About />
        <Rocket />
        <Elon />
        <Launch />
      </Suspense>
    </div>
  );
};

export default Home;
