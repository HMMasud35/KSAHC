"use client"
import React from 'react'
import Image from 'next/image'
import Skill from './Component/Skill'
import { useRouter } from 'next/navigation'


const About = () => {
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

        <div className='pt-50 grid grid-cols-3 grid-rows-2 gap-10'>
          <div>
            <div>
              <h3 className='text-5xl text-teal-600 leading-15 uppercase font-bold mb-5'><span className='text-white'>শিক্ষক</span>বৃন্ধ</h3>
              <p className='text-lg mb-14 text-white/80'>We are now a team of strategists, engineers, designers, and marketers who both use and develop technology </p>
              <button className='btn'>অন্নান্য শিক্ষকবৃন্ধ</button>
            </div>
          </div>

          <div className=" teacher">
            <Image className='h-70 m-auto rounded-tl-4xl' width={800} height={600} src="/teacher/princepal.png" alt='princepal.png' />
            <div className="bg-teal-600/20 rounded-b-4xl p-3" >
              <h4 className="text-teal-600 text-2xl font-bold uppercase">মোঃ নিজামুল হক তালুকদার</h4>
              <h6 className='text-lg font-normal uppercase tracking-widest mb-3 '>অধ্যক্ষ (ভারপ্রাপ্ত)</h6>
              <p className="border-t-2 border-teal-600">বিভাগীয় প্রধান ইতিহাস ডিপার্টমেন্ট</p>
            </div>
          </div>
          <div className=" teacher">
            <Image className='h-70 m-auto rounded-tl-4xl' width={800} height={600} src="/teacher/teacher-1.jpeg" alt='teacher-1.jpeg' />
            <div className="bg-teal-600/20 rounded-b-4xl p-3" >
              <h4 className="text-teal-600 text-2xl font-bold uppercase">মোঃ এনামুল হক মোল্লা</h4>
              <h6 className='text-lg font-normal uppercase tracking-widest mb-3 '>সহকারী অধ্যাপক</h6>
              <p className="border-t-2 border-teal-600">জীববিজ্ঞান</p>
            </div>
          </div>
          <div className=" teacher">
            <Image className='h-70 m-auto rounded-tl-4xl' width={800} height={600} src="/teacher/teacher-2.jpeg" alt='teacher-2.jpeg' />
            <div className="bg-teal-600/20 rounded-b-4xl p-3" >
              <h4 className="text-teal-600 text-2xl font-bold uppercase">এস এম জলিল</h4>
              <h6 className='text-lg font-normal uppercase tracking-widest mb-3 '>সহকারি অধ্যাপক</h6>
              <p className="border-t-2 border-teal-600">বিভাগীয় প্রধান ব্যবস্থাপনা ডিপার্টমেন্ট</p>
            </div>
          </div>
          <div className=" teacher">
            <Image className='h-70 m-auto rounded-tl-4xl' width={800} height={600} src="/teacher/teacher-3.jpeg" alt='teacher-3.jpeg' />
            <div className="bg-teal-600/20 rounded-b-4xl p-3" >
              <h4 className="text-teal-600 text-2xl font-bold uppercase">জাহানারা আরজু</h4>
              <h6 className='text-lg font-normal uppercase tracking-widest mb-3 '>সহকারী অধ্যাপক</h6>
              <p className="border-t-2 border-teal-600">বিভাগীয় প্রধান ইসলামের ইতিহাস ও সংস্কৃতি</p>
            </div>
          </div>
          <div className=" teacher">
            <Image className='h-70 m-auto rounded-tl-4xl' width={800} height={600} src="/teacher/teacher-4.jpeg" alt='teacher-4.jpeg' />
            <div className="bg-teal-600/20 rounded-b-4xl p-3" >
              <h4 className="text-teal-600 text-2xl font-bold uppercase">মোহাঃ আসাদুজ্জামান</h4>
              <h6 className='text-lg font-normal uppercase tracking-widest mb-3 '>সহকারি অধ্যাপক</h6>
              <p className="border-t-2 border-teal-600">বিভাগীয় প্রধান গণিত ডিপার্টমেন্ট</p>
            </div>
          </div>
        </div>
      </div>
      <Skill />
    </section>
  )
}

export default About