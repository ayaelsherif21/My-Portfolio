import React from 'react'
import './Hero.css'
export default function Hero() {
  return (
    <section className='hero flex'>
      <div className="left-box">
        <div className="image flex">
          <img src="./Aya.png" alt="" />
          <span className="icon-verified"></span>

        </div>
      </div>
      <div className="right-box animation">animation</div>
    </section>
  )
}
