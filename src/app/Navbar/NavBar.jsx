import Link from 'next/link';
import React from 'react';

import Image from 'next/image';

function NavBar() {
  return (
    <div className='flex justify-around p-5 items-center overflow-hidden'>
      <div className='flex items-center'>
        <Image src='/logo.png' className='w-12 h-12 sm:w-14 h-14 shadow-xl rounded-xl' width={50} height={50} />
      </div>
      <div className='hidden sm:flex gap-10 font-mono font-semibold'>
        <Link className='font-mono font-semibold' href='/Emotions' >Emotions</Link>
        <Link className='font-mono font-semibold' href='/manifesto'>Manifesto</Link>
        <Link className='font-mono font-semibold' href='/self-awareness-test'>Self awareness test</Link>
        <Link className='font-mono font-semibold' href='/work-with-us'>Work with us</Link>
      </div>
      <button className='hidden sm:flex p-2 px-4 sm:p-3 sm:px-6 rounded-full bg-black text-white font-bold'>
        Download App
      </button>
    </div>
  );
}

export default NavBar;
