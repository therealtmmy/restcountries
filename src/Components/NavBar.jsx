import React from 'react'
import "../Components/NavBar.css"
import { useState } from 'react';
import { FaMoon, FaRegLightbulb } from "react-icons/fa";

const NavBar = () => {
    const [showOn, setShowOn] = useState(false)

    const toggleDarkMode = () => {
      setShowOn(!showOn);
      if (showOn) {
        console.log('Switching to Light Mode');
      } else {
        console.log('Switching to Dark Mode');
      }
    };

  return (
    <>
      <div className='NavBar'>
        <p className='InTheWorld'>Where in the world?</p>
      <div className='darkMode'>
        {showOn ? (
          <>
            <FaRegLightbulb />
            <button onClick={toggleDarkMode}>Light Mode</button>
          </>
        ) : (
          <>
            <FaMoon />
            <button onClick={toggleDarkMode}>Dark Mode</button>
          </>
        )}
      </div>
      </div>
    </>
  )
}

export default NavBar
