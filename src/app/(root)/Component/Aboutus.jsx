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
            <h4 className='text-4xl text-teal-600 font-bold uppercase border-dotted border-b-2 mb-5 block pb-3 mr-12 border-teal-600'>প্রতিষ্ঠান সম্পর্কে</h4>
            <h2 className='text-white text-6xl font-bold uppercase leading-15 mb-10'>আমাদের শিক্ষা ব্যবস্থা আপনাকে আরো <span className='text-teal-600'> অনুপ্রাণিত করবে</span></h2>
            <p className='text-2xl text-white/80 mb-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae ratione itaque debitis omnis sunt? Quam impedit corporis unde veritatis culpa!</p>
            <button onClick={handleAbout} className='btn'>আরো জানতে</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Aboutus