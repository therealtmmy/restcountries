import React from 'react'
import "../Components/CountryCard.css"

const CountryCard = ({find}) => {
  
  return (
    <>
  <div className='CountryBody'>
    <div className='CountryCard'>
        <img 
        src ={find.flags.svg}
        alt = "Country Flag" 
        onClick = ""
        />

        <div className='CountryDetails'>
            <h3>{find.name}</h3>
            <p>Population: <span>{find.population}</span></p>
            <p>Region: <span>{find.region}</span></p>
            <p>Capital: <span>{find.capital}</span></p>
        </div>
    </div>
  </div>
    </>
  )
}

export default CountryCard
