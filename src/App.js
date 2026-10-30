import React, { useState } from 'react'
import Navbar from './components/navbar'
import Processing from './components/processing'
import ContactPage from './pages/contact'
import ProfilePage from './pages/profile.js'
import ResumePage from './pages/resume'
import ProjectPage from './pages/projects'

function App() {
  const [view, setView] = useState('profile')

  const renderView = () => {
    if (view === 'profile') {
      return <ProfilePage />
    }
    else if (view === 'contact') {
      return <ContactPage />
    }
    else if (view === 'projects') {
      return <ProjectPage />
    }
    else if (view === 'resume') {
      return <ResumePage />
    }
    else return 'no view'
  }



  return (
    <main className='main'>

      <Navbar
        className='navbar'
        view={view}
        setView={setView} />
      <div className='container'>
        <h1>Hi! My Name is Eric Simmons</h1>
        {/* {createButtons} */}

      </div>
      {renderView()}
      <div className='container'>
        <div className='box'>
          I am a fullstack developer who likes to keep learning. Right now I am learning Svelte and Graphql! I like to write simple, effective and easy to read code. I am also a musician and an electronic tinkerer. I build guitar amps and modular synths.
        </div>
      </div>


    </main >
  )
}

export default App