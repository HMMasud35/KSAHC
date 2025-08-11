import Image from 'next/image';

const Gallery = () => {

  return (
    <section className='py-30'>
      <div className="container">
        <div>
          <div className='text-center'>
            <h5 className='text-teal-600 text-2xl font-semibold uppercase mb-3'>Gallery</h5>
            <h2 className='text-white text-6xl font-bold uppercase leading-15 mb-15'> Our Photo <span className='text-teal-600'>Gallery</span></h2>
            <p className='mb-15 w-200 text-justify text-lg text-white/70 relative left-5 after:w-20 after:h-1.5 after:bg-teal-600 after:absolute after:-top-3 after:left-0 after:rounded-full'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore in id recusandae perspiciatis sit fugit molestias velit  consequuntur et quo, esse in repellendus nihil voluptatem. Fugit, qui.</p>
          </div>
          <div>
            <div className='grid grid-cols-3 grid-rows-6 gap-8 h-400'>
              <Image className='w-full h-full row-span-2 rounded-l-4xl rounded-tr-4xl' width={800} height={800} src="/slider-1.jpg" alt='scholarship.png' />
              <Image className='w-full h-full rounded-t-4xl' width={800} height={800} src="/slider-2.jpg" alt='scholarship.png' />
              <Image className='w-full h-full row-span-2 rounded-tl-4xl rounded-r-4xl rounded-br-4xl' width={800} height={800} src="/slider-3.jpg" alt='scholarship.png' />
              <Image className='w-full h-full row-span-2 rounded-br-4xl' width={800} height={800} src="/student-1.png" alt='scholarship.png' />
              <Image className='w-full h-full rounded-l-4xl' width={800} height={800} src="/student-2.png" alt='scholarship.png' />
              <Image className='w-full h-full row-span-3 rounded-r-4xl' width={800} height={800} src="/student-3.png" alt='scholarship.png' />
              <Image className='w-full h-full row-span-2 rounded-l-4xl rounded-br-4xl' width={800} height={800} src="/teacher-1.jpg" alt='scholarship.png' />
              <Image className='w-full h-full row-span-3 rounded-bl-4xl rounded-r-4xl' width={800} height={800} src="/teacher-2.png" alt='scholarship.png' />
              <Image className='w-full h-full rounded-l-4xl rounded-br-4xl' width={800} height={800} src="/teacher-3.png" alt='scholarship.png' />
              <Image className='w-full h-full row-span-2 rounded-bl-4xl rounded-r-4xl' width={800} height={800} src="/teacher-4.png" alt='scholarship.png' />
            </div>
            <button className='btn mt-10 block m-auto'>More Images</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
