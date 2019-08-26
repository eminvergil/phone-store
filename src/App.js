// alt + shift + f for prettier
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Card from "./components/Card";
import Default from "./components/Default";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <ProductList />
      <Details />
      <Card />
      <Default />
    </React.Fragment>
  );
}

export default App;
