import React from 'react'
import Image from 'next/image';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { MdOutgoingMail } from 'react-icons/md';
import { FaLocationDot } from "react-icons/fa6";
import { SlActionRedo } from "react-icons/sl";
import { TiArrowSortedDown } from "react-icons/ti";

const Footer = () => {
  return (
    <footer className='bg-[#012758] py-15'>
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
              <li className='flex mt-3 items-center text-xl font-semibold text-white'><a href=""></a><FaLocationDot
                className='mr-3 text-3xl font-normal text-white p-1 rounded-t-lg rounded-bl-lg bg-teal-600' />madaripur</li>
              <li className='flex mt-3 items-center text-xl font-semibold text-white'><a href=""></a><MdOutgoingMail
                className='mr-3 text-3xl font-normal text-white p-1 rounded-t-lg rounded-bl-lg bg-teal-600' />c6305@nu.ac.bd</li>
            </ul>
          </div>
          <div className='grid grid-cols-2 justify-between'>
            <div className='mt-26'>
              <h4 className='text-2xl text-white uppercase font-bold '>quick links <TiArrowSortedDown className='' /></h4>
              <ul className='mt-5'>
              <li className='flex items-center text-lg font-semibold text-white mt-5 hover:text-teal-600'><a href=""></a><SlActionRedo
                className='mr-3 text-2xl font-extrabold text-white p-1 rounded-tl-lg rounded-bl-lg mt-2 bg-teal-800' />০৬৬২২৫৬১০৯</li>
              <li className='flex items-center text-lg font-semibold text-white mt-5 hover:text-teal-600'><a href=""></a><SlActionRedo
                className='mr-3 text-2xl font-extrabold text-white p-1 rounded-tl-lg rounded-bl-lg mt-2 bg-teal-800' />madaripur</li>
              <li className='flex items-center text-lg font-semibold text-white mt-5 hover:text-teal-600'><a href=""></a><SlActionRedo
                className='mr-3 text-2xl font-extrabold text-white p-1 rounded-tl-lg rounded-bl-lg mt-2 bg-teal-800' />c6305@nu.ac.bd</li>
            </ul>
            </div>
            <div className='mt-26'>
              <h4 className='text-2xl text-white uppercase font-bold '>quick links <TiArrowSortedDown className='' /></h4>
              <ul className='mt-5'>
              <li className='flex items-center text-lg font-semibold text-white mt-5 hover:text-teal-600'><a href=""></a><SlActionRedo
                className='mr-3 text-2xl font-extrabold text-white p-1 rounded-tl-lg rounded-bl-lg mt-2 bg-teal-800' />০৬৬২২৫৬১০৯</li>
              <li className='flex items-center text-lg font-semibold text-white mt-5 hover:text-teal-600'><a href=""></a><SlActionRedo
                className='mr-3 text-2xl font-extrabold text-white p-1 rounded-tl-lg rounded-bl-lg mt-2 bg-teal-800' />madaripur</li>
              <li className='flex items-center text-lg font-semibold text-white mt-5 hover:text-teal-600'><a href=""></a><SlActionRedo
                className='mr-3 text-2xl font-extrabold text-white p-1 rounded-tl-lg rounded-bl-lg mt-2 bg-teal-800' />c6305@nu.ac.bd</li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer