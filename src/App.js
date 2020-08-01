import React from "react";
import "./App.scss";

import ColorBox from './components/ColorBox/ColorBox';
import useMagicBox from './hooks/useMagicColor';

const App = () => {
  const color = useMagicBox();

  return (
    <div className="app">
      <ColorBox {...color} />
    </div>
  );
};

export default App;
