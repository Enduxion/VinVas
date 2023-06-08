import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../css/NavBarStyle.css";
import logo from "../assets/logo.png";
import NavBarLinks from "./NavBarLinks";
import AsyncImage from "./AsyncImage";

export default function NavBar(props) {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isNavBarHalf, setIsNavBarHalf] = useState(false);

  function handleNavBar() {
    setIsHamburgerOpen((prevValue) => !prevValue);
  }

  useEffect(() => {
    function setNavBar() {
      if (window.scrollY >= 60) {
        setIsNavBarHalf(true);
      } else {
        setIsNavBarHalf(false);
      }
    }
    document.addEventListener("scroll", setNavBar);
    return function () {
      document.removeEventListener("scroll", setNavBar);
    };
  }, []);
  const navBarData = [
    "Home",
    "About Us",
    "Announcements",
    "Gallery",
    "Staff",
    "Contact Us",
  ];
  let navBarLinks = navBarData.map((data, index) => {
    return (
      <NavBarLinks selectedLink={props.selectedLink} value={data} key={index} />
    );
  });

  return (
    <nav className={`navBar ${isNavBarHalf ? "navBar--half" : "navBar--full"}`}>
      <Link to="/" className="navBar--logo--link">
        <AsyncImage src={logo} className="navBar--logo--image" alt="logo" />
        VVSS.
      </Link>
      <div
        className={`navBar--links ${
          isHamburgerOpen ? "navBar--links--open" : ""
        }`}
      >
        {navBarLinks}
      </div>
      <div className="navBar--toggle--darkMode" onClick={props.toggleDarkMode}>
        <i
          className={`fa-solid ${props.darkMode ? "fa-sun" : "fa-moon"}`}
          id="darkModeButton"
        ></i>
      </div>
      <div
        className={`navBar--hamburger--container ${
          isHamburgerOpen ? "navBar--hamburger--open" : ""
        }`}
        onClick={handleNavBar}
      >
        <div className="navBar--hamburger--stick hamburger--stick1"></div>
        <div className="navBar--hamburger--stick hamburger--stick2"></div>
        <div className="navBar--hamburger--stick hamburger--stick3"></div>
      </div>
    </nav>
  );
}
