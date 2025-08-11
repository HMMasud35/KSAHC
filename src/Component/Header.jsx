"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { BiSolidPhoneCall } from 'react-icons/bi'
import { MdOutgoingMail } from 'react-icons/md'




const Header = () => {
  const [navbar, setNavbar] = useState(false)

  const changebg = () => {
    if (window.scrollY >= 15) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener("scroll", changebg)

  return (
    <header>
      <nav className={navbar ? 'fixed' : ""}>
        <div className='w-full bg-teal-600'>
          <div className="container">
            <div className='w-full h-12 flex justify-between items-center'>
              <ul className='flex gap-8'>
                <li className='flex items-center text-lg font-semibold text-white text-shadow-md text-shadow-black'><a href=""></a><BiSolidPhoneCall
                  className='mr-2 text-2xl font-normal text-white drop-shadow-md drop-shadow-black' />01952719635</li>
                <li className='flex items-center text-lg font-semibold text-white text-shadow-md text-shadow-black'><a href=""></a><MdOutgoingMail className='mr-2 text-2xl font-normal text-white drop-shadow-md drop-shadow-black' />help@choeese.bd.com</li>
              </ul>
              <div className='flex relative items-center'>
                <button className='absolute drop-shadow-xs drop-shadow-black bg-white rounded-4xl px-3 pr-6 text-lg active:bg-orange-900 active:z-10 active:pr-3 '>BN</button>
                <button className='absolute drop-shadow-xs drop-shadow-black ml-10 bg-gray-600 rounded-4xl px-3 text-lg text-white active:bg-orange-900 active:z-10  '>EN</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <nav className={navbar ? 'bg-white fixed w-full z-1000' : "bg-white w-full"}>
        <div className="container">
          <div className="flex justify-between items-center h-20">
            <div className='cursor-pointer'>
              <Image className='w-70' width={2053} height={469} src="/logo.png" alt='logo.png' />
            </div>
            <ul className='flex text-xl text-black items-end'>
              <li className='item'><Link href="/">Home</Link></li>
              <li className='item'><Link href="/about">About</Link></li>
              <li className='item'><Link href="/gallery">Academic</Link></li>
              <li className='item'><Link href="/portfolio">Admission</Link></li>
              <li className='item'><Link href="/portfolio">Blog</Link></li>
              <li className='item'><Link href="/contact">Contact</Link></li>
              <button className='btn cursor-pointer !py-2 ml-6 mb-2 hover:!bg-transparent'>Apply Now</button>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header