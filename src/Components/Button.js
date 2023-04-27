import React from "react";
import "./button.css";

const Buttons = (props) => {
  return (
    <div className="buttons">
      <button onClick={() => props.onClick(1)}><span>WRX STI</span></button>
      <button onClick={() => props.onClick(2)}><span>Lancer Evo X</span></button>
      <button onClick={() => props.onClick(3)}><span>Lancer Evo IX</span></button>
    </div>
  );
};

export default Buttons;