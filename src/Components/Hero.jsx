import React from 'react'
import { useState, useEffect } from 'react'
import "../Components/Hero.css"
import CountryCard from './CountryCard'
import { FaSearch } from "react-icons/fa";

const restApi = "https://restcountries.com/v3.1/all"

const Hero = () => {
  const [search, setSearch]  = useState([]);

  const rest = async () => {
    const response = await fetch(`${restApi}`)
    const data = await response.json();
    setSearch(data)
  }

  useEffect(() => {
    rest()
  }, [])

  return (
    <>
    <div className='Hero'>
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

      <div>
        <CountryCard find={search}/>
      </div>
    </div>
    </>
  )
}

export default Hero
