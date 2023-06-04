import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='text-xl uppercase text-[#5651e5] py-2'>About</p>
          <h1 className='py-4'>Who i am</h1>
          <p className='py-4 text-gray-600'>
            saya adalah seorang programmer. saya belajar sejak tahun 2015. pertama kali saya belajar mengenal php Mysql dan saya juga megembangkan diri saya untuk belajar javascript dan Nodejs. saat ini saya mimiliki pegalaman pembuatan beberapa sistem website.</p>
        </div>
        <div>
          <Image className='rounded-xl' src='/assets/muhammadnurwibawanto.jpg' alt='Muhammad Nurwibawnato' width={500} height={400} />
        </div>
      </div>

    </div>
  )
}

export default About
