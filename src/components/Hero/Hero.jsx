import React from "react";
import "./Hero.scss";
import lot from "../../assets/parkingLot1.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__bgDim">
        <div className="hero__heroContainer">
          <section className="hero__textSection">
            <p className="hero__mainText">
              Seamless Parking Solutions with Advanced License Plate
              Recognition.
            </p>
            <p className="hero__text">
              Revolutionize your parking experience with automated, gateless
              access that ensures efficiency, security, and unparalleled
              convenience.
            </p>
          </section>
          <aside className="hero__lotImgContainer">
            {/* <img className="hero__lotImg" src={lot} alt="Parking Lot Image" /> */}
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Hero;
