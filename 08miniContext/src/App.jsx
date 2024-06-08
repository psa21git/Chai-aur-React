
import { useContext } from 'react'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'
import UserContext from './context/userContext'

function App() {

  return (
    <UserContextProvider>
      <h1>Chai aur PSA</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
