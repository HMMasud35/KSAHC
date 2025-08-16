import React from 'react'
import Image from 'next/image'
import S_Gallery from '../Component/S_Gallery'

const P_Gallery = () => {
  return (
    <section>
      <div className="bg-[url(/photo-5.jpeg)] bg-no-repeat bg-center bg-cover relative py-10">
        <div className="container">
          <div className='p-10 bg-black/60 w-200'>
            <h5 className='text-teal-600 text-2xl font-semibold uppercase mb-3'>গ্যালারী</h5>
            <h2 className='text-white text-6xl font-bold uppercase leading-15 mb-8'> আমাদের ফটো<span className='text-teal-600'> গ্যালারী</span></h2>
            <p className='text-justify w-170 text-lg text-white/80 relative left-5 after:w-1.5 after:h-20 after:bg-teal-600 after:absolute after:top-1 after:-left-5 after:rounded-full'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore in id recusandae perspiciatis sit fugit molestias velit  consequuntur et quo, esse in repellendus nihil voluptatem. Fugit, qui.</p>
          </div>
        </div>
      </div>
      <div className='py-30 bg-gray-950'>
        <div className="container">
          <div>
            <div>
              <div className='grid grid-cols-3 grid-rows-4 gap-8'>
                <Image className='w-full h-full row-span-2 col-span-2 rounded-l-4xl rounded-tr-4xl' width={800} height={800} src="/photo-3.jpeg" alt='photo-3.jpeg' />
                <Image className='w-full h-full row-span-2 rounded-t-4xl rounded-br-4xl' width={800} height={800} src="/photo-4.jpeg" alt='photo-4.jpeg' />
                <Image className='w-full h-full row-span-2 rounded-l-4xl rounded-br-4xl' width={800} height={800} src="/photo-1.jpeg" alt='photo-1.jpeg' />
                <Image className='w-full h-full row-span-2 rounded-b-4xl ' width={800} height={800} src="/photo-5.jpeg" alt='photo-5.jpeg' />
                <Image className='w-full h-full row-span-2 rounded-bl-4xl rounded-r-4xl' width={800} height={800} src="/photo-2.jpeg" alt='photo-2.jpeg' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default P_Gallery