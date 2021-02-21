// NAVIGATION
import Navs from "./components/Nav";

// FOOTER
import Footer from "./components/Footer";
import { Route, BrowserRouter as Router } from "react-router-dom";
// PAGES
import Home from "./pages/Home";
import Rocketpage from "./pages/Rocket-page";
import Rocketdetail from "./pages/Rocket-detail";
import Launchespage from "./pages/Launches-page";
import Launchesdetail from "./pages/Launches-detail";
function App() {
  return (
    <Router>
      <div>
        <Navs />

        <Route exact path="/" component={Home} />
        <Route exact path="/rockets" component={Rocketpage} />
        <Route exact path="/rockets/:rocket_id" component={Rocketdetail} />
        <Route exact path="/launches" component={Launchespage} />
        <Route exact path="/launches/:flight_number" component={Launchesdetail} />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
