import React, { useState } from 'react'

const Navbar = ({ view, setView }) => {
    return (
        <nav className="navbar">
            <div className="container">
                <h3>Eric Simmons</h3>
                <a
                    onClick={() => setView('profile')}
                    className={`nav-link ${view === 'profile' ? 'active fw-bold' : ''}`}
                >
                    Profile
                </a>
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
            </div>
        </nav>




    )
}

export default Navbar