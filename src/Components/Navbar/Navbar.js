import React from 'react'
import './Navbar.css'
import Circle from '../Circle/Circle'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='navbar-container'>
            <div className="nav-circle">
                <div className="circle"></div>
                <div className="name">
                    <h1>Fabian Villaseñor</h1>
                </div>
                <div className="navbar-items-container">
                    <div className="navbar-items"><Link to={'/'}>Home</Link></div>
                    <div className="navbar-items">About</div>
                    <div className="navbar-items">Projects</div>
                    <div className="navbar-items"><Link to={{ pathname: "https://www.linkedin.com/in/fabianvillasenor/" }} target="_blank" >LinkedIn</Link></div>
                    <div className="navbar-items"><Link to={{ pathname: "https://github.com/EndingNever" }} target="_blank" >Github</Link></div>
                </div>
            </div>
        </div>
    )
}
