"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
function Home() {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 bg-violet-200 rounded-3xl p-4">
      <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      <div className="flex flex-col gap-10 justify-center items-center">
        <div className='w-2/3'>
          <p className='text-xl font-semibold'>Ahead app</p>
          <h1 className='text-5xl font-bold'>Master your life by mastering your emotions</h1>
        </div>
        <div>
          <div className="flex items-center ">
            <button className="bg-black text-white px-4 py-2 rounded-md flex gap-5 items-center">
              <i class="fa fa-apple" style={{fontSize:"30px;color:white"}}></i>
              <div>
                <h1 className='text-xs'>Download on the</h1>
                <h1 className='text-lg font-bold'>App store</h1>
              </div>
            </button>
            <div className="ml-4 font-sans">
              <div className="text-yellow-500 text-2xl">&#9733; &#9733; &#9733; &#9733; &#9733;</div>
              <h1 className='text-gray-600'>100+ AppStore reviews</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-screen flex items-center justify-center">
          <motion.div className="absolute z-50  ">
            <Image src="/Iphone.png" alt="Iphone" width={160} height={160} />
          </motion.div>
          <motion.div className="absolute z-40 ">
            <Image src="/Home.png" alt="Home" width={240} height={240} />
          </motion.div>
          <motion.div className="absolute z-20"
            initial={{ rotate: "-10deg" }}
            whileInView={{ rotate: "0deg" }}
            transition={{duration : 5 , type : "spring" , damping : 3}}
          >
            <Image src="/home-outline.png" alt="Home Outline" width={400} height={300} />
          </motion.div>
    </div>
    </div>
  )
}

export default Home