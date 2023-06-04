import Image from "next/image"
import Link from "next/link"

const ProjectItem = ({ title, backgroundImg, description, url, urlGit }) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]' >
      <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt='property' />
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-white tracking-wide text-center'>{title}</h3>
        <p className='pb-4 pt-2 text-white text-center'>{description}</p>
        <div className="grid grid-cols-2 gap-5">
          <Link href={urlGit}>
            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-base cursor-pointer'>Git Hub</p>
          </Link>

          <Link href={url}>
            <p className='text-center py-3 px-2 rounded-lg bg-white text-gray-700 font-bold text-base cursor-pointer'>More Details</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem
