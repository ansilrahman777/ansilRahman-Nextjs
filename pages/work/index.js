import  WorkSlider from '../../components/WorkSlider'
import Bulb from '../../components/Bulb'
import Circles from '../../components/Circles'

import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'

const Work = () => {
  return (
  <div className='h-full mt-16 flex items-center '>
    <Circles/>
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row gap-x-8">
        <div className="text-center flex lg:mt-12 flex-col lg:text-left mb-4">
          <motion.h2 
            variants={fadeIn('up',0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="h2 text-[43px] ">
            My Work <span className='text-accent'>.</span>
          </motion.h2>
          <motion.p 
            variants={fadeIn('up',0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='mb-4 max-w-[400px] mx-auto lg:mx-0 text-justify hidden lg:block'>
            Service is what life is all about.Great acts are made up of small deeds.
            Goodness is the only investment that never fails.
          </motion.p>
        </div>
        
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

export default Work;
