import React from 'react'
import './Navbar.css'
import Circle from '../Circle/Circle'

export default function Navbar() {
    return (
        <div className='navbar-container'>
            <div className="nav-circle">
                <div className="circle"></div>
                <div className="name">
                    <h1>Fabian Villase&#xF1;or</h1>
                </div>
                <div className="navbar-items-container">
                    <div className="navbar-items">Home</div>
                    <div className="navbar-items">About</div>
                    <div className="navbar-items">Projects</div>
                    <div className="navbar-items">LinkedIn</div>
                    <div className="navbar-items">Github</div>
                </div>
            </div>
        </div>
    )
}
