import React, { useState, useEffect, useCallback } from 'react'
import Projects from '../components/projects'
import Piece, { PieceDetail, PORTFOLIO } from '../components/piece'
import './projects.css'

// The projects come from the Central Scrutinizer: the ones marked "on my site" are exported into
// public/portfolio/ (`scrutinizer site`, or [ update site ] on its pieces page). Until there is an
// export, this shows the starred GitHub repos instead.

function ProjectPage() {
  const [pieces, setPieces] = useState(null)
  const [repoData, setRepoData] = useState([])
  const [open, setOpen] = useState(null)
  const close = useCallback(() => setOpen(null), [])

  useEffect(() => {
    const getGithub = async () => {
      let repoPage = await fetch("https://api.github.com/users/eric-simmons/starred?per_page=8")

      // await fetch('https://api.github.com/users/eric-simmons/repos?sort=starred&per_page=6')
      repoPage = await repoPage.json()
      setRepoData([...repoPage])
    }
    const getPieces = async () => {
      try {
        const res = await fetch(`${PORTFOLIO}projects.json`)
        const data = await res.json()
        if (Array.isArray(data.projects) && data.projects.length > 0) {
          setPieces(data.projects)
          return
        }
      } catch {
        // no export yet (the dev server answers a missing file with the app's HTML)
      }
      setPieces([])
      getGithub()
    }
    getPieces()
  }, [])

  if (pieces === null) return <p className='container'>loading..</p>

  if (pieces.length > 0) {
    return (
      <div className='container'>
        <div className='pieces'>
          {pieces.map((piece) => <Piece key={piece.id} piece={piece} onOpen={setOpen} />)}
        </div>
        {open && <PieceDetail piece={open} onClose={close} />}
      </div>
    )
  }

  return (
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
  )
}

export default ProjectPage
