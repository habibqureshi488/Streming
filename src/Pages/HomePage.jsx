import React from 'react'
import Navbar from '../Components/Navbar'
import HeroCarousel from '../Components/Hero2'
import Footer from '../Components/Footer'
import API from '../Components/API'

function HomePage() {
  return (<>
  
  <Navbar />
    <HeroCarousel />
    <API />
    <Footer />
  </>
  )
}

export default HomePage