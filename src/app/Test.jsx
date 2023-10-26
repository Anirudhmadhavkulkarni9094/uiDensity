"use client"

import React from 'react'
import {motion} from 'framer-motion'
function Test() {
  return (
    <div className='text-center m-20'>
        <style>
@import url('https://fonts.googleapis.com/css2?family=Cedarville+Cursive&display=swap');
</style>
        <h1 className='text-xl font-semibold m-5'>We take privacy seriously</h1>
        <h1 className='text-3xl font-bold m-5'>Before you get started</h1>
        <h1 className='text-xl font-semibold text-gray-600 w-1/2 m-auto'>"We won't share your answers with anyone (and won't ever tell you which friends said what about you)"</h1>
        <h2 className='font-bold'>With love <span className='text-3xl font-cursive'>Jerum Ahod</span></h2>
        <motion.button className='px-5 py-2 bg-black mt-10 text-white text-xl rounded-xl'
            initial = {{scale : 0}}
            whileInView={{scale : 1}}
        >Start test</motion.button>
        <h1 className='text-lg text-gray-600 font-semibold m-5'>Take only 5 minutes</h1>
        
    </div>
  )
}

export default Test