import React, { useEffect } from 'react'
import { useState } from 'react';
import Skills from './Skills';
import Project from "../Experience/Project"
import HeroSection from './HeroSection';


function Home() {
  
  const [visiole,setVisible]=useState(false)
  useEffect(()=>{
    setTimeout(()=>{
      setVisible(true)
    },1000)
  },[])
  return (
    <>
    <HeroSection/>
    <Skills/>
    <Project />
    </>
  )
}

export default Home
