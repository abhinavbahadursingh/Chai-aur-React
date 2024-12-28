import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter , setCounter] = useState(1)
  // let conunter = 15
const addValue = ()=>{
  // console.log("clickedd");
  if (counter>=20) {
    counter;
  }else{
    setCounter(counter+1)
  }
}
const removeValue = ()=>{
  if (counter<=0) {
  }else{
    setCounter(counter-1)
  }
}

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter} </h2>

      <button onClick={addValue}>Add Value</button>
      
      <br />
      <button onClick={removeValue}>Reduce Value</button>
      <p>counter : {counter}</p>
    </>
  )
}

export default App
