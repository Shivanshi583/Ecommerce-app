import React from "react";
import { NavLink } from "react-router-dom";

import Login from "./Login";
import Signup from "./Signup";
import Cart from "./Cartbtn";
import Cartbtn from "./Cartbtn";

const Navbar = () => {
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white py-3 shdaow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            HR COLLECTION
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
              
              
            </ul>
            <div className="buttons ">
              {/* <div className="btn me-1 p-1">
                <NavLink to="/login" className="btn btn-outline-dark">
                  <i className=" mfae- fa-sign-in1"></i>Login</NavLink>
                  <NavLink to="/sign-up" className="btn btn-outline-dark">
                  <i className="fa fa-user-plus ms-2"></i>SIGN-Up</NavLink>
                  <NavLink to="/cart" className="btn btn-outline-dark">
                  <i className="fa fa-shopping-cart ms-2"></i>Cart({state.length })</NavLink>
              </div> */}
              <Login/>
              <Signup/>
              <Cartbtn/>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
