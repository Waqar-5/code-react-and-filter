import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import State from "./components/state"
import "./Style.css"
import Counter from './components/Counter'
import Toggle from './components/Toggle'
import InputText from './components/InputText'
import ObjectState from './components/ObjectState'
import Child from "./components/Child";


function App() {
  // const [count, setCount] = useState(0)

  // const [on, setOn] = useState(false)

  // const [obj, setObj] = useState({name:"Khan"})
  // const [obj, setObj] = useState({ name: "" })

  
  // message → data stored in parent
  // setMessage → function to update parent data
  const [message, setMessage] = useState("No data yet");

  // This function will receive data from child
  const getDataFromChild = (childData) => {
    // Update parent state with data coming from child
    setMessage(childData);
  };

  return (
    <>
      
      {/* <button onClick={() => setCount(count + 1)}>{count}</button> */}

      {/* <button onClick={() => setOn(!on)}>{on ? 'On' : "Off"}</button> */}
      {/* or  */}
      {/* <input
  type="checkbox"
  checked={on}
  onChange={() => setOn(prev => !prev)}
/> */}


      {/* <button onClick={() => setObj({name:"Ali"})}>{obj.name}</button> */}
      {/* or  */}
      {/* <button onClick={() => setObj(prev => ({ ...prev, name: "Ali" }))}>
      
  {obj.name}
</button> */}

{/* 
<button
  onClick={() =>
    setObj(prev => ({
      name: prev.name === "Khan" ? "Ali" : "Khan"
    }))
  }
>
  {obj.name}
</button> */}


<State />
<div className="app">
      <h1>useState Basics 🔥</h1>

      <Counter />
      <Toggle />
      <InputText />
      <ObjectState />
    </div>

    <div className="app">
      {/* Show data received from child */}
      <h1>Parent</h1>
      <h2>Message: {message}</h2>

      {/* Send function to child as prop */}
      <Child sendData={getDataFromChild} />
    </div>


    </>
  )
}

export default App
