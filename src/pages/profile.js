

import React, { useState, useEffect } from 'react'


const ProfilePage = () => {

    useEffect(() => {
        createButtons()
    }, [])

    
    const createButtons = () => {
        for (let i = 0; i < 100; i++) {
            <button>
                "hey"
            </button>
        }
    }

    return (
        <div className='container'>
            <h1>Eric Simmons</h1>
            {createButtons}

        </div>
    )
}

export default ProfilePage