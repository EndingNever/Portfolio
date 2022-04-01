import React from 'react'
import { Link } from 'react-router-dom'
import './ProjectCard.css'

export default function ProjectCard(props) {
    const projectData = props.projectData;
    
    return (
        <div className='project'>
            <div className="project-header">
                <h2>Website</h2>
            </div>
            <div className="project-card-container">
                <div className="project-card-image">
                    <img src={projectData[0].image} alt="" />
                </div>
                <div className="project-card-text">
                    <p>Website built for Data Analyst, displaying their own projects and resume. Built in Angular, the website is a single page application using conditional rendering in order to display the current route. Check it out at <a href="https://devinfonseca.com/" target={'_blank'} >DevinFonseca.com</a>  </p>
                </div>
            </div>
        </div>
    )
}
