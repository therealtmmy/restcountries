import React from 'react'
import "../Components/NavBar.css"
import { FaMoon } from "react-icons/fa";

const NavBar = () => {
    const darkMode = () => {
      console.log("Light")
    }

  return (
    <>
      <div className='NavBar'>
        <p className='InTheWorld'>Where in the world?</p>

        <div className='darkMode'>
        <FaMoon /><button onClick={darkMode}>Dark Mode</button>
        </div>
      </div>
    </>
  )
}

export default NavBar
