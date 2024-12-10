import React from "react";

import './App.css'
import Counter from "./components/counter";

const App = () => {
  return (
    <>
      <h1 >Counter</h1>
      <div className="counter-wrapper">
        <Counter increment={1} label="Counter +1" />
        <Counter increment={2} label="Counter +2" />
      </div>
    </>

  );
};

export default App;
