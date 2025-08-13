"use client"

import React, { useCallback, useRef } from 'react'
import Image from 'next/image'
import { TiArrowLeftOutline } from "react-icons/ti";
import { TiArrowRightOutline } from "react-icons/ti";
import { FaStar } from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay } from 'swiper/modules';

const Studentsay = () => {
  const sliderRef = useRef(null)

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev()
  }, [])

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext()
  }, [])

  return (
    <section className="pt-30">
      <div className="container">
        <div className="relative">
          <div>
            <div>
              <h5 className='text-teal-600 -mt-13 text-xl uppercase font-bold mb-1 [text-shadow:2px_3px_0px_rgba(0,_0,_0,_0.8)]'>testimonials</h5>
              <h2 className='text-6xl font-oswald uppercase -tracking-wide font-extrabold text-white '>happy student to <span className='text-teal-600'>says</span></h2>
            </div>
            <div>
              <button onClick={handlePrev} className="prev absolute top-5 right-25 px-5 py-1 rounded-md border-4 border-teal-600 hover:bg-teal-600/20">
                <TiArrowLeftOutline className="text-3xl text-teal-600" />
              </button>
              <button onClick={handleNext} className="next absolute top-5 right-0 px-5 py-1 rounded-md border-4 border-teal-600 hover:bg-teal-600/20">
                <TiArrowRightOutline className="text-3xl text-teal-600" />
              </button>
            </div>
          </div>
          <div className="mt-20 w-[1100px] m-auto text-white">
            <Swiper ref={sliderRef} autoplay={{ delay: 3000, pauseOnMouseEnter: true }} modules={[Autoplay]}>
              <SwiperSlide>
                <div className=" rounded-3xl grid grid-cols-3 w-[1080px] h-[420px] px-10 items-center bg-gray-800">
                  <div>
                    <Image className='w-full' src="/teacher-4.png" width={300} height={360} alt='teacher-4.png' />
                  </div>
                  <div className="col-span-2 text-center">
                    <p className="text-3xl italic">
                      “Masud was outstanding from start to finish. He was professional, helpful, and delivered a high-quality website ahead of schedule and within budget. Couldn’t be happier with the result.”
                    </p>
                    <div className='mt-8'>
                      <div className="flex justify-center text-2xl gap-2 text-yellow-400">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                      <h4 className="card-title mt-5 text-4xl font-semibold">Lukan Depina</h4>
                      <h6 className='mt-3 text-2xl'>Ceo And Head Of Idea</h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" rounded-3xl grid grid-cols-3 w-[1080px] h-[420px] px-10 items-center bg-gray-800">
                  <div>
                    <Image className='w-full' src="/teacher-4.png" width={300} height={360} alt='teacher-4.png' />
                  </div>
                  <div className="col-span-2 text-center">
                    <p className="text-3xl italic">
                      “Masud was outstanding from start to finish. He was professional, helpful, and delivered a high-quality website ahead of schedule and within budget. Couldn’t be happier with the result.”
                    </p>
                    <div className='mt-8'>
                      <div className="flex justify-center text-2xl gap-2 text-yellow-400">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                      <h4 className="card-title mt-5 text-4xl font-semibold">Lukan Depina</h4>
                      <h6 className='mt-3 text-2xl'>Ceo And Head Of Idea</h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" rounded-3xl grid grid-cols-3 w-[1080px] h-[420px] px-10 items-center bg-gray-800">
                  <div>
                    <Image className='w-full' src="/teacher-4.png" width={300} height={360} alt='teacher-4.png' />
                  </div>
                  <div className="col-span-2 text-center">
                    <p className="text-3xl italic">
                      “Masud was outstanding from start to finish. He was professional, helpful, and delivered a high-quality website ahead of schedule and within budget. Couldn’t be happier with the result.”
                    </p>
                    <div className='mt-8'>
                      <div className="flex justify-center text-2xl gap-2 text-yellow-400">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                      <h4 className="card-title mt-5 text-4xl font-semibold">Lukan Depina</h4>
                      <h6 className='mt-3 text-2xl'>Ceo And Head Of Idea</h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" rounded-3xl grid grid-cols-3 w-[1080px] h-[420px] px-10 items-center bg-gray-800">
                  <div>
                    <Image className='w-full' src="/teacher-4.png" width={300} height={360} alt='teacher-4.png' />
                  </div>
                  <div className="col-span-2 text-center">
                    <p className="text-3xl italic">
                      “Masud was outstanding from start to finish. He was professional, helpful, and delivered a high-quality website ahead of schedule and within budget. Couldn’t be happier with the result.”
                    </p>
                    <div className='mt-8'>
                      <div className="flex justify-center text-2xl gap-2 text-yellow-400">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                      <h4 className="card-title mt-5 text-4xl font-semibold">Lukan Depina</h4>
                      <h6 className='mt-3 text-2xl'>Ceo And Head Of Idea</h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Studentsay