import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductDetail from '../components/Detail/ProductDetail/ProductDetail'

const Detail = (props) => {

  return (
    <div>
      <ProductDetail cartProducts={props.cartProducts} setCartProducts={props.setCartProducts} addToCart={props.addToCart} isInCart={props.isInCart} notifyCart={props.notifyCart} isInLater={props.isInLater} addToLater={props.addToLater} notifyLater={props.notifyLater} />
    </div>
  )
}

export default Detail
