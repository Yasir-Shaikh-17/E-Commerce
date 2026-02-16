import React, { useState } from 'react'
import downArrow from '../../assets/icons/downArrow.svg'
import { useNavigate } from 'react-router-dom'

const NavbarCenter = () => {

  const [value, setValue] = useState("")

  return (
    <div className='flex items-center border-2 border-[#0D6EFD] rounded-md h-10 w-1/2'>
      <input
        type="text"
        placeholder='Search'
        className='bg-white rounded-l-md h-full px-2 grow focus:outline-0'
      />

      <div className='flex gap-3 items-center px-2 border-l-2 border-l-[#0D6EFD] h-full'>
        <div className='text-sm'>All category</div>
        <img className='cursor-pointer' src={downArrow} alt="" />
      </div>
      <button className='rounded-r-sm h-full px-5 bg-linear-to-b from-[#127FFF] to-[#0067FF] text-white font-medium cursor-pointer active:scale-95 transition-all duration-150'>Search</button>
    </div>
  )
}

export default NavbarCenter