import { useState } from 'react'
import { Header } from './components/Header'
import { Section } from './components/Section'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' 
import Projects from './components/Projects'
import Education from './components/Education'
import Resume from './components/Resume'


function App() {

  return (
    <Router>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path={'nilesh-dev'} element={<Section />} />
          <Route path={'/projects'} element={<Projects />} />
          <Route path={'/education'} element={<Education />} />
          <Route path={'/resume'} element={<Resume />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
