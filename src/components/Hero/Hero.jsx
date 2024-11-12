import React from 'react'
import "./Hero.scss"
import lot from "../../assets/parkingLot1.jpg"

const Hero = () => {
  return (
    <section className='hero'>
      <section className='hero__textSection'>
        <p className='hero__mainText'>Modern Gateless Parking Solution</p>
        <p className='hero__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </section>
      <aside className='hero__lotImgContainer'>
        <img className='hero__lotImg' src={lot} alt="Parking Lot Image" />
      </aside>
    </section>
  )
}

export default Hero