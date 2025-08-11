"use client"
import React, { useEffect, useState } from 'react';

const Skill = () => {
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  const [percentage3, setPercentage3] = useState(0);
  const [percentage4, setPercentage4] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (percentage1 < 150) {
        setPercentage1(percentage1 + 1);
      }
      if (percentage2 < 350) {
        setPercentage2(percentage2 + 1);
      }
      if (percentage3 < 35) {
        setPercentage3(percentage3 + 1);
      }
      if (percentage4 < 302) {
        setPercentage4(percentage4 + 1);
      }
    }, 50);
  }, [percentage2]);

  return (
    <section className='py-30 mt-30 bg-gray-400/10'>
      <div className=' container'>
        <div className='skill  rounded-2xl grid grid-cols-4 gap-20 justify-around'>
          <div className="text-center p-5 bg-white rounded-2xl">
            <h4 className='text-teal-600 text-7xl font-bold'>
              {percentage1}+
            </h4>
            <p className="font-bold text-4xl mt-3 uppercase">Win Awards</p>
          </div>
          <div className="text-center p-5 bg-white rounded-2xl">
            <h4 className='text-teal-600 text-7xl font-bold'>
              {percentage2}+
            </h4>
            <p className="font-bold text-4xl mt-3 uppercase">Our Students</p>
          </div>
          <div className="text-center p-5 bg-white rounded-2xl">
            <h4 className='text-teal-600 text-7xl font-bold'>
              {percentage3}+
            </h4>
            <p className="font-bold text-4xl mt-3 uppercase">Skilled Lecturers</p>
          </div>
          <div className="text-center p-5 bg-white rounded-2xl">
            <h4 className='text-teal-600 text-7xl font-bold'>
              {percentage4}+
            </h4>
            <p className="font-bold text-4xl mt-3 uppercase">Happy Students</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skill