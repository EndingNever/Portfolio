import React from 'react'
import ProjectCard from '../Project-card/ProjectCard'
import './Projects.css'

export default function Project() {

  const projectData=[
    {
      image: "/images/Screenshot-dev.png",
      information:`Website built for Data Analyst, displaying their own projects and resume. Built in Angular, the website is a single page application using conditional rendering in order to display the current route.`,
    },
    {
      image:"/images/html.jpg",
      information: "TEst html jpg"
    },
  ]
  
  
  return (
    <div className='portfolio-container'>
      <h1>Portfolio</h1>
      <div className="portfolio-project">
        <ProjectCard projectData={projectData}/>
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
