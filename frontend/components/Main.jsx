import Link from 'next/link'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
  return (
    <div className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm text-gray-600 tracking-widest'>Let's Build Something Together</p>
          <h1 className='py-4 text-gray-700'>Hi, I'm <span className='text-[#5651e5]'>Anto</span></h1>
          <h1 className='py-2 text-gray-700'>
            Full Stack Developer
          </h1>
          <Link href='/cv' target='blank' className='py-4 px-2 ml-5 hover:shadow-lg bg-gradient-to-r from-[#00B4DB] to-[#0083B0] rounded-xl uppercase text-white'>
            Download CV
          </Link>
          <Link href='#contact'>
            <button className='py-4 px-2 ml-5 shadow-none hover:shadow-lg shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white'>Let's Talk</button>
          </Link>
          <div className='flex justify-between items-center m-auto max-w-[330px] py-4'>
            <Link href='https://www.linkedin.com/in/muhammad-nurwibawanto-161838119'>
              <div className="rounded-full shadow-gray-400 p-6 shadow-lg hover:bg-sky-500 hover:text-white hover:scale-110 cursor-pointer ease-in duration-500">
                <FaLinkedinIn />
              </div>
            </Link>
            <Link href='https://github.com/anto1290'>
              <div className="rounded-full shadow-gray-400 p-6 shadow-lg hover:bg-sky-500 hover:text-white  hover:scale-110 cursor-pointer ease-in duration-500">
                <FaGithub />
              </div>
            </Link>
            <Link href="mailto:mnurwibawanto@gmail.com">
              <div className="rounded-full shadow-gray-400 p-6 shadow-lg hover:bg-sky-500 hover:text-white hover:scale-110 cursor-pointer ease-in duration-500">
                <AiOutlineMail />
              </div>
            </Link>
            <Link href="https://www.instagram.com/muhammadnurwibawanto">
              <div className="rounded-full shadow-gray-400 p-6 shadow-lg hover:bg-sky-500 hover:text-white hover:scale-110 cursor-pointer ease-in duration-500">
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
