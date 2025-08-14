"use client"
import Image from 'next/image'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { GrChapterNext } from "react-icons/gr";
import { GrChapterPrevious } from "react-icons/gr";



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay } from 'swiper/modules';
import { useCallback, useRef } from 'react';
// import Loading from '../../Lodding/page';

const Course = () => {
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
    <section >
      {/* <Loading/> */}
      <div className="container">
         <div className='w-200'>
            <h4 className='text-4 xl text-teal-600 font-bold mb-5 block pb-3 mr-12 border-teal-600'>বিভাগ সম্পর্কে</h4>
            <h2 className='text-white text-6xl font-bold uppercase leading-15 mb-10'>আমাদের শিক্ষা ব্যবস্থা <span className='text-teal-600'> অনুপ্রাণিত করবে</span></h2>
            <p className='text-2xl text-white/80 mb-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae ratione itaque debitis omnis sunt? Quam impedit corporis unde veritatis culpa!</p>
          </div>
        <div>
          <div>
            <Swiper
              ref={sliderRef}
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
              modules={[Autoplay]}
            >
              <SwiperSlide> <div className='text-white border-6 border-gray-700 rounded-2xl overflow-hidden h-120 text-center hover:bg-gray-800 relative group'>
                <div className='swiper-zoom-container' >
                  <Image className='w-120 h-120' width={420} height={480} src="/Department/islamic.png" alt='islamic.png' />
                </div>
                <div className='absolute bg-gray-950/70 -bottom-22 left-0 h-40 p-5 group-hover:bottom-0'>
                  <h4 className='text-white text-3xl font-bold uppercase'>ইসলামি ইতিহাস ও সংস্কৃতি</h4>
                  <p className='mt-5 text-xl text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum,ip</p>
                </div>
              </div></SwiperSlide>
              <SwiperSlide> <div className='text-white border-6 border-gray-700 rounded-2xl overflow-hidden h-120 text-center hover:bg-gray-800 relative group'>
                <div className='swiper-zoom-container' >
                  <Image className='w-120 h-120' width={450} height={350} src="/Department/political.png" alt='political.png' />
                </div>
                <div className='absolute bg-gray-950/70 -bottom-22 left-0 h-40 p-5 group-hover:bottom-0'>
                  <h4 className='text-white text-3xl font-bold uppercase'>রাজনৈতিক বিজ্ঞান</h4>
                  <p className='mt-5 text-xl text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum,ip</p>
                </div>
              </div></SwiperSlide>
              <SwiperSlide> <div className='text-white border-6 border-gray-700 rounded-2xl overflow-hidden h-120 text-center hover:bg-gray-800 relative group'>
                <div className='swiper-zoom-container' >
                  <Image className='w-120 h-120' width={450} height={350} src="/Department/accounting.png" alt='accounting.png' />
                </div>
                <div className='absolute bg-gray-950/70 -bottom-22 left-0 h-40 p-5 group-hover:bottom-0'>
                  <h4 className='text-white text-3xl font-bold uppercase'>হিসাবরক্ষণ</h4>
                  <p className='mt-5 text-xl text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum,ip</p>
                </div>
              </div></SwiperSlide>
              <SwiperSlide> <div className='text-white border-6 border-gray-700 rounded-2xl overflow-hidden h-120 text-center hover:bg-gray-800 relative group'>
                <div className='swiper-zoom-container' >
                  <Image className='w-120 h-120' width={450} height={350} src="/Department/marketing.png" alt='marketing.png' />
                </div>
                <div className='absolute bg-gray-950/70 -bottom-22 left-0 h-40 p-5 group-hover:bottom-0'>
                  <h4 className='text-white text-3xl font-bold uppercase'>মার্কেটিং</h4>
                  <p className='mt-5 text-xl text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum,ip</p>
                </div>
              </div></SwiperSlide>
              <SwiperSlide> <div className='text-white border-6 border-gray-700 rounded-2xl overflow-hidden h-120 text-center hover:bg-gray-800 relative group'>
                <div className='swiper-zoom-container' >
                  <Image className='w-120 h-120' width={450} height={350} src="/Department/geography.jpg" alt='geography.jpg' />
                </div>
                <div className='absolute bg-gray-950/70 -bottom-22 left-0 h-40 p-5 group-hover:bottom-0'>
                  <h4 className='text-white text-3xl font-bold uppercase'>ভূগোল এবং পরিবেশ</h4>
                  <p className='mt-5 text-xl text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum,ip</p>
                </div>
              </div></SwiperSlide>
              <SwiperSlide> <div className='text-white border-6 border-gray-700 rounded-2xl overflow-hidden h-120 text-center hover:bg-gray-800 relative group'>
                <div className='swiper-zoom-container' >
                  <Image className='w-120 h-120' width={450} height={350} src="/Department/social.png" alt='social.png' />
                </div>
                <div className='absolute bg-gray-950/70 -bottom-22 left-0 h-40 p-5 group-hover:bottom-0'>
                  <h4 className='text-white text-3xl font-bold uppercase'>সামাজিক কাজ</h4>
                  <p className='mt-5 text-xl text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum,ip</p>
                </div>
              </div></SwiperSlide>
              <SwiperSlide> <div className='text-white border-6 border-gray-700 rounded-2xl overflow-hidden h-120 text-center hover:bg-gray-800 relative group'>
                <div className='swiper-zoom-container' >
                  <Image className='w-120 h-120' width={450} height={350} src="/Department/management.png" alt='management.png' />
                </div>
                <div className='absolute bg-gray-950/70 -bottom-22 left-0 h-40 p-5 group-hover:bottom-0'>
                  <h4 className='text-white text-3xl font-bold uppercase'>ব্যবস্থাপনা</h4>
                  <p className='mt-5 text-xl text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum,ip</p>
                </div>
              </div></SwiperSlide>
              <SwiperSlide> <div className='text-white border-6 border-gray-700 rounded-2xl overflow-hidden h-120 text-center hover:bg-gray-800 relative group'>
                <div className='swiper-zoom-container' >
                  <Image className='w-120 h-120' width={450} height={350} src="/Department/economics.jpg" alt='economics.jpg' />
                </div>
                <div className='absolute bg-gray-950/70 -bottom-22 left-0 h-40 p-5 group-hover:bottom-0'>
                  <h4 className='text-white text-3xl font-bold uppercase'>অর্থনীতি</h4>
                  <p className='mt-5 text-xl text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum,ip</p>
                </div>
              </div></SwiperSlide>
              <SwiperSlide> <div className='text-white border-6 border-gray-700 rounded-2xl overflow-hidden h-120 text-center hover:bg-gray-800 relative group'>
                <div className='swiper-zoom-container' >
                  <Image className='w-120 h-120' width={450} height={350} src="/Department/mathematics.jpg" alt='mathematics.jpg' />
                </div>
                <div className='absolute bg-gray-950/70 -bottom-22 left-0 h-40 p-5 group-hover:bottom-0'>
                  <h4 className='text-white text-3xl font-bold uppercase'>গণিত</h4>
                  <p className='mt-5 text-xl text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum,ip</p>
                </div>
              </div></SwiperSlide>
            </Swiper>
          </div>
          <div className='relative'>
            <button onClick={handlePrev} className="prev absolute top-5 right-30">
              <div className="w-20 flex justify-between items-center h-[50px] rounded-md border-2 border-teal-600 hover:bg-teal-600/20">
                <GrChapterPrevious className="text-2xl m-auto text-teal-600"/>
              </div>
            </button>
            <button onClick={handleNext} className="next absolute top-5 right-4">
              <div className="w-20 flex justify-between items-center h-[50px] rounded-md border-2 border-teal-600 hover:bg-teal-600/20">
                <GrChapterNext className="text-2xl m-auto text-teal-600" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Course