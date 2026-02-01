import { useState } from "react";

function ObjectState() {
  // user → object state
  // setUser → updates object
  const [user, setUser] = useState({
    name: "Khan",
    age: 20
  });

  return (
    <div className="card">
      {/* Show object values */}
      <h2>Name: {user.name}</h2>
      <h2>Age: {user.age}</h2>

      {/* Update ONLY name */}
      <button
        onClick={() =>
          setUser(prev => ({
            ...prev,       // keep old values
            name: "Ali"    // change only name
          }))
        }
      >
        Change Name
      </button>
    </div>
  );
}

export default ObjectState;
