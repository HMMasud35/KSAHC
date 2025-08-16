"use client"
import React, { useEffect, useState } from 'react';

const Skill = () => {
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  const [percentage3, setPercentage3] = useState(0);
  const [percentage4, setPercentage4] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (percentage1 < 250) {
        setPercentage1(percentage1 + 1);
      }
      if (percentage2 < 350) {
        setPercentage2(percentage2 + 1);
      }
      if (percentage3 < 60) {
        setPercentage3(percentage3 + 1);
      }
      if (percentage4 < 302) {
        setPercentage4(percentage4 + 1);
      }
    }, 50);
  }, [percentage2]);

  return (
    <section className='py-30'>
      <div className=' container'>
        <div className='skill  rounded-2xl grid grid-cols-4 gap-20 justify-around'>
          <div className="text-center p-5 bg-white rounded-2xl shadow-[5px_8px_10px_0px_rgb(0_30_30/0.8)]">
            <h4 className='text-teal-600 text-7xl font-bold'>
              {percentage1}+
            </h4>
            <p className="font-bold text-4xl mt-3 uppercase">পুরষ্কৃত</p>
          </div>
          <div className="text-center p-5 bg-white rounded-2xl shadow-[5px_8px_10px_0px_rgb(0_30_30/0.8)]">
            <h4 className='text-teal-600 text-7xl font-bold'>
              {percentage2}+
            </h4>
            <p className="font-bold text-4xl mt-3 uppercase">ছাত্র-ছাত্রী</p>
          </div>
          <div className="text-center p-5 bg-white rounded-2xl shadow-[5px_8px_10px_0px_rgb(0_30_30/0.8)]">
            <h4 className='text-teal-600 text-7xl font-bold'>
              {percentage3}+
            </h4>
            <p className="font-bold text-4xl mt-3 uppercase">দক্ষ প্রভাষক</p>
          </div>
          <div className="text-center p-5 bg-white rounded-2xl shadow-[5px_8px_10px_0px_rgb(0_30_30/0.8)]">
            <h4 className='text-teal-600 text-7xl font-bold'>
              {percentage4}+
            </h4>
            <p className="font-bold text-4xl mt-3 uppercase">সফল <br /> ছাত্র-ছাত্রী</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skill