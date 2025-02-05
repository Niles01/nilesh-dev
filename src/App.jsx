import { useState } from 'react'
import { Header } from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' 
import Projects from './components/Projects'
import Education from './components/Education'
import Experience from './components/Experience'
import Resume from './components/Resume'
import { Section } from './components/Section'

function App() {

  return (
    <>
    <Router>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path={'nilesh-dev'} element={<Section />} />
          <Route path={'/projects'} element={<Projects />} />
          <Route path={'/education'} element={<Education />} />
          <Route path={'/experience'} element={<Experience />} />
          <Route path={'/resume'} element={<Resume />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </Router>
    </>
  )
}

export default App
