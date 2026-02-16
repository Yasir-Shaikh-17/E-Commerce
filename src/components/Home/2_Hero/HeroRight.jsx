import user from '../../../assets/icons/user.svg'

const HeroRight = () => {
  return (
    <div className='rounded flex flex-col gap-3'>
      
      <div className="top grow bg-[#E3F0FF] py-3 px-5 flex flex-col justify-center gap-5 rounded-lg">

        <div className="flex items-center gap-2">
            <img className='h-10' src={user} alt="" />
            <h4 className='text-lg'>Hi user,<br /> lets get started</h4>
        </div>

        <div className='flex flex-col items-center gap-3'>
            <button className='bg-linear-to-b from-[#127FFF] to-[#0067FF] text-white w-full rounded-lg py-1 hover:scale-105 transition-all duration-150 cursor-pointer shadow-lg active:scale-95'>Join now</button>
            <button className='bg-white text-[#0D6EFD] w-full rounded-lg py-1 hover:scale-105 transition-all duration-150 cursor-pointer shadow-lg active:scale-95'>Log in</button>
        </div>

      </div>
      
      <div className="middle bg-[#F38332] py-3 px-5 rounded-lg">
        <p className='text-md text-white'>Get US $10 off <br /> with a new <br /> supplier</p>
      </div>
      <div className="bottom bg-[#55BDC3] py-3 px-5 rounded-lg">
        <p className='text-md text-white'>Get US $10 off <br /> with a new <br /> supplier</p>
      </div>

    </div>
  )
}

export default HeroRight
