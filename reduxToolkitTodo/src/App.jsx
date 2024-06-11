import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todo'

function App() {
  //Provider added in main.jsx
  return (
    <>
      <h1>Learn about Redux Toolkit</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
