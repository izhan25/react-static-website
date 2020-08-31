import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import useLoading from "./utills/useLoading";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

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

          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
