import { useState } from "react";

function Toggle() {
  // isOn → true or false
  // setIsOn → change true/false
  const [isOn, setIsOn] = useState(false); // start as OFF

  return (
    <div className="card">
      {/* Text changes based on state */}
      <h2>Status: {isOn ? "ON ✅" : "OFF ❌"}</h2>

      {/* Toggle button */}
      <button onClick={() => setIsOn(prev => !prev)}>
        Toggle
      </button>
    </div>
  );
}

export default Toggle;
