import Link from "next/link"
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { useEffect, useState } from "react"
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  }
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false)
      }
    }
    window.addEventListener('scroll', handleShadow);
  }, [])
  return (
    <div className={shadow ? 'fixed w-full bg-white h-20 shadow-xl z-[100]' : 'fixed bg-white w-full h-20 z-[100]'}>
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <div >
          <h3 className="uppercase"><span className="text-blue-900">Muhammad</span> Nurwibawanto</h3>
        </div>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b-2 p-2 hover:border-b-[#5651e5]" >Home</li>
            </Link>
            <Link href="/blog">
              <li className="ml-10 text-sm uppercase hover:border-b-2 p-2 hover:border-b-[#5651e5]" >Blog</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b-2 p-2 hover:border-b-[#5651e5]" >About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b-2 p-2 hover:border-b-[#5651e5]" >Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b-2 p-2 hover:border-b-[#5651e5]" >Projects</li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b-2 p-2 hover:border-b-[#5651e5]" >Contact</li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div className={nav ? 'md:hidden fixed left-0 top-0 bg-black/70 w-full h-screen' : ''}>
        <div className={nav ?
          'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' :
          'fixed left-[-100%] top-0 ease-in duration-500'} >
          <div>
            <div className="flex w-full justify-between items-center">
              <h6 className="uppercase"><span className="text-blue-900">Muhammad</span> Nurwibawanto</h6>
              <div onClick={handleNav} className="rounded-full shadow-xl shadow-gray-400 p-3 cursor-pointer">
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let's Build Something Together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li className="py-4 text-sm" >Home</li>
              </Link>
              <Link href="/#about">
                <li className="py-4 text-sm" >About</li>
              </Link>
              <Link href="/#skills">
                <li className="py-4 text-sm" >Skills</li>
              </Link>
              <Link href="/#projects">
                <li className="py-4 text-sm" >Projects</li>
              </Link>
              <Link href="/#contact">
                <li className="py-4 text-sm" >Contact</li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5] ">
                let's connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-gray-400 p-4 shadow-lg  hover:scale-105 cursor-pointer ease-in duration-500">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-gray-400 p-4 shadow-lg hover:scale-105 cursor-pointer ease-in duration-500">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-gray-400 p-4 shadow-lg hover:scale-105 cursor-pointer ease-in duration-500">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-gray-400 p-4 shadow-lg hover:scale-105 cursor-pointer ease-in duration-500">
                  <BsFillPersonLinesFill />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
