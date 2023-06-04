import React from 'react'
import posImg from '../public/assets/projects/pos1.png'
import cbtImg from '../public/assets/projects/cbt.jpg'
import ProjectItem from './ProjectItem'
const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto p-2 py-16'>
        <p className='text-xl uppercase tracking-widest text-[#5651e5]'>Projects</p>
        <h2 className='py-4'>What i've build</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Point Of Sales'
            description='React Js'
            backgroundImg={posImg}
            urlGit='https://github.com/anto1290/backend-pos'
            url='/property'
          />
          <ProjectItem
            title='Computer Based Test'
            description='Codeignater 3'
            backgroundImg={cbtImg}
            urlGit='https://github.com/anto1290/cbt'
            url='/cbt'
          />
        </div>
      </div>
    </div>
  )
}

export default Projects
