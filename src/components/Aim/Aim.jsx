import React from "react";
import "./Aim.scss";
import road from "../../assets/road.svg"
import parking from "../../assets/parking.svg"

const Aim = () => {
  return (
    <main className="aim">
      <section className="aim__container">
        <div className="aim__div">
          <p className="aim__title">Redefining Parking for a Modern World</p>
          <img className="aim__road" src={parking} alt="parking svg" />
        </div>
        <div className="aim__div">
          <p className="aim__text">At City Park Authority, our mission is to redefine parking by leveraging innovative License Plate Recognition technology to create seamless, efficient, and secure experiences. We strive to make parking stress-free, user-friendly, and environmentally responsible, reducing congestion and operational costs for our clients while enhancing convenience for drivers. Our commitment to cutting-edge technology and customer satisfaction drives us to deliver exceptional service that sets new standards in the parking industry.</p>
        </div>
      </section>
    </main>
  );
};

export default Aim;
