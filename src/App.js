import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import useLoading from "./utills/useLoading";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Gardening from "./pages/Gardening";
import Maintenance from "./pages/Maintenance";
import SwimmingPool from "./pages/SwimingPool";
import ElectroMechanical from "./pages/ElectroMechanical";
import EstateAgent from "./pages/EstateAgent";

function App() {
  const loading = useLoading();

  return loading ? (
    <Loader />
  ) : (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/services/gardening" component={Gardening} />
          <Route exact path="/services/maintenance" component={Maintenance} />
          <Route exact path="/services/swimming-pool" component={SwimmingPool} />
          <Route exact path="/services/electro-mechanical" component={ElectroMechanical} />
          <Route exact path="/services/estate-agent" component={EstateAgent} />

          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
