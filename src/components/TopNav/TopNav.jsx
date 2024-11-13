import React from "react";
import "./TopNav.scss";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <header className="topNav">
      <section className="topNav__logoContainer">
        <img
          className="topNav__logo"
          src={logo}
          alt="City Park Authority Logo"
        />
        <p className="topNav__title">City Park Authority</p>
        <span className="topNav__containerSlant"></span>
      </section>

      <section className="topNav__menuContainer">
        <ul className="topNav__menuList">
          <li className="topNav__menuItem">
            <Link className="topNav__link" to={"/"}>
              Home
            </Link>
          </li>
          <li className="topNav__menuItem">
            <Link className="topNav__link" to={"/contact"}>
              Contact Us
            </Link>
          </li>
          {/* <li className="topNav__menuItem">Placeholder</li> */}
        </ul>
      </section>
      <a
        className="topNav__buttonLink"
        href="https://ppnotice.com/"
        target="_blank"
      >
        <button className="topNav__payButton">PAY A NOTICE</button>
      </a>
    </header>
  );
};

export default TopNav;
