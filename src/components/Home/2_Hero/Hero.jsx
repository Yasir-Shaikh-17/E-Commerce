import React from 'react'
import HeroLeft from './HeroLeft'
import HeroRight from './HeroRight'
import HeroCenter from './HeroCenter'

const Hero = (props) => {
  return (
    <div className='px-8 py-4 cursor-default'>
      <div className='bg-white flex w-full p-3 gap-3 border border-gray-300 rounded'>
        <HeroLeft category={props.category} setCategory={props.setCategory}/>
        <HeroCenter />
        <HeroRight />
      </div>
    </div>
  )
}

export default Hero