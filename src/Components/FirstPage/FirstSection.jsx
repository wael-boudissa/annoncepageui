/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import img from '../../Images/backgroundimg.jpg'
import '../CSS/firstsection.css'

const FirstSection = () => {
  return (
    <section>
      <header>
        <img src={img} />
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact Us</li>
          <button>Join Us</button>
        </ul>
      </header>
      <div className="First_section">
        <div className="WelcomingText">
          <h1>
            The whole <span>World</span> in one Website
          </h1>

          <div className="learn_more">
            <p>learn more </p>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
        <div className="img_background">
          <img src={img} />
          <div className="arrow_bottom">
            <i class="fa-solid fa-arrow-down"></i>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FirstSection
