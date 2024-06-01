import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-2xl bg-orange-600 text-black'>
        Currency Converter with PSA
      </h1>
    </>
  )
}

export default App
