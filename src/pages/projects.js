import React, { useState, useEffect } from 'react'
import Container from '../components/container'
import Projects from '../components/projects'

function ProjectPage() {
  const [repoData, setRepoData] = useState([])
  useEffect(() => {
    getGithub()
  }, [])
  const getGithub = async () => {
    let repoPage = await fetch("https://api.github.com/users/eric-simmons/starred?per_page=8")
    
    // await fetch('https://api.github.com/users/eric-simmons/repos?sort=starred&per_page=6')
    repoPage = await repoPage.json()
    setRepoData([...repoPage])
  }
  console.log(repoData)
  return !!repoData ? (
    <div
      className='container'>
      {repoData.map((repo, i) => (
        <Projects
          repoName={repo.name}
          repoDescription = {repo.description}
          repoUrl={repo.html_url}
          key={i}>
        </Projects>
      ))}
    </div>
  ) : <p>loading..</p>
}

export default ProjectPage