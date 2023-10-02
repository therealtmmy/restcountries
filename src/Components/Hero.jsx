import React from 'react'
import { useState} from 'react'
import "../Components/Hero.css"
import CountryCard from './CountryCard'
import { FaSearch } from "react-icons/fa";
import data from "../Components/data.json"


const Hero = () => {
  const [access, setAccess]  = useState(data);

  // useEffect(() => {
  //   async function getApi() {
  //     const res = await fetch("https://restcountries.com/v3.1/all")
  //     const data = await res.json()
  //     setAccess(data)
  //   }

  //  getApi()
  // }, [])

  // There is an issue with the provided api. Hence the need to go with the provided  json file came on board.

  return (
    <>
      <div className='SearchField'>
        <div className='SearchBar'>
       <FaSearch className='SearchIcon'/>
        <input 
        type ="text" 
        placeholder ='Search for country...'
        value =""
        onChange =""
        />
        </div>

        <select>
          <option value="Filter by Region">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

      <div className='CountryBody'>
      {Array.isArray(access) ? (
          access.map((find) => (<CountryCard find={find}/>))
        ) : (
          <p>Loading or no data available</p>
        )}
      </div>
    </>
  )
}

export default Hero
