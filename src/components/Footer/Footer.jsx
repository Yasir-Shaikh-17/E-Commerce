import React from 'react'
import FooterLeft from './FooterLeft'
import FooterRight from './FooterRight'
import FooterBottom from './FooterBottom'

const Footer = () => {
  return (
    <div>

      <div className='flex px-8'>
        <FooterLeft />
        <FooterRight />
      </div>

      <FooterBottom />

    </div>
  )
}

export default Footer