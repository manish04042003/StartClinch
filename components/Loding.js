import React from 'react'
import lodingImage from '../resources/lodingimage.png'
import "../components/loding.css"


function Loding() {
  return (
    <div className='Loding'>
      <img src={lodingImage} alt="lodingimage" />
      <h3>Good things come to those who wait...</h3>
    </div>
  )
}

export default Loding
