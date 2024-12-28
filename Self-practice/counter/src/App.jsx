import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const addCounter = ()=> {
    if (count >= 20){
      return count;
    }else{
      setCount(count+1)
    }
  }
  const reduceCounter = ()=> {
    if(count <= 0){
      return 0
    }else {
      setCount(count-1)
    }
  }
  return (

    <>
      <h1>Abhinav Bahadur Singh</h1>
      <div className="card">
        <button>Counter is {count}</button>
        <br />
        <br />
        <button onClick={addCounter}>Add Counter</button>
        <br />
        <br />
        <button onClick={(reduceCounter)}>Reduce Counter</button>
      </div>
    </>
  )
}

export default App
