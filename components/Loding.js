import React from 'react'
import lodingImage from '../resources/lodingimage.png'
import "../components/loding.css"


function Loding() {
  return (
    <div className='Loding'>
      <img src={lodingImage} alt="lodingimage" />
      <p className='medium'>Good things come to those who wait...</p>
    </div>
  )
}

export default Loding
