import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components";
import "../App.css";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="mb-3 navbar navbar-dark  navbar-expand-sm ">
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-list-5"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse collapse" id="navbar-list-5">
          <ul
            className="navbar-nav align-item-center ml-auto"
            id="navbar-list-5"
          >
            <li className="nav-item ml-5">
              <Link to="/">
                <button className="btn btn-info">Home</button>
              </Link>
            </li>
            <li className="nav-item ml-5">
              <Link to="/details">
                <button className="btn btn-info">About</button>
              </Link>
            </li>
            <li className="nav-item ml-5">
              <Link to="/contact">
                <button className="btn btn-info">Contact</button>
              </Link>
            </li>
          </ul>
          <Link to="/card" className="ml-auto">
            <button className="btn btn-info ">
              <i className="fas fa-cart-plus"> My Cart</i>
            </button>
          </Link>
        </div>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  height: 100px;
  background: linear-gradient(
    70deg,
    rgba(155, 0, 25, 0.7),
    rgba(50, 155, 55, 0.3)
  );
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
