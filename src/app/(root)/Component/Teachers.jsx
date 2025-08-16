import React from 'react'
import Image from 'next/image'

const Teachers = () => {
  return (
    <section className='py-30 bg-gray-950'>
      <div className="container">
        <div className='grid grid-cols-3 grid-rows-2 gap-10'>
          <div>
            <div>
              <h3 className='text-5xl text-teal-600 leading-15 uppercase font-bold mb-5'><span className='text-white'>শিক্ষক</span>বৃন্ধ</h3>
              <p className='text-lg mb-14 text-white/80'>We are now a team of strategists, engineers, designers, and marketers who both use and develop technology </p>
              <button className='btn'>অন্নান্য শিক্ষকবৃন্ধ</button>
            </div>
          </div>

          <div className=" teacher">
            <Image className='h-50 m-auto rounded-tl-4xl' width={800} height={600} src="/teacher/princepal.png" alt='princepal.png' />
            <div className="bg-teal-600/20 rounded-b-4xl p-3" >
              <h4 className="text-teal-600 text-2xl font-bold uppercase">মোঃ নিজামুল হক তালুকদার</h4>
              <h6 className='text-lg font-normal uppercase tracking-widest mb-3 '>অধ্যক্ষ (ভারপ্রাপ্ত)</h6>
              <p className="border-t-2 border-teal-600">বিভাগীয় প্রধান ইতিহাস ডিপার্টমেন্ট</p>
            </div>
          </div>
          <div className=" teacher">
            <Image className='h-50 m-auto rounded-tl-4xl' width={800} height={600} src="/teacher/teacher-1.jpeg" alt='teacher-1.jpeg' />
            <div className="bg-teal-600/20 rounded-b-4xl p-3" >
              <h4 className="text-teal-600 text-2xl font-bold uppercase">মোঃ এনামুল হক মোল্লা</h4>
              <h6 className='text-lg font-normal uppercase tracking-widest mb-3 '>সহকারী অধ্যাপক</h6>
              <p className="border-t-2 border-teal-600">জীববিজ্ঞান</p>
            </div>
          </div>
          <div className=" teacher">
            <Image className='h-50 m-auto rounded-tl-4xl' width={800} height={600} src="/teacher/teacher-2.jpeg" alt='teacher-2.jpeg' />
            <div className="bg-teal-600/20 rounded-b-4xl p-3" >
              <h4 className="text-teal-600 text-2xl font-bold uppercase">এস এম জলিল</h4>
              <h6 className='text-lg font-normal uppercase tracking-widest mb-3 '>সহকারি অধ্যাপক</h6>
              <p className="border-t-2 border-teal-600">বিভাগীয় প্রধান ব্যবস্থাপনা ডিপার্টমেন্ট</p>
            </div>
          </div>
          <div className=" teacher">
            <Image className='h-50 m-auto rounded-tl-4xl' width={800} height={600} src="/teacher/teacher-3.jpeg" alt='teacher-3.jpeg' />
            <div className="bg-teal-600/20 rounded-b-4xl p-3" >
              <h4 className="text-teal-600 text-2xl font-bold uppercase">জাহানারা আরজু</h4>
              <h6 className='text-lg font-normal uppercase tracking-widest mb-3 '>সহকারী অধ্যাপক</h6>
              <p className="border-t-2 border-teal-600">বিভাগীয় প্রধান ইসলামের ইতিহাস ও সংস্কৃতি</p>
            </div>
          </div>
          <div className=" teacher">
            <Image className='h-50 m-auto rounded-tl-4xl' width={800} height={600} src="/teacher/teacher-4.jpeg" alt='teacher-4.jpeg' />
            <div className="bg-teal-600/20 rounded-b-4xl p-3" >
              <h4 className="text-teal-600 text-2xl font-bold uppercase">মোহাঃ আসাদুজ্জামান</h4>
              <h6 className='text-lg font-normal uppercase tracking-widest mb-3 '>সহকারি অধ্যাপক</h6>
              <p className="border-t-2 border-teal-600">বিভাগীয় প্রধান গণিত ডিপার্টমেন্ট</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Teachers