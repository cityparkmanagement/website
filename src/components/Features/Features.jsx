import React from "react";
import "./Features.scss";
import { FeatureCard } from "../FeatureCard/FeatureCard";
import camera from "../../assets/camera.svg";
import car from "../../assets/car.svg";
import money from "../../assets/money.svg";
import piggy from "../../assets/piggy.svg"


const Features = () => {
  return (
    <main className="features">
      <FeatureCard
        title={"Instant Entry & Exit"}
        text={
          "Allow vehicles to enter and exit without the need for traditional barriers or access cards, making your parking experience smoother than ever."
        }
        subtitle={"Say goodbye to bottlenecks and delays."}
        image={car}
      />
      <FeatureCard
        title={"Enhanced Security"}
        text={
          "Our LPR technology logs vehicle entries and exits in real-time, ensuring a tamper-proof record and adding a layer of security unmatched by traditional parking methods."
        }
        subtitle={"Peace of mind, guaranteed."}
        image={camera}
      />
      <FeatureCard
        title={"Cost-Effective"}
        text={
          "Our gateless system is designed for easy integration and operation, reducing maintenance costs and eliminating the need for manual oversight, saving you time and money."
        }
        subtitle={"Technology without the complexity."}
        image={piggy}
      />
    </main>
  );
};

export default Features;
