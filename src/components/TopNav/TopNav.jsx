import React, { useEffect, useState } from "react";
import "./TopNav.scss";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import menuBurger from "../../assets/menuBurger.svg";

const TopNav = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isActive, setIsActive] = useState(false)

  const handleRezise = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  const toggleActive = () => {
    setIsActive(!isActive)
  }

  useEffect(() => {
    window.addEventListener("resize", handleRezise);
    handleRezise();
  });

  return (
    <header>
      {isMobile === true ? (
        <section className="mobNav">
          <div className="mobNav__navContainer">
            <div className="mobNav__logoContainer">
              <img className="mobNav__logo" src={logo} alt="CPA Logo" />
            </div>
            <div className="mobNav__titleContainer">
              <p className="mobNav__title">City Park Authority</p>
            </div>
            <div className="mobNav__burgerContainer">
              <img onClick={toggleActive}
                className="mobNav__burger"
                src={menuBurger}
                alt="burger icon"
              />
            </div>
          </div>
          <div className={`${isActive ? "mobNav__sidebar active" : "mobNav__sidebar"}`}>
            <ul className="mobNav__menuList">
              <li className="mobNav__menuItem">
                <Link className="topNav__link" to={"/"}>
                  Home
                </Link>
              </li>
              <li className="mobNav__menuItem">
                <Link className="topNav__link" to={"/contact"}>
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="mobNav__buttonContainer">
              <a
                className="mobNav__buttonLink"
                href="https://ppnotice.com/"
                target="_blank"
              >
                <button className="mobNav__payButton">PAY A NOTICE</button>
              </a>
            </div>
          </div>
        </section>
      ) : (
        // =========================================================================================================
        // =========================================================================================================
        // =========================================================================================================
        // =========================================================================================================
        // =========================================================================================================
        <section className="topNav">
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
        </section>
      )}
    </header>
  );
};

export default TopNav;
