import { useState } from "react";

function Child({ sendData }) {
  // Local child state
  const [text, setText] = useState("");

  return (
    <div className="child">
      <input
        placeholder="Type here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={() => sendData(text)}>
        Send to Parent
      </button>
    </div>
  );
}

export default Child;



// function Child({ sendData }) {
//     // Function runs when button is clicked
//     const handleClick = () => {
//       // Sending data to parent
//       sendData("Hello from Child 👋");
//     };
  
//     return (
//       <div className="child">
//         <h3>Child</h3>
  
//         {/* Click → data goes to parent */}
//         <button onClick={handleClick}>
//           Send Data to Parent
//         </button>
//       </div>
//     );
//   }
  
//   export default Child;
  