import  WorkSlider from '../../components/WorkSlider'
import Bulb from '../../components/Bulb'
import Circles from '../../components/Circles'

import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'

const Project = () => {
  return (
  <div className='h-full mt-16 flex items-center '>
    <Circles/>
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row gap-x-8">
        <motion.div 
          variants={fadeIn('down',0.6)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className="w-full xl:mt-14 xl:max-w-[60%]">
          <WorkSlider/>
        </motion.div>
      </div>
    </div>
    <Bulb/>
  </div>
  )
};

export default Project;
