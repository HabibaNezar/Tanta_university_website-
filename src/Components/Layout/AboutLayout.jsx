import React from 'react'
import AboutNavbar from '../Navbar/AboutNavbar'
import { Outlet } from 'react-router-dom'
import About from '../About/About'

export default function AboutLayout() {
  return (
    <>
        <AboutNavbar/>
        <Outlet></Outlet>
        <About/>
    </>
  )
}
