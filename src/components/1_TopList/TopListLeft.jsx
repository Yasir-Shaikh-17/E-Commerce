import hamburger from '../../assets/icons/hamburger.svg'
import downArrow from '../../assets/icons/downArrow.svg'

const TopListLeft = () => {
  return (
    <div>
        <ul className='flex gap-7 py-2  mx-8'>
            <li>
                <div className='flex items-center gap-2 cursor-pointer'>
                    <img src={hamburger} alt="" />
                    <div>All category</div>
                </div>
            </li>
            <li><span className='cursor-pointer'>Hot offers</span></li>
            <li><span className='cursor-pointer'>Gift boxes</span></li>
            <li><span className='cursor-pointer'>Projects</span></li>
            <li><span className='cursor-pointer'>Menu item</span></li>
            <li>
                <div className='flex items-center gap-2 cursor-pointer'>
                    <div>Help</div>
                    <img src={downArrow} alt="" />
                </div>
            </li>
        </ul>
    </div>
  )
}

export default TopListLeft