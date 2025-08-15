import Footer from '@/Component/Footer'
import Header from '@/Component/Header'
import ScrollP from '@/Component/ScrollP'
import React from 'react'

export default function MainLayout({children}) {
  return (
    <>
    <ScrollP/>
    <Header/>
    {children}
    <Footer/>
    </>
  )
}
