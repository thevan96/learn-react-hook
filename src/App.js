import React, { useState } from "react";
import "./App.scss";

import Clock from "./components/Clock/Clock";

const App = () => {
  const [isShow, setIsShow] = useState(true);

  const handleOnClick = () => {
    setIsShow(!isShow);
  };

  return (
    <div className="app">
      <h1>Learn react hook</h1>
      {isShow && <Clock />}
      <button onClick={handleOnClick}> On click!</button>
    </div>
  );
};

export default App;
