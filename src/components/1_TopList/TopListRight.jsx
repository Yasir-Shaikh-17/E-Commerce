import downArrow from '../../assets/icons/downArrow.svg'
import germany from '../../assets/Images/Home/8_Flags/germany.png'

const TopListRight = () => {
  return (
    <div className='flex items-center gap-5 mx-8'>
        <div className='flex items-center gap-3 cursor-pointer'>
            <div>English, USD</div>
            <img src={downArrow} alt="" />
        </div>
        <div className='flex items-center gap-3 cursor-pointer'>
            <div>Ship to</div>
            <img className='h-4' src={germany} alt="" />
            <img src={downArrow} alt="" />
        </div>
    </div>
  )
}

export default TopListRight