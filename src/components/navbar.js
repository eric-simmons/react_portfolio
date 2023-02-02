import React, { useState } from 'react'

const Navbar = ({ view, setView }) => {
    return (
        <nav className="navbar">
            
            <img
                onClick={() => setView('profile')}
                id="logo"
                src="../images/logo1 copy.png"
                alt="blue purple geomtric logo"
                width="40px" />
                
            
            {/* lightmode?darkmode?
            <img
                id="lightswitch"
                src="../images/lightmode.png"
                alt="gradient circle"
                width="30px" /> */}
            <a
                onClick={() => setView('projects')}
                className={`nav-link ${view === 'projects' ? 'active fw-bold' : ''}`}>
                Projects
            </a>
            <a
                onClick={() => setView('resume')}
                className={`nav-link ${view === 'resume' ? 'active fw-bold' : ''}`}>
                Resume
            </a>
            <a
                onClick={() => setView('contact')}
                className={`nav-link ${view === 'contact' ? 'active fw-bold' : ''}`}>
                Contact
            </a>

            <a href="https://github.com/eric-simmons">Github</a>
            <a href="https://www.linkedin.com/in/eric-tomlinson-simmons/">LinkedIn</a>
            <div className="container">

                <a

                    className={`nav-link ${view === 'profile' ? 'active fw-bold' : ''}`}
                >

                </a>


            </div>
        </nav>




    )
}

export default Navbar