import Logo from '../../assets/icons/logo.svg'
import fb from '../../assets/icons/socials/fb.svg'
import x from '../../assets/icons/socials/x.svg'
import linked from '../../assets/icons/socials/in.svg'
import insta from '../../assets/icons/socials/insta.svg'
import yt from '../../assets/icons/socials/yt.svg'
import { Link } from 'react-router-dom'

const FooterLeft = () => {
    return (
        <div className='w-1/4 flex flex-col gap-4 p-4'>
            <Link to={"/"} className='flex items-center gap-2 '>
                <img src={Logo} alt="" />
                <h3 className='text-[#8CB7F5] text-3xl font-bold'>Brand</h3>
            </Link>
            <p className='text-gray-600'>Best information about the company gies here but now lorem ipsum is</p>
            <div className="icons flex items-center gap-2">
                <img className='active:scale-95 transition-all duration-150 cursor-pointer' src={fb} alt="" />
                <img className='active:scale-95 transition-all duration-150 cursor-pointer' src={x} alt="" />
                <img className='active:scale-95 transition-all duration-150 cursor-pointer' src={linked} alt="" />
                <img className='active:scale-95 transition-all duration-150 cursor-pointer' src={insta} alt="" />
                <img className='active:scale-95 transition-all duration-150 cursor-pointer' src={yt} alt="" />
            </div>
        </div>
    )
}

export default FooterLeft
