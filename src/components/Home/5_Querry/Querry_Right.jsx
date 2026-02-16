import downArrow from '../../../assets/icons/downArrow.svg'

const Querry_Right = () => {
  return (
    <div className='w-2/3 flex items-center z-10 relative'>
      <div className='bg-white border border-[#E0E0E0] w-full flex flex-col justify-start p-4 gap-4 rounded shadow-xl'>
        <h3 className='font-bold text-xl'>Send quote to suppliers</h3>
        <input type="text" placeholder='What item you need?' className='border border-gray-300 p-2 rounded placeholder:text-black shadow-lg' />
        <textarea type="text" placeholder='Type more details' className='border shadow-lg border-gray-300 p-2 rounded placeholder:text-gray-500 text-left h-20' />

        <div className="buttons flex gap-3">
            <button className='w-40 text-start py-2 px-3 border border-gray-300 rounded shadow-lg'>Quantity</button>
            <button className='w-24 text-start px-3 py-2 flex justify-between items-center border border-gray-300 rounded shadow-lg'>
                <div>Pcs</div>
                <img src={downArrow} alt="" />
            </button>
        </div>

        <button className="inquiry bg-linear-to-b from-[#127FFF] to-[#0067FF] w-fit text-white px-8 py-2 rounded hover:scale-105 shadow-lg active:scale-95 transition-all duration-150 cursor-pointer">Send inquiry</button>

      </div>
    </div>
  )
}

export default Querry_Right
