import germany from '../../../assets/Images/Home/8_Flags/germany.png'
import verified from '../../../assets/icons/verified.svg'
import worldwide from '../../../assets/icons/worldwide.svg'
import heart from '../../../assets//icons/heart.svg'

const ProductDetailRight = () => {
  return (
    <div className=''>

      <div className='px-4 py-2 border border-gray-300 rounded flex flex-col gap-3'>

        <div className='flex items-center gap-3 border-b pb-3'>
          <div className='bg-[#C6F3F1] text-[#4CA7A7]/60 px-4 py-2 rounded text-xl font-semibold'>R</div>
          <div>Suppliers <br /> Guanjoi Trading LLC</div>
        </div>

        <div className='my-3 flex flex-col gap-3'>

          <div className='flex gap-3 items-center'>
            <img className='h-4' src={germany} alt="" />
            <div>Germany, Berlin</div>
          </div>

          <div className='flex gap-3 items-center'>
            <img className='h-6' src={verified} alt="" />
            <div>Verified seller</div>
          </div>

          <div className='flex gap-3 items-center'>
            <img className='h-6' src={worldwide} alt="" />
            <div>Worldwide shipping</div>
          </div>

        </div>

        <div className="buttons flex flex-col gap-3">
          <button className='bg-linear-to-b from-[#127FFF] to-[#0067FF] text-white w-full rounded-lg py-1 hover:scale-105 transition-all duration-150 cursor-pointer shadow-lg active:scale-95'>Send inquiry</button>
          <button className='bg-white text-[#0D6EFD] w-full rounded-lg py-1 hover:scale-105 transition-all duration-150 cursor-pointer shadow-lg active:scale-95 border border-gray-300'>Send inquiry</button>
        </div>

        <div className='my-3 flex items-center gap-3 justify-center'>
          <img src={heart} alt="" />
          <div className='text-[#0D6EFD]'>Save for later</div>
        </div>

      </div>

      

    </div>
  )
}

export default ProductDetailRight
