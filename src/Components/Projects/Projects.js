import React from 'react'
import ProjectCard from '../Project-card/ProjectCard'
import './Projects.css'

export default function Project() {
  return (
    <div className='portfolio-container'>
      <h1>Portfolio</h1>
      <div className="portfolio-project">
        <ProjectCard />
        {/* <h2>Data Analyst Website</h2>
        <div className="project-image"></div> */}
      </div>
      <div className="portfolio-project">
        <h2>Project</h2>
      </div>
      <div className="portfolio-project">
        <h2>Project</h2>
      </div>
      {/* <div className="projects"><iframe scrolling='no' src="https://devinfonseca.com/"></iframe></div>
        <div className="projects"><iframe src="https://endingnever.github.io/AngularVehicleShowcase/"></iframe></div>
        <div className="projects">Project</div> */}
    </div>
  )
}
