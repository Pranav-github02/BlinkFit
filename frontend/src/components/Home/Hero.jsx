import React from 'react'
import hero1 from './media/hero.mp4'
import hero2 from './media/hero.webm'
import './Hero.css'

const Hero = () => {
    return (
        <div className='Home_hero'>
            <div className='video'>
                <video playsInline autoPlay id="heroVideo" loop muted poster="">
                    <source src={hero1} type="video/mp4" />
                    <source src={hero2} type="video/webm" />
                </video>
            </div>
            <p className='intro text-white'>Unleash the<br></br> <b>best</b> version<br></br>of <b>you</b></p>
        </div>
    )
}

export default Hero