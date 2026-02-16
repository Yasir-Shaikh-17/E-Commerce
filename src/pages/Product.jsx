import React from 'react'
import TopList from '../components/1_TopList/TopList'
import ProductsMain from '../components/Product/ProductsMain'

const Product = (props) => (
  <div>
    <TopList />
    <ProductsMain category={props.category} setCategory={props.setCategory} cartProducts={props.cartProducts} setCartProducts={props.setCartProducts}  addToCart={props.addToCart} isInCart={props.isInCart} notifyCart={props.notifyCart} isInLater={props.isInLater} addToLater={props.addToLater} notifyLater={props.notifyLater}/>
  </div>
)

export default Product
