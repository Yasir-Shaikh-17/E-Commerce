import React from 'react'

const Deal_and_Offer_left = () => {

    return (
        <div className='w-60 p-3'>

                <div className='flex flex-col gap-5'>
                    <div>
                        <div className='text-xl font-bold text-[#1C1C1C]'>Deals and offers</div>
                        <div className='text-[#8B96A5]'>Women watches</div>
                    </div>

                    <ul className='flex gap-2'>
                        <li className='flex flex-col items-center bg-[#606060] text-white py-1 px-1.5 rounded'>
                            <div className='font-semibold text-lg'>4</div>
                            <div className='text-sm'>Days</div>
                        </li>
                        <li className='flex flex-col items-center bg-[#606060] text-white py-1 px-1.5 rounded'>
                            <div className='font-semibold text-lg'>4</div>
                            <div className='text-sm'>Days</div>
                        </li>
                        <li className='flex flex-col items-center bg-[#606060] text-white py-1 px-1.5 rounded'>
                            <div className='font-semibold text-lg'>4</div>
                            <div className='text-sm'>Days</div>
                        </li>
                        <li className='flex flex-col items-center bg-[#606060] text-white py-1 px-1.5 rounded'>
                            <div className='font-semibold text-lg'>4</div>
                            <div className='text-sm'>Days</div>
                        </li>
                    </ul>
            </div>
        </div>
    )
}

export default Deal_and_Offer_left
