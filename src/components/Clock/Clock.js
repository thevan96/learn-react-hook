import React from "react";
import useClock from '../../hooks/useClock';

const Clock = () => {
  const {strClock} = useClock();
  return <div className="clock">{strClock}</div>;
};

export default Clock;
