"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { BiSolidPhoneCall } from 'react-icons/bi'
import { MdOutgoingMail } from 'react-icons/md'
import { FaHome } from "react-icons/fa";
import { SlActionRedo } from "react-icons/sl";
import { SlArrowDown } from "react-icons/sl";
import { BiSolidRightArrow } from "react-icons/bi";


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
            <d iv className='w-full h-12 flex justify-between items-center'>
              <ul className='flex gap-8 mr-5'>
                <li className='flex items-center text-lg font-semibold text-white text-shadow-md text-shadow-black'><a href=""></a><BiSolidPhoneCall
                  className='mr-2 text-2xl font-normal text-white drop-shadow-md drop-shadow-black' />০৬৬২২৫৬১০৯</li>
                <li className='flex items-center text-lg font-semibold text-white text-shadow-md text-shadow-black'><a href=""></a><MdOutgoingMail className='mr-2 text-2xl font-normal text-white drop-shadow-md drop-shadow-black' />c6305@nu.ac.bd</li>
              </ul>
              <div className='flex h-full'>
                <div className='text-teal-800 font-bold text-lg bg-white py-3 px-5 -skew-x-25'>সর্বশেষ বিজ্ঞপ্তিঃ</div>
                <marquee scrollamount="4" className="-ml-2 py-3 w-190">
                  <ul className='flex'>
                    <li className='text-lg text-white px-3 flex items-center'> <BiSolidRightArrow className='mr-2' />কালকিনি সৈয়দ আবুল হোসেন কলেজ</li>
                    <li className='text-lg text-white px-3 flex items-center'> <BiSolidRightArrow className='mr-2' />কালকিনি সৈয়দ আবুল হোসেন কলেজ</li>
                  </ul>
                </marquee>
              </div>
              <div className='flex relative items-center'>
                <button className='absolute drop-shadow-xs drop-shadow-black bg-white rounded-4xl px-3 pr-13 text-lg active:bg-orange-900 active:z-10 active:pr-3 group'>বাংলা</button>
                <button className='absolute drop-shadow-xs drop-shadow-black ml-15 bg-gray-600 rounded-4xl px-3 text-lg text-white active:bg-orange-900 active:z-10 '>EN</button>
              </div>
            </d>
          </div>
        </div>
      </nav>
      <nav className={navbar ? 'bg-white fixed w-full z-1000' : "bg-white w-full"}>
        <div className="container">
          <div className="flex justify-between items-center h-23">
            <div className='cursor-pointer w-17 '>
              <Image width={800} height={800} src="/logo.png" alt='logo.png' />
            </div>
            <ul className='flex text-xl text-black items-end'>
              <li className='item'><Link href="/"><FaHome className='text-3xl' /></Link></li>
              <li className='item after:hidden group'><Link href="" className='flex items-center'>প্রতিষ্ঠান <SlArrowDown className='text-sm ml-1' /></Link>
                <div className='w-70 bg-teal-600 absolute top-15 left-0 z-20 border-t-4 border-teal-800 hidden group-hover:block'>
                  <ul className=''>
                    <li className='w-full px-5 py-2 border-b-2 border-gray-400/70 text-white text-xl hover:text-white hover:bg-teal-800/40'><Link href="/about" className='flex items-center'><SlActionRedo className='mr-3' />প্রতিষ্ঠান সম্পর্কে</Link></li>
                    <li className='w-full px-5 py-2 border-b-2 border-gray-400/70 text-white text-xl hover:text-white hover:bg-teal-800/40'><Link href="" className='flex items-center'><SlActionRedo className='mr-3' />শিক্ষকবৃন্ধ</Link></li>
                    <li className='w-full px-5 py-2 border-b-2 border-gray-400/70 text-white text-xl hover:text-white hover:bg-teal-800/40'><Link href="" className='flex items-center'><SlActionRedo className='mr-3' />কর্রচারী-কর্মকর্তা</Link></li>
                    <li className='w-full px-5 py-2 border-b-2 border-gray-400/70 text-white text-xl hover:text-white hover:bg-teal-800/40'><Link href="" className='flex items-center'><SlActionRedo className='mr-3' />ম্যানেজিং কমিটি</Link></li>
                  </ul>
                </div>
              </li>
              <li className='item after:hidden group'><Link href="" className='flex items-center'>অধ্যয়ন<SlArrowDown className='text-sm ml-1' /></Link>
                <div className='w-60 bg-teal-600 absolute top-15 left-0 z-20 border-t-4 border-teal-800 hidden group-hover:block'>
                  <ul className=''>
                    <li className='w-full px-5 py-2 border-b-2 border-gray-400/70 text-white text-xl hover:text-white hover:bg-teal-800/40'><Link href="" className='flex items-center'><SlActionRedo className='mr-3' />শিক্ষার্থীর বিবরণ</Link></li>
                    <li className='w-full px-5 py-2 border-b-2 border-gray-400/70 text-white text-xl hover:text-white hover:bg-teal-800/40'><Link href="" className='flex items-center'><SlActionRedo className='mr-3' />বিভাগ সমূহ</Link></li>
                    <li className='w-full px-5 py-2 border-b-2 border-gray-400/70 text-white text-xl hover:text-white hover:bg-teal-800/40'><Link href="" className='flex items-center'><SlActionRedo className='mr-3' />কোর্স সমূহ</Link></li>
                  </ul>
                </div>
              </li>
              <li className='item'><Link href="/portfolio">ভর্তি তথ্য</Link></li>
              <li className='item'><Link href="/portfolio">ফলাফল</Link></li>
              <li className='item after:hidden group'><Link href="" className='flex items-center'>গ্যালারী<SlArrowDown className='text-sm ml-1' /></Link>
                <div className='w-60 bg-teal-600 absolute top-15 left-0 z-20 border-t-4 border-teal-800 hidden group-hover:block'>
                  <ul className=''>
                    <li className='w-full px-5 py-2 border-b-2 border-gray-400/70 text-white text-xl hover:text-white hover:bg-teal-800/40'><Link href="/p_gallery" className='flex items-center'><SlActionRedo className='mr-3' />গ্যালারী</Link></li>
                    <li className='w-full px-5 py-2 border-b-2 border-gray-400/70 text-white text-xl hover:text-white hover:bg-teal-800/40'><Link href="" className='flex items-center'><SlActionRedo className='mr-3' />ভিডিও</Link></li>
                  </ul>
                </div>
              </li>
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