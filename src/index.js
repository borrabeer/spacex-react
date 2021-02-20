import React from "react";
import { render } from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

// NAVIGATION
import Navs from "./components/Nav";

// COMPONENTS
import Banner from "./components/Banner";
import About from "./components/About";
import Rocket from "./components/Rocket";
import Elon from "./components/Elon";
import Lanuch from "./components/Lanuches";

// FOOTER
import Footer from "./components/Footer";

// PAGES
import Rocketpage from "./pages/Rocket-page";
import Rocketdetail from "./pages/Rocket-detail";
const App = () => (
  <div>
    <Navs />
    {/* <Banner />
    <About />
    <Rocket />
    <Elon />
    <Lanuch /> */}
    {/* <Rocketpage /> */}
    <Rocketdetail />
    <Footer />
  </div>
);

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
