import React, { useState } from "react";
import "./ColorBox.scss";

const getRandomColor = () => {
  const colors = ["black", "yellow", "red", "blue", "pink"];
  return colors[Math.trunc(colors.length * Math.random())];
};

const ColorBox = () => {
  const [color, setColor] = useState(() => {
    return localStorage.getItem("box-color") ?? "pink";
  });

  const changeColor = () => {
    const colorRandom = getRandomColor();
    setColor(colorRandom);
    localStorage.setItem("box-color", colorRandom);
  };

  return (
    <div
      className="color-box"
      style={{
        backgroundColor: color
      }}
      onClick={changeColor}
    ></div>
  );
};

export default ColorBox;
