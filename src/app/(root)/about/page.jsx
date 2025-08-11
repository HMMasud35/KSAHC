import React from 'react'
import Image from 'next/image'
import Skill from './Component/Skill'

const About = () => {
  return (
    <section className='py-30 pt-50'>
      <div className="container">
        <div className='grid grid-cols-2 justify-between items-center'>
          <div className='grid grid-cols-2 grid-rows-2 relative'>
            <div className='row-span-2 rounded-l-full ' >
              <Image className='w-70 h-100 border-4 border-teal-600 rounded-l-full' width={800} height={600} src="/student-2.png" alt='student-2.png' />
            </div>
            <div>
              <Image className='w-70 h-60 border-4 border-teal-600 rounded-2xl' width={800} height={600} src="/student-1.png" alt='student-1.png' />
            </div>
            <div className=''>
              <Image className='w-70 h-70 border-4 border-teal-600 rounded-full' width={800} height={600} src="/student-3.png" alt='student-3.png' />
            </div>
            <div className='flex left-0 -bottom-5 justify-between p-5 gap-5 items-center bg-teal-600 w-70 h-30 absolute  rounded-l-full rounded-br-full'>
              <Image className='w-20 h-20' width={800} height={600} src="/quality.png" alt='quality.png' />
              <p className='text-white text-xl'>30 Years Of Quality Service </p>
            </div>
          </div>
          <div>
            <h4 className='text-4xl text-teal-600 font-bold uppercase border-dotted border-b-2 mb-5 block pb-3 mr-12 border-teal-600'>About Us</h4>
            <h2 className='text-white text-6xl font-bold uppercase leading-15 mb-10'>Our Edukation System <span className='text-teal-600'>Inspires</span> You More.</h2>
            <p className='text-2xl text-white/80 mb-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae ratione itaque debitis omnis sunt? Quam impedit corporis unde veritatis culpa!</p>
            <button className='btn'>About More</button>
          </div>
        </div>

        <div className='pt-50 grid grid-cols-3 grid-rows-2 gap-10'>
          <div>
            <div>
              <h5 className='text-teal-600 text-2xl font-semibold uppercase'>Our Teachers</h5>
              <h3 className='text-5xl text-white uppercase font-bold mb-5'>Meet With Our <span className='text-teal-600'>Teachers</span></h3>
              <p className='text-lg mb-14 text-white/80'>We are now a team of strategists, engineers, designers, and marketers who both use and develop technology </p>
              <button className='btn'>More Teachers</button>
            </div>
          </div>

          <div className=" teacher">
            <Image className='h-70 m-auto rounded-tl-4xl' width={800} height={600} src="/teacher-2.png" alt='teacher-2.png' />
            <div className="bg-teal-600/20 rounded-b-4xl p-3" >
              <h4 className="text-teal-600 text-2xl font-bold uppercase">Susan D. Lunsford</h4>
              <h6 className='text-lg font-normal uppercase tracking-widest mb-3 '>Associate Professor</h6>
              <p className="border-t-2 border-teal-600">Social Media has changed the way we interact & do business while creating</p>
            </div>
          </div>
          <div className=" teacher">
            <Image className='h-70 m-auto rounded-tl-4xl' width={800} height={600} src="/teacher-3.png" alt='teacher-3.png' />
            <div className="bg-teal-600/20 rounded-b-4xl p-3" >
              <h4 className="text-teal-600 text-2xl font-bold uppercase">Susan D. Lunsford</h4>
              <h6 className='text-lg font-normal uppercase tracking-widest mb-3 '>Associate Professor</h6>
              <p className="border-t-2 border-teal-600">Social Media has changed the way we interact & do business while creating</p>
            </div>
          </div>
          <div className=" teacher">
            <Image className='h-70 m-auto rounded-tl-4xl' width={800} height={600} src="/teacher-4.png" alt='teacher-4.png' />
            <div className="bg-teal-600/20 rounded-b-4xl p-3" >
              <h4 className="text-teal-600 text-2xl font-bold uppercase">Susan D. Lunsford</h4>
              <h6 className='text-lg font-normal uppercase tracking-widest mb-3 '>Associate Professor</h6>
              <p className="border-t-2 border-teal-600">Social Media has changed the way we interact & do business while creating</p>
            </div>
          </div>
          <div className=" teacher">
            <Image className='h-70 m-auto rounded-tl-4xl' width={800} height={600} src="/teacher-1.jpg" alt='teacher-1.jpg' />
            <div className="bg-teal-600/20 rounded-b-4xl p-3" >
              <h4 className="text-teal-600 text-2xl font-bold uppercase">Susan D. Lunsford</h4>
              <h6 className='text-lg font-normal uppercase tracking-widest mb-3 '>Associate Professor</h6>
              <p className="border-t-2 border-teal-600">Social Media has changed the way we interact & do business while creating</p>
            </div>
          </div>
          <div className=" teacher">
            <Image className='h-70 m-auto rounded-tl-4xl' width={800} height={600} src="/teacher-2.png" alt='quality.png' />
            <div className="bg-teal-600/20 rounded-b-4xl p-3" >
              <h4 className="text-teal-600 text-2xl font-bold uppercase">Susan D. Lunsford</h4>
              <h6 className='text-lg font-normal uppercase tracking-widest mb-3 '>Associate Professor</h6>
              <p className="border-t-2 border-teal-600">Social Media has changed the way we interact & do business while creating</p>
            </div>
          </div>
        </div>
      </div>
      <Skill />
    </section>
  )
}

export default About