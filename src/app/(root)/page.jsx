import React from 'react'
import Banner from './Banner/page'
import Aboutus from './Component/Aboutus'
import Skill from './Component/Skill'
import Course from './Component/Course'
import Teachers from './Component/Teachers'
import S_Gallery from './Component/S_Gallery'
import Studentsay from './Component/Studentsay'
import Contactme from './Component/Contactme'

const page = () => {
  return (
    <>
    <Banner/>
    <Aboutus/>
    <Skill/>
    <Teachers/>
    <Course/>
    <S_Gallery/>
    <Studentsay/>
    <Contactme/>
    </>
    
  )
}

export default page