import React from 'react'
import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { Skills } from './components/Skills'
import Footer from './components/Footer'

export default function page(){
  return (
  
    <div className="min-h-screen bg-black  overflow-hidden">
      <div className="max-w-7xl mx-auto sm:p-5">
       <Navbar className={''}/>
       <HeroSection/>
      </div>
      <div className='max-w-7xl mx-auto p-5 mt-20'>
        <Skills/>
        <Footer/>
      </div>
    </div>
    
  )
}
