import React from 'react'
import laptop from '../img/coding_complex_problems.png'
function Expert() {
  return (
    <div className='max-w-[1240px] mx-auto my-10 grid grid-cols-2'>
        <div className='col-span-1 w-[80%]'>
            <img src={laptop} alt='laptop img'/>
        </div>
        <div className='col-span-1'>
            <h1 className=''>LEARN FROM EXPERTS</h1>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum molestias minus perferendis quaerat. Esse vitae iure non commodi nihil error reiciendis hic maxime distinctio. Atque voluptate exercitationem sint vero ipsa!
            </p>
        </div>
    </div>
  )
}

export default Expert