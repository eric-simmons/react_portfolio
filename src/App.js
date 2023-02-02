import React, { useState } from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
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
        
      {renderView()}
      
    </main >
  )
}

export default App