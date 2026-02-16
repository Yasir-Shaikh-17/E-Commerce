import { useState } from 'react'
import ProductsLeft from './ProductsLeft'
import ProductsRight from './ProductsRight'

const ProductsMain = (props) => {
    const [filters, setFilters] = useState([])

    return (
        < div className='mx-8 my-4 flex'>
            <ProductsLeft filters={filters} setFilters={setFilters} category={props.category} setCategory={props.setCategory}/>
            <ProductsRight filters={filters} setFilters={setFilters} category={props.category}  cartProducts={props.cartProducts} setCartProducts={props.setCartProducts}  addToCart={props.addToCart} isInCart={props.isInCart} notifyCart={props.notifyCart} isInLater={props.isInLater} addToLater={props.addToLater} notifyLater={props.notifyLater}/>
        </div >
    )
}

export default ProductsMain
