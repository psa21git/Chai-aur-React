import { useState, useCallback, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  let [numAllowed, setnumAllowed] = useState(false)
  let [charAllowed, setcharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    console.log(str);

    for (let i = 1; i <= length; i++){
      let charIndex = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(charIndex)
    }

    setPassword(pass)
  },[length,numAllowed,charAllowed,setPassword])

  useEffect(()=>{
    passwordGenerator()
  },
  [length,numAllowed,charAllowed,passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            // ref={passwordRef}
        />
      <button
        // onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
      </div>
      <div className='flex text-sm gap-x-2' >
        <div className='flex item-center gap-x-1' >
          <input 
          type="range" 
          min={6}
          max={100}
          value={length}
          className='cursor-pointer' 
          onChange={(event)=>{setlength(event.target.value)}}
          />
          <label>length : {length}</label>
        </div>
        <div className='flex item-center gap-x-1' >
          <input 
          type="checkbox"
          defaultChecked = {numAllowed}
          id="numberInput"
          onChange={()=>{
            setnumAllowed((numAllowed) = !numAllowed)
          }}
          />
          <label htmlFor="numberInput" >Numbers</label>
        </div>
        <div className='flex item-center gap-x-1' >
        <input 
          type="checkbox"
          defaultChecked = {charAllowed}
          id="characterInput"
          onChange={()=>{
            setcharAllowed((charAllowed) = !charAllowed)
          }}
          />
          <label htmlFor="characterInput" >Characters</label>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
