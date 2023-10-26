import React from 'react';

function Description() {
  return (
    <div className='flex flex-row sm:flex-row justify-around items-top m-20 gap-6 sm:gap-10 font-sans'>
      <h1 className='w-full sm:w-1/2 font-bold text-3xl sm:text-4xl m-10'>
        EQ Beats IQ
      </h1>
      <div className='w-full flex '>
        <h1 className=' text-lg sm:text-xl m-10'>
          People with high emotional intelligence (EQ) live more fulfilled lives. They tend to be happier and have healthier relationships.
        </h1>
        <h1 className=' text-lg sm:text-xl m-10'>
          They are more successful in their pursuits and make for inspiring leaders. According to science, they earn $29k a year.
        </h1>
      </div>
    </div>
  );
}

export default Description;
