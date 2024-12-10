import React from "react";


import './App.css'
import ComCounter from "./components/ComCounter";


const App = () => {
  return (
    <>
      <div className="app-container">
        <h1>Counter</h1>
        <div className="counter-wrapper">
         
          <ComCounter type="regular" increment={1} label="Counter +1" />
        
          <ComCounter type="regular" increment={2} label="Counter +2" />

          <ComCounter type="cyclic" min={0} max={20} interval={1000} />
        </div>
      </div>
    </>
  );
};

export default App