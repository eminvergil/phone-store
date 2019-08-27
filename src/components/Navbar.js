import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-sm-5">
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-item-center">
          <li className="nav-item ml-5">
            <Link to="/">
              <button className="btn btn-info">Products</button>
            </Link>
          </li>
          {/* <li className="nav-item ml-5">
            <Link to="/card">Shop</Link>
          </li> */}
        </ul>
        <Link to="/card" className="ml-auto">
          <button className="btn btn-info ">
            <i className="fas fa-cart-plus"> My Cart</i>
          </button>
          {/* <ButtonContainer>
            <i className="fas fa-cart-plus">My Cart</i>
          </ButtonContainer> */}
        </Link>
      </nav>
    );
  }
}
