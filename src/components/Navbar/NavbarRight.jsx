import React from 'react'
import man from '../../assets/icons/man.svg'
import message from '../../assets/icons/message.svg'
import heart from '../../assets/icons/heart.svg'
import cart from '../../assets/icons/cart.svg'
import product from '../../assets/icons/products.svg'
import { Link, useNavigate } from 'react-router-dom'

const NavbarRight = () => {
  return (
    <div>
        <ul className='flex text-sm gap-5'>
            <li className='flex flex-col items-center justify-center gap-0.5 cursor-pointer'>
                <img src={man} alt="" />
                <div className='text-gray-500'>Profile</div>
            </li>
            <li className='flex flex-col items-center justify-center gap-0.5 cursor-pointer'>
                <img src={message} alt="" />
                <div className='text-gray-500'>Message</div>
            </li>
            <Link to={"/products"} className='flex flex-col items-center justify-center gap-0.5 cursor-pointer'>
                <img src={product} alt="" />
                <div className='text-gray-500'>Products</div>
            </Link>
            <Link to={'/cart'} className='flex flex-col items-center justify-center gap-0.5 cursor-pointer'>
                <img src={cart} alt="" />
                <div className='text-gray-500'>My cart</div>
            </Link>
        </ul>
    </div>
  )
}

export default NavbarRight