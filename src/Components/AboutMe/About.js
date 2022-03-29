import React from 'react'
import './About.css'

export default function About() {
  return (
    <div className="information-container">
      <div className='about-container'>
        <p>Hello!</p>
        <p>My name is Fabian Villaseñor, a Front End Web Developer. I began coding when I found a local, FREE coding academy teaching web development using Angular.
          I had never coded before so I was intimidated at first, however once I started learning I was hooked! Since my completion of the bootcamp I have continued my coding journey by learning new things and creating projects, some of which you can find below!
          Some tools I have used to create these websites are React, Javascript, Angular, MySQL, REST APIs, jsonwebtoken, and Node.js
          {/* I create websites using React and Javascript, and have used other tools such as Angular, MySQL, REST APIs, and Node.js. */}
        </p>
      </div>
      <div className="below-container">
        <p>
          On this page you can find projects I've worked on and websites I've created.
        </p>
      </div>
    </div>
  )
}
