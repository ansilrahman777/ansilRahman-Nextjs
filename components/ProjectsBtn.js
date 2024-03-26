import Image from 'next/image'

import Link from 'next/link'

import {HiArrowRight} from 'react-icons/hi2'


const ProjectsBtn = () => {
  return(
    <div className="mx-auto xl:mx-0 relative">
      <Link 
        href={'/work'}
        className=' w-[180px] h-[180px] bg-circleStar bg-cover bg-center bg-no-repeat group flex justify-center items-center'
      >
        <Image 
          src={'/rounded-text.png'} alt=""  
          width={140} height={140} 
          className='animate-spin-slow w-full h-full max-w-[141px] max-h-[148px] absolute z-10'
        />
        <HiArrowRight 
          className='text-4xl group-hover:translate-x-2 transition-all duration-300 z-20'
        />
      </Link>
    </div>
  )
};

export default ProjectsBtn;
