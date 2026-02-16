import React from 'react'
import TopListLeft from './TopListLeft'
import TopListRight from './TopListRight'

const TopList = () => {
  return (
    <div className='flex justify-between items-center py-1.5 border-t border-t-[#E0E0E0] border-b border-b-[#E0E0E0] bg-white'>
        <TopListLeft />
        <TopListRight />
    </div>
  )
}

export default TopList