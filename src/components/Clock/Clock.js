import React, { useState, useEffect } from "react";

const formatTime = time => {
  if (!time) return "";
  const hour = `0${time.getHours()}`.slice(-2);
  const minute = `0${time.getMinutes()}`.slice(-2);
  const second = `0${time.getSeconds()}`.slice(-2);
  return `${hour}:${minute}:${second}`;
};

const Clock = () => {
  const [strClock, setStrClock] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const newDate = new Date();
      setStrClock(formatTime(newDate));
    }, 1000);

    return () => {
      clearInterval(interval);
    };

  }, []);

  return <div className="clock">{strClock}</div>;
};

export default Clock;
