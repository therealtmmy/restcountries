import React from 'react'
import "../Components/CountryCard.css"

const CountryCard = (find) => {
  return (
    <>
  <div className='CountryBody'>
    <div className='CountryCard'>
        <img 
        src = "https://media.istockphoto.com/id/652740802/vector/nigeria.jpg?s=612x612&w=0&k=20&c=CzqO6nCnCM6KXJp-nZWBV3oxRI5963lwdnQ5TT4TN7Q=" 
        alt = "Country Flag" 
        onClick = ""
        />

        <div className='CountryDetails'>
            <h3>Germany</h3>
            <p>Population: <span>81,770,900</span></p>
            <p>Region: <span>Europe</span></p>
            <p>Capital: <span>Berlin</span></p>
        </div>
    </div>
  </div>
    </>
  )
}

export default CountryCard
