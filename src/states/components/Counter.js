import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  //increase
  const increase = () => {
    setCounter(counter + 1);
  };

  //decrease
  const decrease = () => {
    setCounter(counter - 1);
  };

  //reset
  const reset = () => {
    setCounter(0);
  };

  return (
    <>
      <h1>Counter</h1>
      <h3>{counter}</h3>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={reset}>reset</button>
    </>
  );
};
export default Counter;
