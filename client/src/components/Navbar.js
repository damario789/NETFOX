import React, { useEffect, useState } from "react";
import Logo from "../assets/NETFOX_LOGO.png";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <div className={`nav ${show && "nav__black"} ${!show && "nav--fadetop"}`}>
      <div className="nav__contents">
        <Link to="/">
          <img className="nav__logo" src={Logo} alt="" />
        </Link>

        <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="" className="nav__avatar rounded" />

        <Link to="/" className="nav__home">
          Home
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
