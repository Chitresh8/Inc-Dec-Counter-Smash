import React, { Fragment, useState } from "react";
import "./Counter.css";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increaseClickHandler = () => {
    setCounter(counter + 1);
  };

  const decreaseClickHandler = () => {
    setCounter(counter - 1);
  };

  return (
    <Fragment>
      <header>
        <h1>⬆️ Inc-Dec ⬇️ Counter Smash</h1>
      </header>
      <div className="content">
        <button
          className="increase"
          onClick={increaseClickHandler}
        >
          Increase (+ Value)
        </button>
        <h1>{counter}</h1>
        <button
          className="decrease"
          onClick={decreaseClickHandler}
        >
          Decrease (- Value)
        </button>
      </div>
      <footer>
        <h5>All Rights Reserved..!®️</h5>
      </footer>
    </Fragment>
  );
};
