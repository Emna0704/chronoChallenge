import React from "react";
import Counter from "./components/counter";

import './App.css'
import CyclicCounter from "./components/cycliqueCounter";

const App = () => {
  return (
    <>
    <div className="app-container">
      <h1> Counter</h1>
      <div className="counter-wrapper">
        <Counter increment={1} label="Counter +1" />
        <Counter increment={2} label="Counter +2" />
        <CyclicCounter min={0} max={20} interval={1000} />
      </div>
     
    </div>
    </>
  )
};

export default App;
