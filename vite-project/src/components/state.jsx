import { useState } from "react";
import "./State.css";

export default function App() {
  // useState creates a state variable and a function to update it
  // name → current state value
  // setName → function to change the state
  const [name, setName] = useState("Khan");

  // Function that runs when button is clicked
  const handleClick = () => {
    // Updating state
    // React re-renders the UI automatically after this
    setName(prevName => (prevName === "Khan" ? "Ali" : "Khan"));
  };

  return (
    <div className="container">
      <h1>Hello, {name} 👋</h1>

      {/* Button click changes state */}
      <button onClick={handleClick}>
        Change Name
      </button>
    </div>
  );
}
