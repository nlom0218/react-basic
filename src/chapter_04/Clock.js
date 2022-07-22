import React from "react";
import { useEffect, useState } from "react";

const Clock = () => {
  const [clock, setClock] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const updateClock = setInterval(() => {
      setClock(new Date().toLocaleTimeString());
    }, [1000]);
    return () => clearInterval(updateClock);
  }, []);

  return (
    <div>
      <h1>Hello, React!</h1>
      <div>현재 시간: {clock}</div>
    </div>
  );
};

export default Clock;
