import React, { useEffect } from 'react'
import { useState} from 'react'
import "../Components/Hero.css"
import CountryCard from './CountryCard'
import { FaSearch } from "react-icons/fa";
import data from "../Components/data.json"


const Hero = () => {
  const [access, setAccess]  = useState(data);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

 useEffect(() => {
  // Create a copy of the original data to filter
  let filteredData = [...data];

  // Apply the search filter
  if (search) {
    filteredData = filteredData.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  // Apply the region filter
  if (region) {
    filteredData = filteredData.filter(value => value.region.toLowerCase().includes(region.toLowerCase()));
  }

  setAccess(filteredData);
}, [search, region]);


  return (
    <>
      <div className='SearchField'>
        <div className='SearchBar'>
       <FaSearch className='SearchIcon'/>
        <input 
        type ="text" 
        placeholder ='Search for country...'
        value = {search}
        onChange = {(e) => setSearch(e.target.value)}
        />
        </div>

        <select value={region} onChange={(e) => setRegion(e.target.value)}>
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

      <div className='CountryBody'>
      {Array.isArray(access) ? (
        access.map((items, index) => <CountryCard items={items} key={index} />)
      ) : (
        <p>Loading</p>
      )}
      </div>

    </>
  )
}

export default Hero
