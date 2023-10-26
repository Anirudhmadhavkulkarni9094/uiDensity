import React from 'react'
import { motion } from 'framer-motion'

function Rating() {
  return (
    <div className='p-20 bg-edf8fe rounded-2xl'>
        <div className='text-center'>
            <h1 className='font-semibold text-xl'>Let your friends, family, and co-workers (anonymously) rate your social skills.</h1>
            <h1 className='font-bold text-5xl'>Ever wondered what others think of you?</h1>
        </div>
        <div className='mx-20 pt-10'>
            <img src='/bar.png' className='m-auto w-full'></img>
        </div>
        <div className='flex text-xs mx-10 font-bold justify-between'>
            <motion.div
            initial = {{scale : 0}}
            whileInView={{scale : 1}}
            >
            <h1 className='w-56 m-2 text-sm  text-center'>Answer questions on your social skills</h1>
            </motion.div>
            <motion.div
            initial = {{scale : 0}}
            whileInView={{scale : 1}}
            
            >
            <h1 className='w-56 m-2 text-sm  text-center'>Let others anonymously answer the same questions about you</h1>
            </motion.div>
            <motion.div
            initial = {{scale : 0}}
            whileInView={{scale : 1}}
            
            >
            <h1 className='w-56 m-2 text-sm  text-center'>Find out where you and others see things the same way - and where not!</h1>
            </motion.div>
        </div>
        <img src='/timeline.png'></img>
    </div>
  )
}

export default Rating