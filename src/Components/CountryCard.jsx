import React from 'react'
import "../Components/CountryCard.css"

const CountryCard = ({items}) => {
  
  return (
    <>
  <div className='CountryBody'>
    <div className='CountryCard'>
        <img 
        src ={items.flags.png}
        alt = "Country Flag" 
        />

        <div className='CountryDetails'>
            <h3>{items.name}</h3>
            <p>Population: <span>{items.population}</span></p>
            <p>Region: <span>{items.region}</span></p>
            <p>Capital: <span>{items.capital}</span></p>
        </div>
    </div>
  </div>
    </>
  )
}

export default CountryCard
