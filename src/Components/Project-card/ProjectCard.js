import React from 'react'
import { Link } from 'react-router-dom'
import './ProjectCard.css'

export default function ProjectCard(props) {
    const projectData = props.projectData;
    console.log(projectData[0].image)
    return (
        <div className='project'>
            {projectData.map((project)=> (
                <>
            <div className="project-header">
                <h2 key={project.id}>{project.title}</h2>
            </div>
            <div className="project-card-container">
                <div className="project-card-image">
                    <img className={`img-project-${project.id}`} src={process.env.PUBLIC_URL + project.image} alt="" />
                </div>
                <div className="project-card-text">
                    <p>{project.information}</p>
                    <a href={project.link} target="_blank">{project.linkText}</a>
                    {/* <p>Website built for Data Analyst, displaying their own projects and resume. Built in Angular, the website is a single page application using conditional rendering in order to display the current route. Check it out at <a href="https://devinfonseca.com/" target={'_blank'} >DevinFonseca.com</a>  </p> */}
                </div>
            </div>
                </>
            ))}
        </div>
    )
}
