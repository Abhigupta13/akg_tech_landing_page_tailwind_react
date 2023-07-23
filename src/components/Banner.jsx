import React from 'react'
import Typed from 'react-typed';
function Banner() {
  return (
    <div className='bg-[#2699fb] w-full py-[50px]'>
        <div className='max-w-[1240px] mx-auto mt-[80px] mb-[160px]
         text-center font-bold'>
            <div className='text-xl md:text-3xl md:p-[20px]'>
                Learn with us
                </div>
            <h2 className='text-white text-4xl md:text-[65px] md:p-[20px]'>
                Grow with us.
                </h2>
            <div className='text-[20px] md:text-[45px] text-white md:p-[20px]'>
             Learn
              <Typed 
              className='pl-2'
              strings={['Web Development','C++ with STL','Python','Artificial intelligence']}
              typeSpeed={100}
              backSpeed={60}
              loop={true}
              />
            </div>
        </div>

    </div>
  )
}

export default Banner