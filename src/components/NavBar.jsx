import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/NavBarStyle.css";
import NavBarLinks from "./NavBarLinks";

export default function NavBar(props) {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  function handleNavBar() {
    setIsHamburgerOpen((prevValue) => !prevValue);
  }
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
    <nav className={`navBar ${props.darkMode ? "navBar--theme--dark" : "navBar--theme--light"}`}>
      <Link to="/" className="navBar--logo--link">
        VinVas.
      </Link>
      <div className={`navBar--links ${isHamburgerOpen ? "navBar--links--open" : ""}`}>{navBarLinks}</div>
      <div className="navBar--toggle--darkMode" onClick={props.toggleDarkMode}>
        <i className={`fa-solid ${props.darkMode ? "fa-sun" : "fa-moon"}`} id="darkModeButton"></i>
      </div>
      <div className={`navBar--hamburger--container ${isHamburgerOpen ? "navBar--hamburger--open" : ""}`} onClick={handleNavBar}>
        <div className="navBar--hamburger--stick hamburger--stick1"></div>
        <div className="navBar--hamburger--stick hamburger--stick2"></div>
        <div className="navBar--hamburger--stick hamburger--stick3"></div>
      </div>
    </nav>
  );
}
