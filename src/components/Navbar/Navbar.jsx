import React from 'react'
import NavbarLeft from './NavbarLeft'
import NavbarRight from './NavbarRight'
import NavbarCenter from './NavbarCenter'

const Navbar = () => {
  return (
    <div className=' flex justify-between items-center py-3 px-8'>
      <NavbarLeft />
      <NavbarCenter />
      <NavbarRight />
    </div>
  )
}

export default Navbar