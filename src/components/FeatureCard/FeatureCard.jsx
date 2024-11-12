import React from "react";
import "./FeatureCard.scss";
import cam from "../../assets/camera.svg";

export const FeatureCard = (props) => {
  return (
    <section className="card">
      <div className="card__title">
        <p className="card__titleText">{props.title}</p>
        <p className="card__subtitle">{props.subtitle}</p>
      </div>
      <div className="card__content">
        <img className="card__svg" src={props.image} alt="camera svg" />
        <p className="card__contentText">
          {props.text}
        </p>
      </div>
    </section>
  );
};
