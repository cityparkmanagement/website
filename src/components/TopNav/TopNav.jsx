import React from "react";
import "./TopNav.scss";
import logo from "../../assets/logo.png";

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
          <li className="topNav__menuItem">Home</li>
          <li className="topNav__menuItem">Contact Us</li>
          {/* <li className="topNav__menuItem">Placeholder</li> */}
        </ul>
      </section>

      <button className="topNav__payButton">PAY A NOTICE</button>
    </header>
  );
};

export default TopNav;
