import React from 'react'
import Image from 'next/image';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { MdOutgoingMail } from 'react-icons/md';
import { FaFacebookF, FaLocationDot } from "react-icons/fa6";
import { SlActionRedo } from "react-icons/sl";
import { TiArrowSortedDown } from "react-icons/ti";
import Link from 'next/link';
import { PiInstagramLogoFill } from 'react-icons/pi';
import { IoLogoWhatsapp } from 'react-icons/io';

const Footer = () => {
  return (
    <footer className='bg-[#012758] pt-15'>
      <div className="container">
        <div className='grid grid-cols-3'>
          <div className='pr-10'>
            <div className='flex items-center gap-4'>
              <Image className='w-20 h-20' width={800} height={800} src="/logo.png" alt='logo.png' />
              <h2 className='text-2xl text-white font-bold'>কালকিনি সৈয়দ আবুল হোসেন কলেজ</h2>
            </div>
            <p className='text-white/70 text-xl text-justify mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse commodi asperiores sunt dolorum reprehenderit quos ipsa explicabo quidem qui quaerat.</p>
            <ul className='mt-5'>
              <li className='flex mt-3 items-center text-xl font-semibold text-white '><a href=""></a><BiSolidPhoneCall
                className='mr-3 text-3xl font-normal text-white p-1 rounded-t-lg rounded-bl-lg bg-teal-600' />০৬৬২২৫৬১০৯</li>
              <li className='flex mt-3 items-center text-xl font-semibold text-white'><a href=""></a><MdOutgoingMail
                className='mr-3 text-3xl font-normal text-white p-1 rounded-t-lg rounded-bl-lg bg-teal-600' />c6305@nu.ac.bd</li>
              <li className='flex mt-3 items-center text-xl font-semibold text-white'><a href=""></a><FaLocationDot
                className='mr-3 text-3xl font-normal text-white p-1 rounded-t-lg rounded-bl-lg bg-teal-600' />পাঙ্গাশিয়া, কালকিনি, মাদারীপুর</li>
            </ul>
          </div>
          <div className='grid grid-cols-2 justify-between'>
            <div className='mt-26'>
              <h4 className='text-2xl text-white uppercase font-bold '>জরুরী লিংক <TiArrowSortedDown className='' /></h4>
              <ul className='mt-5'>
                <li className='text-lg flex items-center font-semibold text-white mt-5 hover:text-teal-600 '><Link href="/about" className='flex items-center'><SlActionRedo
                  className='mr-3 text-2xl font-extrabold text-white p-1 rounded-tl-lg rounded-bl-lg bg-teal-800' />প্রতিষ্ঠান সম্পর্কে</Link></li>
                <li className='text-lg flex items-center font-semibold text-white mt-5 hover:text-teal-600 '><Link href="" className='flex items-center'><SlActionRedo
                  className='mr-3 text-2xl font-extrabold text-white p-1 rounded-tl-lg rounded-bl-lg bg-teal-800' />শিক্ষকবৃন্ধ</Link></li>
                <li className='text-lg flex items-center font-semibold text-white mt-5 hover:text-teal-600 '><Link href="" className='flex items-center'><SlActionRedo
                  className='mr-3 text-2xl font-extrabold text-white p-1 rounded-tl-lg rounded-bl-lg bg-teal-800' />কর্মচারী-কর্মকর্তা</Link></li>
              </ul>
            </div>
            <div className='mt-26'>
              <h4 className='text-2xl text-white uppercase font-bold '>জরুরী লিংক <TiArrowSortedDown /></h4>
              <ul className='mt-5'>
                <li className='text-lg flex items-center font-semibold text-white mt-5 hover:text-teal-600 '><Link href="" className='flex items-center'><SlActionRedo
                  className='mr-3 text-2xl font-extrabold text-white p-1 rounded-tl-lg rounded-bl-lg bg-teal-800' />শিক্ষার্থীর বিবরণ</Link></li>
                <li className='text-lg flex items-center font-semibold text-white mt-5 hover:text-teal-600 '><Link href="" className='flex items-center'><SlActionRedo
                  className='mr-3 text-2xl font-extrabold text-white p-1 rounded-tl-lg rounded-bl-lg bg-teal-800' />বিভাগ সমূহ</Link></li>
                <li className='text-lg flex items-center font-semibold text-white mt-5 hover:text-teal-600 '><Link href="" className='flex items-center'><SlActionRedo
                  className='mr-3 text-2xl font-extrabold text-white p-1 rounded-tl-lg rounded-bl-lg bg-teal-800' />নোটিশ</Link></li>
              </ul>
            </div>
          </div>
          <div className='pr-10 mt-26'>
            <h2 className='text-2xl text-white font-bold mb-5'>কমেন্টস বক্স <TiArrowSortedDown /></h2>
            <p className='text-white text-2xl font-bold mb-3'>আপনার প্রয়োজনীয় মন্তব্য করুন </p>
            <div className='relative'>
              <textarea className='border-2 border-teal-600 py-2 px-5 w-full rounded-2xl text-white' type="text" name="text" id="text" placeholder='মন্তব্য' />
              <button className='btn !py-2 !rounded-2xl absolute -bottom-4 right-3'>পাঠান</button>
            </div>

            <ul className='mt-5 flex gap-8'>
              <li className='btn !px-3 !py-2 rounded-t-2xl rounded-bl-2xl group'><a href=""><FaFacebookF className='text-2xl font-bold text-white group-hover:text-teal-600' /></a></li>
              <li className='btn !px-3 !py-2 rounded-t-2xl rounded-bl-2xl group'><a href=""><PiInstagramLogoFill className='text-2xl font-bold text-white group-hover:text-teal-600' /></a></li>
              <li className='btn !px-3 !py-2 rounded-t-2xl rounded-bl-2xl group'><a href=""><IoLogoWhatsapp className='text-2xl font-bold text-white group-hover:text-teal-600' /></a></li>
            </ul>
          </div>
        </div>
        <div className='border-t-2 border-teal-600/50 mt-5 py-3'>
          <h5 className='text-white m-auto text-center '>© Copyright 2025 <span className='text-lg text-teal-600 font-bold'>KSAHC</span> All Rights Reserved.</h5>
        </div>
      </div>
    </footer>
  )
}

export default Footer