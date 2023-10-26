import Link from 'next/link';
import React from 'react';
import logo from '../../public/logo.png';
import Image from 'next/image';

function NavBar() {
  return (
    <div className='flex justify-around p-5 items-center overflow-hidden'>
      <div className='flex items-center'>
        <Image src={logo} className='w-12 h-12 sm:w-14 h-14 shadow-xl rounded-xl' />
      </div>
      <div className='hidden sm:flex gap-10'>
        <Link href='/Emotions'>Emotions</Link>
        <Link href='/manifesto'>Manifesto</Link>
        <Link href='/self-awareness-test'>Self awareness test</Link>
        <Link href='/work-with-us'>Work with us</Link>
      </div>
      <button className='hidden sm:flex p-2 px-4 sm:p-3 sm:px-6 rounded-full bg-black text-white font-bold'>
        Download App
      </button>
    </div>
  );
}

export default NavBar;
