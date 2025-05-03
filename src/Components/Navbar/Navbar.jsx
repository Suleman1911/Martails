import React from "react";
import "./Navbar.css";
import Logo from "../../assets/imgs/logo-dark.png";
import { Link } from "react-router-dom";
import Logout from "../Logout/Logout";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="list">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/course">Course</Link>
            </li>
            <li>
              <Link to="/service">Service</Link>
            </li>
            <li>
              <Link to="/programs">Our Programs</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <Logout/>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
