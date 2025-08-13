import React from 'react'

const Contact = () => {
  return (
    <section>
      <div className="container">
        <div className="contact py-30 grid grid-flow-col grid-rows-5 gap-10">
          <iframe
            className='row-span-5 w-150 h-180 rounded-2xl border-10 border-gray-700'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
          />
          <div className='col-span-2 items-center'>
            <h3 className='text-6xl text-gray-950 uppercase [text-shadow:_0_0px_3px_rgb(0_501_80/0.6)] font-extrabold inline-flex'>contact us</h3>
            <h5 className='text-green-400 -mt-13 text-xl uppercase font-bold mb-1 [text-shadow:2px_3px_0px_rgba(0,_0,_0,_0.8)]'>explore the features</h5>
            <h2 className='text-6xl font-oswald uppercase -tracking-wide font-extrabold text-white '>get in one <span className='text-green-400'>tuch</span></h2>
          </div>
          <form className=" bg-sky-950/30 p-5 border-2 border-[#ffffff46] rounded-2xl col-span-2 row-span-4 text-white">
            <div className='grid grid-cols-2 gap-x-10 gap-y-5 grid-rows-2'>
              <div>
                <label
                  className="text-2xl text-white font-medium"
                  htmlFor="text"
                >
                  Full Name
                </label>
                <input

                  className="w-full rounded-lg border-2 border-[#ffffff46] text-white/80 h-12 bg-transparent text-md outline-none px-5 mt-4"
                  type="text"
                  id="text"
                  name="text"
                  placeholder='name'
                />
              </div>
              <div>
                <label
                  className="text-2xl text-white font-medium"
                  htmlFor="text"
                >
                  Email
                </label>
                <input

                  className="w-full rounded-lg border-2 border-[#ffffff46] text-white/80 h-12 bg-transparent text-md outline-none px-5 mt-4"
                  type="text"
                  id="text"
                  name="text"
                  placeholder='support@gmail.com'
                />
              </div>
              <div>
                <label
                  className="text-2xl text-white font-medium"
                  htmlFor="number"
                >
                  Phone
                </label>
                <input

                  className="w-full rounded-lg border-2 border-[#ffffff46] text-white/80 h-12 bg-transparent text-md outline-none px-5 mt-4"
                  type="number"
                  id="number"
                  name="number"
                  placeholder='+880 1234 567 890'
                />
              </div>
              <div>
                <label
                  className="text-2xl text-white font-medium"
                  htmlFor="text"
                >
                  Subject
                </label>
                <input

                  className="w-full rounded-lg border-2 border-[#ffffff46] text-white/80 h-12 bg-transparent text-md outline-none px-5 mt-4"
                  type="text"
                  id="text"
                  name="text"
                  placeholder='Title'
                />
              </div>
            </div>
            <div className='mt-10'>
              <textarea

                className="w-full rounded-lg border-2 border-[#ffffff46] text-white/80 h-40 bg-transparent text-md outline-none p-5"
                type="text"
                id="text"
                name="text"
                placeholder='Messege'
              />
            </div>
            <button
              type="submit"
              className="btn w-full mt-5 !text-4xl !font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact