"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'


const Aboutus = () => {
  const router = useRouter()

  let handleAbout = () => {
    router.push('/about')
  }


  return (
    <section className='py-30 bg-gray-950'>
      <div className="container">
        <div className='grid grid-cols-2 justify-between items-center'>
          <div className='grid grid-cols-2 grid-rows-2 relative'>
            <div className='row-span-2 rounded-l-full ' >
              <Image className='w-70 h-100 border-4 border-teal-600 rounded-l-full' width={800} height={600} src="/photo-1.jpeg" alt='photo-1.jpeg' />
            </div>
            <div>
              <Image className='w-70 h-60 border-4 border-teal-600 rounded-2xl' width={800} height={600} src="/photo-4.jpeg" alt='photo-4.jpeg' />
            </div>
            <div className=''>
              <Image className='w-70 h-70 border-4 border-teal-600 rounded-full' width={800} height={600} src="/photo-5.jpeg" alt='photo-5.jpeg' />
            </div>
            <div className='flex left-0 -bottom-5 justify-between p-5 gap-5 items-center bg-teal-600 w-70 h-30 absolute  rounded-l-full rounded-br-full'>
              <Image className='w-20 h-20' width={800} height={600} src="/quality.png" alt='quality.png' />
              <p className='text-white text-xl'><span className='text-4xl font-bold text-amber-400'>“৩০”</span> বছরের সাফল্য</p>
            </div>
          </div>
          <div>
            <h4 className='text-4xl text-teal-600 font-bold uppercase border-dotted border-b-2 mb-5 block pb-3 border-teal-600'>প্রতিষ্ঠানিক তথ্য</h4>
            <div className='grid grid-cols-2 gap-5 gap-y-5 grid-rows-2 items-center mb-5'>
              <div className='relative text-xl text-white px-5 py-3 bg-gray-800/50 rounded-md'>প্রতিষ্ঠার বছর<span className='left-35 absolute'>|</span><span className='left-40 absolute'>০১ জুলাই ১৯৭২</span></div>
              <div className=' relative text-xl text-white px-5 py-3 bg-gray-800/50 rounded-md'>কলেজ কোড<span className='left-35 absolute'>|</span><span className='left-40 absolute'>৬৩০৫</span></div>
              <div className='relative text-xl text-white px-5 py-3 bg-gray-800/50 rounded-md'>ই-টিন<span className='left-35 absolute'>|</span><span className='left-40 absolute'>১১০৭১৬</span></div>
              <div className='relative text-xl text-white p-3 bg-gray-800/50 rounded-md'>মোবাইল<span className='left-35 absolute'>|</span><span className='left-40 absolute'>০১৭১৫১৬৫০৬২</span></div>
              <div className='relative text-xl text-white p-3 bg-gray-800/50 rounded-md'>ই-মেইল<span className='left-35 absolute'>|</span><span className='left-40 absolute'>c6305@nu.ac.bg</span></div>
              <div className='relative text-xl text-white p-3 pb-8 bg-gray-800/50 rounded-md'>ঠিকানা<span className='left-25 absolute'>|</span><span className='left-30 absolute'>পাঙ্গাশিয়া, কালকিনি, মাদারীপুর</span></div>
            </div>
            <button onClick={handleAbout} className='btn'>আরো জানতে</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Aboutus