import React, { useState } from 'react'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai';
function Header() {
    const [toggle,setToggle]=useState(false);
  return (
    <>
    <div className='bg-[#2699fb] p-4'>
    <div className='max-w-[1240px] py-[15px] items-center 
    flex justify-between mx-auto'>
      <div className='text-2xl font-bold'>AKG TECH.</div>
      {
        toggle?
        <AiOutlineClose onClick={()=>setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>
        :
        <AiOutlineMenu onClick={()=>setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>

      }
      <ul className='hidden md:flex text-white gap-5 me-5'>
        <li className=''>
          Home
          </li>
        <li>
          Company
          </li>
        <li>
          Resources
          </li>
        <li>
          About
          </li>
        <li>
          Contacts 
          </li>
      </ul>
      {/* responsive menu */}
      <ul className={`md:hidden text-white h-screen bg-black w-full fixed  top-[92px]
      ${toggle ? 'left-[0]': 'left-[-100%]'}`}>
        <li className='p-3'>
          Home
          </li >
        <li className='p-3'>
          Company
          </li>
          <li className='p-3'>
          Resources
          </li>
          <li className='p-3'>
          About
          </li>
          <li className='p-3'>
          Contacts 
          </li>
      </ul>
    </div>
  </div>
    </>
  )
}

export default Header