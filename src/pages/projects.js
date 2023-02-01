import React, { useState, useEffect } from 'react'
import Profile from '../components/profile'
import Projects from '../components/projects'

function ProjectPage() {
  const [userData, setUserData] = useState(null)
  const [repoData, setRepoData] = useState([])

  //gets on mount
  useEffect(() => {
    getGithub()
  }, [])

  const getGithub = async () => {
    let mainPage = await fetch('https://api.github.com/users/eric-simmons')
    let repoPage = await fetch('https://api.github.com/users/eric-simmons/repos?sort=starred&per_page=6')

    mainPage = await mainPage.json()
    repoPage = await repoPage.json()

  

    

    setUserData(mainPage)
    setRepoData([...repoPage])
  }

  return !!userData ? (
    <>
      <Profile
        userData={userData}
      >
        Profile
      </Profile>

      {repoData.map((repo, i) => (
       
        <Projects
        
          repoName={repo.name}
          key={i}>
        </Projects>
      ))}
    </>


  ) : <p>loading..</p>

}

export default ProjectPage