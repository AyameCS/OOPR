import React from "react";
import "./card.css";

const Cards = (props) => {
  const { title, image, description } = props.data;

  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-text">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default Cards;