import { useState } from "react";

function InputText() {
  // text → stores input value
  // setText → updates text
  const [text, setText] = useState("");

  return (
    <div className="card">
      {/* Input field */}
      <input
        type="text"
        placeholder="Type your name..."
        value={text} // input value comes from state
        onChange={(e) => setText(e.target.value)} // update state
      />

      {/* Display typed text */}
      <h2>You typed: {text}</h2>
    </div>
  );
}

export default InputText;
