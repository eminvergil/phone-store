// alt + shift + f for prettier
import { Switch, Route } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Card from "./components/Card";
import Default from "./components/Default";
import Contact from "./components/Contact";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/card" component={Card} />
        <Route path="/contact" component={Contact} />
        <Route component={Default} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
