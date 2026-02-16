import { Link } from 'react-router-dom'
import app from '../../assets/icons/Footer/app_store.svg'
import google from '../../assets/icons/Footer/google.svg'

const FooterRight = () => {
    return (
        <div className='grow py-4 px-6 flex items-center'>

            <ul className='w-1/5 h-full leading-loose'>
                <h3 className='font-medium cursor-default'>About</h3>
                <li className='text-gray-500'><span className='cursor-pointer'>About us</span></li>
                <li className='text-gray-500'><span className='cursor-pointer'>Find store</span></li>
                <li className='text-gray-500'><span className='cursor-pointer'>Categories</span></li>
                <li className='text-gray-500'><span className='cursor-pointer'>Blogs</span></li>
            </ul>

            <ul className='w-1/5 h-full leading-loose'>
                <h3 className='font-medium cursor-default'>Pages</h3>
                <li className='text-gray-500'><Link to={"/"} className='cursor-pointer'>Home</Link></li>
                <li className='text-gray-500'><Link to={"/products"} className='cursor-pointer'>Products</Link></li>
                <li className='text-gray-500'><Link to={"/cart"} className='cursor-pointer'>Cart page</Link></li>
            </ul>

            <ul className='w-1/5 h-full leading-loose'>
                <h3 className='font-medium cursor-default'>Information</h3>
                <li className='text-gray-500'><span className='cursor-pointer'>Help center</span></li>
                <li className='text-gray-500'><span className='cursor-pointer'>Money refund</span></li>
                <li className='text-gray-500'><span className='cursor-pointer'>Shipping</span></li>
                <li className='text-gray-500'><span className='cursor-pointer'>Contact us</span></li>
            </ul>

            <ul className='w-1/5 h-full leading-loose'>
                <h3 className='font-medium cursor-default'>For users</h3>
                <li className='text-gray-500'><span className='cursor-pointer'>Login</span></li>
                <li className='text-gray-500'><span className='cursor-pointer'>Register</span></li>
                <li className='text-gray-500'><span className='cursor-pointer'>Settings</span></li>
                <li className='text-gray-500'><span className='cursor-pointer'>My orders</span></li>
            </ul>

            <ul className='w-1/5 h-full leading-loose flex flex-col gap-3'>
                <h3 className='font-medium cursor-default'>Get app</h3>
                <div className='flex flex-col gap-4'>
                    <li className='cursor-pointer drop-shadow-lg active:scale-95 transition-all duration-150'><img src={google} alt="" /></li>
                    <li className='cursor-pointer drop-shadow-lg active:scale-95 transition-all duration-150'><img src={app} alt="" /></li>
                </div>
            </ul>


        </div>
    )
}

export default FooterRight
