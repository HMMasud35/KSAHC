import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";
import { IoLogoWhatsapp } from "react-icons/io";





const Social = () => {
  return (
    <div>
      <ul className='bg-white px-2 top-100 rounded-r-2xl left-0 fixed z-1000'>
        <li className='pb-2 pt-5 animate-bounce hover:animate-none'><a href=""><FaFacebookF className='text-4xl font-bold text-white px-3 py-2 bg-gray-700 rounded-t-2xl rounded-bl-2xl hover:bg-teal-600 hover:text-white'/></a></li>
        <li className='py-2 animate-bounce hover:animate-none'><a href=""><PiInstagramLogoFill className='text-4xl font-bold text-white px-2 py-1 bg-gray-700 rounded-t-2xl rounded-bl-2xl hover:bg-teal-600 hover:text-white'/></a></li>
        <li className='py-2 animate-bounce hover:animate-none'><a href=""><IoLogoWhatsapp className='text-4xl font-bold text-white px-2 py-1 bg-gray-700 rounded-t-2xl rounded-bl-2xl hover:bg-teal-600 hover:text-white'/></a></li>
      </ul>
    </div>
  )
}

export default Social