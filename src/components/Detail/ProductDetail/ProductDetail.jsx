import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductDetailLeft from './ProductDetailLeft'
import ProductDetailRight from './ProductDetailRight'
import ProductDetailCenter from './ProductDetailCenter'
import DescriptionLeft from './DescriptionLeft'
import DescriptionRight from './DescriptionRight'
import Related from './Related'
import Banner from './Banner'

const ProductDetail = (props) => {
    const params = useParams()
    const [products, setProducts] = useState()

    const getProduct = async () => {
        let res = await fetch(`https://dummyjson.com/products/${params.id}`)
        let data = await res.json()
        setProducts(data)
    }
    
    useEffect(() => {
        getProduct()
    }, [params.id])

    return (
        <div className='mx-8 my-4 flex flex-col gap-3'>
            {products && (
                <>
                    <div className='flex w-full  p-3 rounded bg-white border border-gray-300'>
                        <ProductDetailLeft img={products.images} />
                        <ProductDetailCenter details={products} cartProducts={props.cartProducts} setCartProducts={props.setCartProducts} addToCart={props.addToCart} isInCart={props.isInCart} notifyCart={props.notifyCart} isInLater={props.isInLater} addToLater={props.addToLater} notifyLater={props.notifyLater}/>
                        <ProductDetailRight />
                    </div>
                    <div className='w-full rounded bg-white'>
                        <DescriptionLeft details={products} />
                    </div>
                    <div className='w-full rounded border border-gray-300 p-1'>
                        <Related id={params.id} />
                    </div>
                    <div>
                        <Banner />
                    </div>
                </>
            )}

        </div>
    )
}

export default ProductDetail
