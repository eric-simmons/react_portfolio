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
            <h1>Eric Simmons</h1>
            {/* {createButtons} */}

        </div>
      {renderView()}
      
      
    </main >
  )
}

export default App