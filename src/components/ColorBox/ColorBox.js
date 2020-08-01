import React from "react";
import "./ColorBox.scss";

const ColorBox = data => {
  const { color, name } = data;
  return (
    <div
      className="color-box"
      style={{
        backgroundColor: color
      }}
    >
      <label>{name}</label>
    </div>
  );
};

export default ColorBox;
