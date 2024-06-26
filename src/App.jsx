import React from 'react'
import './App.css'
import Sidebar from './components/sidebard/Sidebar'
import Home from './components/home/Home'
import About from './components/about/About'
import Services from './components/services/Services'
import Resume from './components/resume/Resume'
import Contact from './components/contact/contact'
import Portfolio from './components/portfolio/Portfolio'

function App() {

  return (
    <>
    <Sidebar/>
    <main className='main'>
      <Home/>
      <About/>
      <Services/>
      <Resume/>
      <Portfolio />
      <Contact/>
    </main>     
    </>
  )
}

export default App
