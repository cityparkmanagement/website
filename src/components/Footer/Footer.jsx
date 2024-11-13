import React from "react";
import "./Footer.scss";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer__container">
        <img className="footer__logo" src={logo} alt="CPA Logo" />
        <div className="footer__nav">
          <p className="footer__subtitle">Navigation</p>
          <ul className="footer__list">
            <li className="footer__listItem">
              <Link className="footer__link" to={"/"}>
                Home
              </Link>
            </li>
            <li className="footer__listItem">
              <Link className="footer__link" to={"/contact"}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer__nav">
          <p className="footer__subtitle">Actions</p>
          <ul className="footer__list">
            <li className="footer__listItem">
              <a
                className="footer__link"
                href="https://ppnotice.com/"
                target="_blank"
              >
                Pay a Notice
              </a>
            </li>
            <li className="footer__listItem">
              {" "}
              <Link className="footer__link" to={"/dispute"}>
                Notice Dispute
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
