import React from 'react'
import {Outlet} from "react-router-dom"
import ResponsiveAppBar from './Navbar'
const Layout = () => {
  return (
    <div>
        <ResponsiveAppBar/>
    <Outlet/>
    </div>
  )
}

export default Layout