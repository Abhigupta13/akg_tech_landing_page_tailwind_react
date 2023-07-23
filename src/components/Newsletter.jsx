import React from 'react'

function Newsletter() {
  return (
    <div className='bg-[#2699fb] p-3 w-full'>
        <div className='max-w-[1240px] mx-auto md:flex justify-between py-[50px]'>
            <div className='text-white m-2'>
                <h1 className='md:text-[40px] text-[20px] font-bold'>Want to learn latest I.T skills? </h1>
                <span className=''>Sign up to our NewsLetter and stay up to date.</span>
            </div>
            <div className='m-2'>
                <input type='text' placeholder='Enter email' className='sm:w-full p-3 mx-2 text-black rounded'/>
            <button className="mt-4 p-3 bg-black rounded text-white">Sign up</button>
            <br/>
            <p className='text-white p-3'>
                    We care about protection of your data. Read our<br/><a href='/' className='text-black'> Privacy Policy</a>
            </p>
            </div>

        </div>
    </div>
  )
}

export default Newsletter