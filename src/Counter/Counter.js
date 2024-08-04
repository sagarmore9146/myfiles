import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const Decrement = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h3>This is Counter App...{count}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </>
  );
}
