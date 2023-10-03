import React, { useEffect } from 'react'
import { useState} from 'react'
import "../Components/Hero.css"
import CountryCard from './CountryCard'
import { FaSearch } from "react-icons/fa";
import data from "../Components/data.json"


const Hero = () => {
  const [access, setAccess]  = useState(data);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (Array.isArray(access)){
      if (search === ''){
        setAccess(data);
      } else {
        const foundItems = access.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
        setAccess(foundItems);
      }
    }
 }, [search, data])

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

        <select>
          <option value="Filter by Region">Filter by Region</option>
          <option value={search} onChange={(e) => setSearch(e.target.value)}>Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

      <div className='CountryBody'>
      {Array.isArray(access) ? (
        access.map((items) => <CountryCard items={items} />)
      ) : (
        <p>Not an Array</p>
      )}
      </div>

    </>
  )
}

export default Hero
