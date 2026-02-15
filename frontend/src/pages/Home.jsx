import { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Skills from '../components/Skills'
import Awards from '../components/Awards'
import CertificatesAndCourses from '../components/CertificatesAndCourses'
import Interests from '../components/Interests'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const SECTION_IDS = ['about', 'experience', 'education', 'skills', 'awards', 'certificates', 'interests', 'contact']

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeSection, setActiveSection] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 250
      let current = null
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= threshold) current = id
        }
      }
      setActiveSection(current)
    }

    const main = document.querySelector('main')
    if (main) {
      main.addEventListener('scroll', handleScroll, { passive: true })
      handleScroll()
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => {
      main?.removeEventListener('scroll', handleScroll)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleNavClick = (id) => {
    setActiveSection(id)
  }

  return (
    <Layout activeSection={activeSection} onNavClick={handleNavClick}>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Awards />
        <CertificatesAndCourses />
        <Interests />
        <Contact />
        <Footer />
    </Layout>
  )
}
