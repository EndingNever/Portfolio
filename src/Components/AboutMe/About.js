import React from 'react'
import './About.css'

export default function About() {
  return (
    <div className="information-container">
      <div className='about-container'>
        <p>Hello!</p>
        <p>My name is Fabian Villaseñor, a Front End Web Developer. I began coding when I found a coding academy teaching web development using Angular in my hometown of Modesto, California.
          I had never coded before so I was intimidated at first, however once I started learning I was hooked! Since my completion of the bootcamp I have continued my coding journey by learning new things and creating projects, some of which you can find below!
          Some tools I have used to create these projects are React, Javascript, Angular, MySQL, REST APIs, and Node.js
        </p>
      </div>
      <div className="about-icons">
        <div className="icon"><img src={process.env.PUBLIC_URL + "/images/html5.svg"} alt="" /></div>
        <div className="icon"><img src={process.env.PUBLIC_URL + "/images/react-icon.png"} alt="" /></div>
        <div className="icon"><img src={process.env.PUBLIC_URL + "/images/css3.svg"} alt="" /></div>
      </div>
    </div>
  )
}
