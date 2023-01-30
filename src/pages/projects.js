import React, { useState, useEffect } from 'react'
import Projects from '../components/projects'

function ProjectPage() {
  const [userData, setUserData] = useState(null)

  //gets on mount
  useEffect(() => {
    getGithub()
  }, [])

  const getGithub = () => {
    fetch('https://api.github.com/users/eric-simmons')
      .then(res => res.json())
      .then(json => setUserData(json))
  }
  return (
    <Projects
    userData= {userData}>Projects</Projects>
  )
}

export default ProjectPage