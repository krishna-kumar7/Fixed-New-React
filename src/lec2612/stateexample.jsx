import "react";
import { useState } from "react"; // Add this line

const Counter = () => {
  // Declare a state variable called "count" and a function to update it
  const [count, setCount] = useState(0);

  // Function to handle the increment
  const increment = () => {
    setCount(count + 1);
  };

  // Function to handle the decrement
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;