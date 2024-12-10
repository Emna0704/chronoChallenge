import React, { useState, useEffect } from "react";
import "../css/Counter.css";
import Button from "./button";

const Counter = ({ increment, label }) => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && count < 20) {
      timer = setInterval(() => setCount((prev) => prev + increment), 1000);
    }
    if (count >= 20) {
      setIsRunning(false);
    }
    return () => clearInterval(timer);
  }, [isRunning, count, increment]);

  const handleStart = () => {
    if (count < 20) 
      setIsRunning(true);
      
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const resetCounter = () => {
    setCount(0);
    setIsRunning(false);
  };

  return (
    <>
    <div className="counter-container">
      <h3>{label}</h3>
      <p>Count: {count}</p>
      <div className="counter-buttons">
        <Button onClick={handleStart} disabled={isRunning || count >= 20} text={"start"}/>
        <Button onClick={handleStop} disabled={!isRunning} text={"Stop"}/>
        <Button onClick={resetCounter} text={"Reset"}/>
      </div>
    </div>
    </>
  );
};

export default Counter;
