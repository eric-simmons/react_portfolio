import React, { useState } from 'react'
import resume from "../assets/EricSimmonsResume_2023.png"

function ResumePage() {
  return (
    <div className='resume'>

      <center>
        <img src={resume} width="600"></img>
        <br />
        <br />
        <a href="https://drive.google.com/file/d/1LX4VjgVvw2VgeqXkN5tL4OWmBK80USze/view?usp=sharing">Download Resume</a>
      </center>

    </div>
  )
}

export default ResumePage