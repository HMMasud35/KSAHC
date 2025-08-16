import React from 'react'
import Image from 'next/image'
import Skill from '../Component/Skill'
import Teachers from '../Component/Teachers'
import Studentsay from '../Component/Studentsay'

const About = () => {
  return (
    <section>
      <div className="bg-[url(/photo-5.jpeg)] bg-no-repeat bg-center bg-cover relative">
        <div className="container">
          <div className='h-100 py-10'>
            <div className='w-60 h-65 bg-white border-6 border-gray-400 overflow-hidden ml-70 mt-10'>
              <Image width={420} height={480} src="/teacher/princepal.png" alt='princepal.png' />
            </div>
            <div className='bg-teal-600 h-80 w-200 rounded-t-3xl rounded-br-3xl p-10 border-b-6 border-r-6 border-white absolute -bottom-40 right-50'>
              <h2 className='text-2xl text-white font-bold text-shadow-md text-shadow-black mb-3'>কালকিনি সৈয়দ আবুল হোসেন কলেজে স্বাগতম....</h2>
              <p className="leading-8 text-justify text-xl text-white">
                কালকিনি সৈয়দ আবুল হোসেন কলেজ মাদারীপুর জেলার কালকিনি উপজেলার একটি এমপিও ভুক্ত কলেজ। অনগ্রসর জনগোষ্ঠীর উন্নয়নের লক্ষ্যে  কয়েকজন শিক্ষানুরাগী ব্যক্তির উদ্যোগে ১ জুলাই ১৯৭২ খ্রিষ্টাব্দে একাদশ বিজ্ঞান, বাণিজ্য ও মানবিক বিভাগ নিয়ে বেসরকারিরূপে কালকিনি সৈয়দ আবুল হোসেন কলেজ  প্রতিষ্ঠিত হয়। বর্তমানে কলেজে ১২টি বিষয়ে অনার্স, ৩ টি বিষয়ে মাস্টার্স ও ডিগ্রি (পাস) কের্সে (বি.এ /বি.এস.এস/বি.এস.সি এবং বি.বি. এস) বিষয়ে পাঠদান করা হয়।
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-gray-950 pt-50 pb-30'>
        <div className="container">
          <div className='relative p-10 rounded-br-4xl border-r-4 border-teal-600 after:content-[""] after:absolute after:top-0 after:left-10 after:h-3 after:w-50 after:bg-teal-600 after:rounded-full before:content-[""] before:absolute bofore:top-0 before:left-0 before:h-50 before:w-3 before:bg-teal-600 before:rounded-full'>
            <p className='text-xl leading-8 text-justify text-white'>কালকিনি সৈয়দ আবুল হোসেন কলেজ  কালকিনি উপজেলা  অবস্থিত। যার অবস্থান শহরের প্রবেশ মুখেই অত্যন্ত মনোরম পরিবেশে কলেজটির অবস্থান। বর্তমানে কলেজটি ডিজিটাল ক্যাম্পাস নামে পরিচিত। অত্র কলেজের জমির পরিমাণ ৭ একর। এই জমির বিভিন্ন অংশে প্রতিষ্ঠানের সাথে সম্পর্কিত বিভিন্ন অবকাঠামো নির্মিত হয়েছে। কালকিনি সৈয়দ আবুল হোসেন কলেজে ১টি প্রশাসনিক ভবন, ৩টি একাডেমিক ভবন, ১টি লাইব্রেরি ভবন, ১টি বিজ্ঞান ভবন ,১ টি আই.সি.টি ভবন ও ১টি মসজিদ রয়েছে। ছাত্রদের জন্য ১ টি ছাত্রাবাস ও ছাত্রীদের জন্য ১টি ছাত্রীনিবাস । শিক্ষার্থীদের নিরাপত্তা ও শৃঙ্গলা বজায় রাখার জন্য সমগ্র ক্যাম্পসে সি.সি ক্যামেরার আয়ত্তে রয়েছে। একাডেমিক কার্যক্রমের পাশাপাশি জাতীয় ও আন্তর্জাতিক বিভিন্ন অনুষ্ঠান উদযাপন করার জন্য হল রুম ছাড়াও বিশাল মাঠ এবং মাঠ সংলগ্ন মঞ্চ স্থাপন করা হয়েছে।  বৈষম্যহীন বর্তমান বাংলাদেশের শিক্ষা, প্রযুক্তি ও অবকাঠামো খাতে ঐতিহ্যবাহী এই শিক্ষা প্রতিষ্ঠান গুরুত্বপূর্ণ ভূমিকা পালন করে যাচ্ছে, যা বাংলাদেশের ইতিবাচক পরিবর্তনকে আরও তরান্বিত করবে। আমরা দক্ষিণ বাংলাদেশের শিক্ষাক্ষেত্রে অধিকতর উন্নয়নে সর্বদা বদ্ধপরিকর।</p>
          </div>
        </div>
      </div>
      <Skill />
      <Teachers />
      <Studentsay />
    </section>
  )
}

export default About