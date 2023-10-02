import React from 'react'
import "../Components/NavBar.css"
import { FaMoon } from "react-icons/fa";

const NavBar = () => {
  return (
    <>
      <div className='NavBar'>
        <p className='InTheWorld'>Where in the world?</p>

        <div className='darkMode'>
        <FaMoon />
        <p>Dark Mode</p>
        </div>
      </div>
    </>
  )
}

export default NavBar
