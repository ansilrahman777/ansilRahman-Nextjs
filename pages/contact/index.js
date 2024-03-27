import Circles from '../../components/Circles'

import {BsArrowRight} from 'react-icons/bs'

import {motion} from 'framer-motion'

import {fadeIn} from '../../variants'

const Contact = () => {
  return (
    <div className='h-full bg-primary/30'>
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center
      justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px] ">

          <motion.h2 
            variants={fadeIn('up',0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="h2 text-center mb-12"
          >
            Let's <span className='text-accent'>connect.</span>
          </motion.h2>

          <motion.form 
            variants={fadeIn('up',0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex-1 flex flex-col gap-6 w-full mx-auto'>
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                id="id"
                name="name"
                placeholder="Full Name"
                className="input"
              />

              <input
                type="email"
                id="id"
                name="name"
                placeholder="Email"
                className="input"
              />

            </div>
              
            <input
              type="text"
              id="id"
              name="name"
              placeholder="Subject"
              className="input"
            />
            <textarea placeholder='Message' className='textarea'></textarea>
            <button className="btn border rounded-full border-white/50 max-w-[170px]
              px-8 transiton-all duration-300 flex items-center justify-center
              overflow-hidden hover:border-accent group">
              <span className='-translate-y-[120%] opacity-0 group-hover:flex
              group-hover:-translate-y-0 group-hover:opacity-100 transition-all
              duration-300 absolute text-[22px]'>
                Let's talk
              </span>
              <BsArrowRight/>
            </button>
            
          </motion.form>

        </div>
      </div>
    </div>
  )
};

export default Contact;
