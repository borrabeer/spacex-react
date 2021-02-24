import React, { Suspense } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

// NAVIGATION
const Navs = React.lazy(() => import("./components/Nav"));

// FOOTER
const Footer = React.lazy(() => import("./components/Footer"));
// PAGES
const Home = React.lazy(() => import("./pages/Home"));
const Rocketpage = React.lazy(() => import("./pages/Rocket-page"));
const Rocketdetail = React.lazy(() => import("./pages/Rocket-detail"));
const Launchespage = React.lazy(() => import("./pages/Launches-page"));
const Launchesdetail = React.lazy(() => import("./pages/Launches-detail"));

function App() {
  return (
    <Router>
      <div>
        <Suspense fallback={<div>Loading . . .</div>}>
          <Navs />

          <Route exact path="/" component={Home} />
          <Route exact path="/rockets" component={Rocketpage} />
          <Route exact path="/rockets/:rocket_id" component={Rocketdetail} />
          <Route exact path="/launches" component={Launchespage} />
          <Route
            exact
            path="/launches/:flight_number"
            component={Launchesdetail}
          />

          <Footer />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
