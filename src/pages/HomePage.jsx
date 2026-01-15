import { useState, useEffect } from 'react'
import TopBar from '../components/TopBar'
import Header from '../components/Header'
import Hero from '../components/Hero'
import ImageGallery from '../components/ImageGallery'
import Features from '../components/Features'
import About from '../components/About'
import CoursesPreview from '../components/CoursesPreview'
import Process from '../components/Process'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

const HomePage = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header scrolled={scrolled} />
      <Hero />
      <ImageGallery />
      <Features />
      <About />
      <CoursesPreview />
      <Process />
      <CTA />
      <Footer />
    </div>
  )
}

export default HomePage
