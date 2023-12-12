import React, { useState } from "react";

function Tempreture() {
  const [counter, setCounter] = useState(10);
  const [changeColor, setChangeColor] = useState("cold");

  const handleclick = () => {
    const newCounter = counter + 1;
    if (newCounter > 15) {
      setChangeColor("hot");
    } else if (newCounter === 30) {
      changeColor("");
    }
    setCounter(newCounter);
  };

  const handleChange = () => {
    const newCounter = counter - 1;
    if (newCounter < 15) {
      setChangeColor("cold");
    }
    setCounter(newCounter);
  };
  return (
    <div className="ctr">
      <button className={`btn ${changeColor}`}>{counter} °C</button>
      <div className="mbtn">
        <button className="btn2" onClick={handleclick}>
          +
        </button>
        <button className="btn2" onClick={handleChange}>
          -
        </button>
      </div>
      <p>GitHub.com: @SarsharMirwais</p>
    </div>
  );
}

export default Tempreture;
