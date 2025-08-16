import Footer from '@/Component/Footer'
import Header from '@/Component/Header'
import ScrollP from '@/Component/ScrollP'
import Social from '@/Component/Social'
import React from 'react'

export default function MainLayout({children}) {
  return (
    <>
    <ScrollP/>
    <Social/>
    <Header/>
    {children}
    <Footer/>
    </>
  )
}
