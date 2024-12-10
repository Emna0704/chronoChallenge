import React, { useState, useEffect } from "react";
import "../css/Counter.css";
import Button from "./button";

const CyclicCounter = ({ min = min, max = max, interval = interval }) => {
  const [count, setCount] = useState(min);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setCount((prev) => (prev < max ? prev + 1 : min));
      }, interval);
    }
    return () => clearInterval(timer);
  }, [isRunning, max, min, interval]);

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setCount(min);
    setIsRunning(false);
  };

  return (
    <>
    <div className="counter-container">
      <h3>Cyclic Counter</h3>
      <p>Count: {count}</p>
      <div className="counter-buttons">
        <Button onClick={handleStart} disabled={isRunning} text={"start"}/> 
        
        <Button onClick={handleStop} disabled={!isRunning} text={"stop"} />
          
        <Button onClick={handleReset} text={"reset"} />
          
      </div>
    </div>
    </>
  );
};

export default CyclicCounter;
