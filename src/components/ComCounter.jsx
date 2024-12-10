import React, { useState, useEffect } from "react";
import "../css/Counter.css";
import Button from "./button";

const ComCounter = ({ type, increment, label, min = 0, max = 10, interval = 1000 }) => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      if (type === "regular" && count < 20) {
        timer = setInterval(() => setCount((prev) => prev + increment), 1000);
      } else if (type === "cyclic") {
        timer = setInterval(() => {
          setCount((prev) => (prev < max ? prev + 1 : min));
        }, interval);
      }
    }
    return () => clearInterval(timer);
  }, [isRunning, count]);  

  const handleStart = () => {
    if (type === "regular" && count < 20) setIsRunning(true);
    else if (type === "cyclic") setIsRunning(true);
  };

  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setCount(type === "cyclic" ? min : 0);
    setIsRunning(false);
  };

  return (
    <div className="counter-container">
      <h3>{type === "regular" ? label : "Cyclic Counter"}</h3>
      <p>Count: {count}</p>
      <div className="counter-buttons">
        <Button onClick={handleStart} disabled={isRunning || count >= 20} text={"start"} />
        <Button onClick={handleStop} disabled={!isRunning || count >= 20} text={"stop"} />
        <Button onClick={handleReset} text={"reset"} />
      </div>
    </div>
  );
};

export default ComCounter;
