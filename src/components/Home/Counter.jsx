import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

function Counter(props) {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  };

  return (
    <div className="container-counter">
      <div className="buttonContainer-counter">
        <FaPlus onClick={handleIncrement} />
        <p className="counter">{count}</p>
        <FaMinus onClick={handleDecrement} />
      </div>
    </div>
  );
}

export default Counter;
