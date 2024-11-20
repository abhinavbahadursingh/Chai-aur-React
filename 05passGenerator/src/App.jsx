import { useRef } from 'react'
import { useEffect } from 'react'
import { useState , useCallback } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [num, setNum] = useState(false)
  const [char, setChar] = useState(false)
  const [pass, setPass] = useState('')
  
  const passRef = useRef(null)
 
  const copyToClipBoard = useCallback(()=>{
    passRef.current?.select()
    passRef.current?.setSelectionRange(0,101)
    window.navigator.clipboard.writeText(pass)
  } , [pass]) 

  const passGenerator = useCallback(()=>{
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if (num) str+= '0123456789'
    if (char) str+= '!@#$%^&*+_-={}[]~`'

    for (let i = 1; i <= length; i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
    }
    setPass(pass)


  } , [length , num , char , setPass])
  useEffect(()=>{
    passGenerator()
  } , [length , num , char , passGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8  text-orange-500 bg-gray-700 text-center text-xl my-8'>Password Generator
        <div className="flex shadow rounded-lg overflow-hidden mb-4 mt-5">
          <input type="text"
          value={pass} 
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passRef}
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={copyToClipBoard}>copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1"> 
            <input type="range" 
            min={8}
            max={100}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1"> 
            <input type="checkbox"
            defaultChecked = {num}
            id='numIP'
            onChange={(e)=>{setNum((prev) =>!prev)}}
            />
            <label>Number</label>
          </div>
          <div className="flex items-center gap-x-1"> 
            <input type="checkbox"
            defaultChecked = {char}
            id='numIP'
            onChange={(e)=>{setChar((prev) =>!prev)}}
            />
            <label>Char</label>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
