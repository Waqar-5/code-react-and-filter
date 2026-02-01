import { useState } from "react";

function Counter() {
  // count → stores number value
  // setCount → updates the number
  const [count, setCount] = useState(0); // initial value = 0

  return (
    <div className="card">
      {/* Showing current count */}
      <h2>Count: {count}</h2>

      {/* Increase number */}
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      {/* Decrease number */}
      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>
    </div>
  );
}

export default Counter;
