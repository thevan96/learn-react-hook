import { useState, useEffect, useRef } from "react";

const getRandomColor = currentColor => {
  const colors = ["black", "yellow", "red", "blue", "pink"];
  const indexColor = colors.indexOf(currentColor);

  let indexRandom;
  do {
    indexRandom = Math.trunc(colors.length * Math.random());
  } while (indexColor === indexRandom);

  return colors[indexRandom];
};

const useMagicColor = () => {
  const initColor = "transparent";
  const [color, setColor] = useState(() => initColor);
  const colorTemp = useRef(color);

  useEffect(() => {
    const colorInterval = setInterval(() => {
      const newColor = getRandomColor(colorTemp.current);
      setColor(newColor);
      colorTemp.current = newColor;
    }, 500);

    return () => {
      clearInterval(colorInterval);
    };
  }, []);

  return { color };
};

export default useMagicColor;
