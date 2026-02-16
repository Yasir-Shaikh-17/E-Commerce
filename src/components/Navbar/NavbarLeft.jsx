import React from 'react'
import Logo from '../../assets/icons/logo.svg'
import { Link } from 'react-router-dom'

const NavbarLeft = () => {
  return (
    <Link to={"/"} className='flex items-center gap-2'>
        <img src={Logo} alt="" />
        <h3 className='text-[#8CB7F5] text-3xl font-bold'>Brand</h3>
    </Link>
  )
}

export default NavbarLeft