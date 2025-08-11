"use client"

import React, { useCallback, useRef } from 'react'
import Image from 'next/image'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay } from 'swiper/modules';

const Slider = () => {
  const sliderRef = useRef(null)

  return (
    <div className="w-full m-auto">
      <Swiper ref={sliderRef} autoplay={{ delay: 4000, pauseOnMouseEnter: true }} modules={[Autoplay]}>
        <div className='w-full h-screen absolute bg-neutral-900/70 top-0 z-10'></div>
        <SwiperSlide>
          <Image className='w-full h-screen' width={600} height={600} src="/slider-1.jpg" alt='slider-1.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <Image className='w-full h-screen ' width={600} height={600} src="/slider-2.jpg" alt='slider-2.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <Image className='w-full h-screen ' width={600} height={600} src="/slider-3.jpg" alt='slider-3.jpg' />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slider