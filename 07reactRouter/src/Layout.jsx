import React from 'react'
import {Header,Footer} from './components/index'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    {/* outlet is like a place holder for different components whicha are passed after Layout */}
    <Footer/>
    </>
  )
}

export default Layout