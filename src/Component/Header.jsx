"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { BiSolidPhoneCall } from 'react-icons/bi'
import { MdOutgoingMail } from 'react-icons/md'
import { FaHome } from "react-icons/fa";







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
                  className='mr-2 text-2xl font-normal text-white drop-shadow-md drop-shadow-black' />০৬৬২২৫৬১০৯</li>
                <li className='flex items-center text-lg font-semibold text-white text-shadow-md text-shadow-black'><a href=""></a><MdOutgoingMail className='mr-2 text-2xl font-normal text-white drop-shadow-md drop-shadow-black' />c6305@nu.ac.bd</li>
              </ul>
              <div className='flex relative items-center'>
                <button className='absolute drop-shadow-xs drop-shadow-black bg-white rounded-4xl px-3 pr-13 text-lg active:bg-orange-900 active:z-10 active:pr-3 group'>বাংলা</button>
                <button className='absolute drop-shadow-xs drop-shadow-black ml-15 bg-gray-600 rounded-4xl px-3 text-lg text-white active:bg-orange-900 active:z-10 '>EN</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <nav className={navbar ? 'bg-white fixed w-full z-1000' : "bg-white w-full"}>
        <div className="container">
          <div className="flex justify-between items-center h-20">
            <div className='cursor-pointer w-17 '>
              <Image className='' width={2053} height={469} src="/logo.png" alt='logo.png' />
            </div>
            <ul className='flex text-xl text-black items-end'>
              <li className='item'><Link href="/"><FaHome className='text-3xl' /></Link></li>
              <li className='item'><Link href="/about">প্রতিষ্ঠান</Link></li>
              <li className='item after:hidden group'><Link href="">অধ্যয়ন</Link>
                <div className='w-70 h-70 bg-white absolute top-12 left-0 z-10 hidden group-hover:block'>
                  <ul className='border-t-4 border-teal-600'>
                    <li className='w-full px-5 py-2 border-b-2 border-gray-800/50 text-teal-600 text-2xl hover:text-teal-600 hover:bg-teal-200/70'><Link href="">বিভাগ:</Link></li>
                    <li className='w-full px-5 py-2 border-b-2 border-b-gray-800/50 text-teal-600 text-2xl hover:text-teal-600 hover:bg-teal-200/70'><Link href="">fff</Link></li>
                  </ul>
                </div>
              </li>
              <li className='item'><Link href="/portfolio">ভর্তি তথ্য</Link></li>
              <li className='item'><Link href="/portfolio">ফলাফল</Link></li>
              <li className='item'><Link href="/gallery">গ্যালারী</Link></li>
              <li className='item'><Link href="/gallery">নোটিশ</Link></li>

              <li className='item'><Link href="/contact">যোগাযোগ</Link></li>
              <button className='btn cursor-pointer !py-2 ml-6 mb-2 hover:!bg-transparent'>আবেদন</button>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header