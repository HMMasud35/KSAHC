import React from 'react'
import Banner from './Banner/page'
import About from './about/page'
import Gallery from './gallery/page'
import Contact from './contact/page'
import Department from './department/page'


const page = () => {
  return (
    <>
    <Banner/>
    <About/>
    <Department/>
    <Gallery/>
    <Contact/>
    </>
    
  )
}

export default page