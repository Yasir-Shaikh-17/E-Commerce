import React from 'react'
import Home_and_outdoor_Left from './Home_and_Outdoor_Left'
import Home_and_outdoor_Right from './Home_and_Outdoor_Right'

const Home_and_Outdoor = (props) => {

    return (
        <div className='px-8 py-4 bg-white'>
            <div className='border border-[#E0E0E0] flex rounded items-start h-64'>
                <Home_and_outdoor_Left detail={props.detail}/>
                <Home_and_outdoor_Right item2={props.item2} />
            </div>
        </div>
    )
}

export default Home_and_Outdoor
