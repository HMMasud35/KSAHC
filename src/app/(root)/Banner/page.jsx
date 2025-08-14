import Slider from './Component/Slider'
import Image from 'next/image';

const Banner = () => {

  return (
    <section>
      <Slider />
      <div className="container">
        <div className="justify-between items-center absolute top-70 z-10">
          <div className='bg-black/20 w-217 p-10 '>
            <h1 className=' text-6xl font-oswald uppercase leading-17 font-extrabold text-white relative '>কালকিনি  <br/><span className='text-teal-400 [text-shadow:_0_0px_3px_rgb(0_0_0)]'>সৈয়দ আবুল হোসেন</span> কলেজ</h1>
            <p className='mt-5 w-190 text-justify text-lg text-white/70 relative left-5 after:w-2 after:h-20 after:bg-teal-600 after:absolute after:top-1.5 after:left-[-20] after:rounded-full'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore in id recusandae kfsdkf sdkfjsd sdfksd perspiciatis sit fugit molestias velit  consequuntur et quo, esse in repellendus nihil voluptatem. Fugit, qui.</p>
            <div className='flex gap-5 mt-8'>
              <button className='btn'>Hire me</button>
              <button className='btn'>Hire me</button>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-4 gap-10 justify-between absolute -bottom-20 right-10 z-10 '>
          <div className='w-80 h-50 rounded-t-4xl p-5 rounded-bl-4xl bg-white grid grid-rows-2 gap-3'>
            <div className='flex justify-between items-center'>
              <div className='w-20 h-20 rounded-4xl bg-teal-600 p-5 flex justify-center items-center '>
                <Image className='w-15 h-12' width={800} height={800} src="/scholarship.png" alt='scholarship.png' />
              </div>
              <h4 className='text-teal-600 text-6xl font-extrabold '>01</h4>
            </div>
            <div>
              <h3 className="text-xl font-bold">Scholarship Facility</h3>
              <p>Lorem ipsum dolor sit amet conseetur adipisicing.</p>
            </div>
          </div>
          <div className='w-80 h-50 rounded-t-4xl p-5 rounded-bl-4xl bg-white grid grid-rows-2 gap-3'>
            <div className='flex justify-between items-center'>
              <div className='w-20 h-20 rounded-4xl bg-teal-600 flex justify-center items-center '>
                <Image className='w-12 h-12' width={800} height={800} src="/lecturers.png" alt='lecturers.png' />
              </div>
              <h4 className='text-teal-600 text-6xl font-extrabold '>02</h4>
            </div>
            <div>
              <h3 className="text-xl font-bold">Skilled Lecturers</h3>
              <p>Lorem ipsum dolor sit amet conseetur adipisicing.</p>
            </div>
          </div>
          <div className='w-80 h-50 rounded-t-4xl p-5 rounded-bl-4xl bg-white grid grid-rows-2 gap-3'>
            <div className='flex justify-between items-center'>
              <div className='w-20 h-20 rounded-4xl bg-teal-600 p-5 flex justify-center items-center '>
                <Image className='w-15 h-12' width={800} height={800} src="/library.png" alt='library.png' />
              </div>
              <h4 className='text-teal-600 text-6xl font-extrabold '>03</h4>
            </div>
            <div>
              <h3 className="text-xl font-bold">Book Library Facility</h3>
              <p>Lorem ipsum dolor sit amet conseetur adipisicing.</p>
            </div>
          </div>
          <div className='w-80 h-50 rounded-t-4xl p-5 rounded-bl-4xl bg-white grid grid-rows-2 gap-3'>
            <div className='flex justify-between items-center'>
              <div className='w-20 h-20 rounded-4xl bg-teal-600 p-5 flex justify-center items-center '>
                <Image className='w-15 h-12' width={800} height={800} src="/price.png" alt='library.png' />
              </div>
              <h4 className='text-teal-600 text-6xl font-extrabold '>04</h4>
            </div>
            <div>
              <h3 className="text-xl font-bold">Affordable Price</h3>
              <p>Lorem ipsum dolor sit amet conseetur adipisicing.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Banner
