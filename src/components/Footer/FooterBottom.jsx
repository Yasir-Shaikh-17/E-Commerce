import usa from '../../assets/Images/Home/8_Flags/usa.png'
import downArrow from '../../assets/icons/downArrow.svg'

const FooterBottom = () => {
    return (
        <div className='px-8 py-2 bg-gray-200 flex items-center justify-between'>
            <div className='text-gray-800 cursor-default'>&copy; 2026 Ecommerce</div>
            <div className='flex items-center gap-2 cursor-pointer'>
                <img className='h-4' src={usa} alt="" />
                <img className='transform rotate-180' src={downArrow} alt="" />
            </div>
        </div>
    )
}

export default FooterBottom
