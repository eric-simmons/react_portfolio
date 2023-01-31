import React, { useState, useEffect } from 'react'
import Projects from '../components/projects'

function ProjectPage() {
  const [userData, setUserData] = useState(null)

  //gets on mount
  useEffect(() => {
    getGithub()
  }, [])

  const getGithub = async () => {
    const response = await fetch('https://api.github.com/users/eric-simmons')
    const json = await response.json()
    setUserData(json)
  }
  return !!userData ? (
    <Projects
      userData={userData}>Projects</Projects>
  ) : <p>loading..</p>
}

export default ProjectPage