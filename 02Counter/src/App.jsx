import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter]  = useState(15) // yahan useState k andar ese koi bhi ek value dena hai bas
  // useState hook ek variable ke upar kuch bhi change karne k liye use hota hai.. 
  // yahan variable counter hai aur function setCounter
  // useState ek array return karta hai.. yahan array me counter aur setCounter hai

  //let counter = 15

  const addValue = () => {
    //counter = counter + 1
    setCounter(counter+1)
    
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }
  
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button> 
      <br />
      <button
      onClick={removeValue}
      >remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
