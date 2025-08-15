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
      <Swiper ref={sliderRef} autoplay={{ delay: 4000 }} modules={[Autoplay]}>
        <div className='w-full h-screen absolute bg-neutral-900/60 top-0 z-10'></div>
        <SwiperSlide>
          <Image className='w-full h-screen' width={600} height={600} src="/image-3.jpeg" alt='image-3.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <Image className='w-full h-screen' width={600} height={600} src="/image-2.jpeg" alt='image-2.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <Image className='w-full h-screen' width={600} height={600} src="/image-1.jpeg" alt='image-1.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <Image className='w-full h-screen' width={600} height={600} src="/image-4.jpeg" alt='image-4.jpg' />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slider