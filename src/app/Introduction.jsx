import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Introduction() {
  return (
    <div className='flex relative h-screen rounded-3xl justify-around items-center p-10' style={{backgroundColor : "#fef7f2" }}>
      <div className='flex flex-col z-10'>
        <motion.div className='flex flex-col font-bold'
            initial = {{transform : "translateX(-100%)"}}
            whileInView={{transform : "translateX(0)"}}
            transition={{duration : 1}}
        >
          <p className='text-xl'>Built out of frustration</p>
          <h1 className='text-5xl'>Meet the ahead app</h1>
        </motion.div>
        <div className="relative top-10 flex justify-center">
            <Image src="/ghost.png" alt="Iphone" width={170} height={170} className='absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' />
            <motion.div
                className=''
                initial={{ rotate: "-90deg" }}
                whileInView={{ rotate:"0deg" }}
                transition={{duration : 1, type : "spring" , damping : 9}}
                
            >
            <Image src="/ghost-outline.png" alt="Outline" width={300} height={300} />
          </motion.div>
          
        </div>
      </div>
      <div className='p-8 w-1/2 flex flex-col gap-10 text-2xl font-semibold text-gray-400 font-sans'>
        <h1 className='z-20'>A personalized pocket coach that provides bite-sized, science-driven tools to boost emotional intelligence.</h1>
        <h1>Think of it as a pocket cheerleader towards a better, more fulfilling life.</h1>
        
        <motion.div
            className='absolute z-0'
            initial={{ right: 0 }}
            whileInView={{
                left: -180,
                bottom: [2, 0], // First move from the current position (0) to 2, which is the down movement
            }}
            transition={{ duration: 6  , type: "spring" , damping : 8}}
            >
            <Image src='/ghost-bubble.png' width={500} height={450}></Image>
        </motion.div>
        <motion.div
            initial = {{transform : "translateY(100%)"}}
            whileInView={{transform : "translateY(0%)"}}
        >
            <Image src='/leaf.png' width={100} height={100}></Image>
        </motion.div>
        <motion.div className='absolute'
            initial = {{right : 0}}
            whileInView={{right : 300 , zIndex : 10 , opacity : 0.5 }}
        >
            <Image src='/dot.png' width={100} height={100}></Image>
        </motion.div>
      </div>
      
    </div>
  );
}
