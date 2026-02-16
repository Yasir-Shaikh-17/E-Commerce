import React, { useEffect, useState } from 'react'

const ProductDetailLeft = (props) => {
    const [images, setImages] = useState([])
    const [currentImage, setCurrentImage] = useState()


    const selectImage = (e)=>{
        setCurrentImage(e)
    }

    useEffect(() => {
        setImages(props.img)
    }, [props])


    return (
        <div className='flex w-[28%] flex-col gap-3 items-center px-5'>
            <div><img className='h-80 bg-white' src={currentImage? currentImage: images[0]} alt="" /></div>
            <div className='h-20 flex gap-1 overflow-x-auto bg-white'>
                {images.map((e, ind) => {
                    return <img key={ind} onClick={()=>{selectImage(e)}} className='border border-gray-300 rounded w-20 cursor-pointer' src={e} alt="" />
                })}
            </div>
        </div>
    )
}

export default ProductDetailLeft
