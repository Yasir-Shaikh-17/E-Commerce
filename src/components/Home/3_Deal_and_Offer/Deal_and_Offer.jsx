import React from 'react'
import Deal_and_Offer_left from './Deal_and_Offer_left'
import Deal_and_Offer_Right from './Deal_and_Offer_Right'

const Section1 = () => {
    return (
        <div className='px-8 rounded'>
            <div className='bg-white flex w-full border border-gray-300 rounded'>
                <Deal_and_Offer_left />
                <Deal_and_Offer_Right />
            </div>
        </div>
    )
}

export default Section1
