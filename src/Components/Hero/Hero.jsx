import React from 'react'
import './Hero.css';
export default function Hero() {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>New Arraivals </h2>
        <div>
            <div className="hero-hand-icon">
                <p>New</p>
                <img src=''/>
            </div>
            <p>Collections</p>
            <p>For Everyone</p>
        </div>
        <div className="hero-latest-btn">
            <div>  Latest Collection  </div>
            <img src=''/>
        </div>
      </div>
      <div className="hero-right">
        <img src='./fashiongirl.png'/>
      </div>
    </div>
  )
}
