import watch from '../../../assets/Images/Home/2_Deal_and_Offer/watch.png'
import laptop from '../../../assets/Images/Home/2_Deal_and_Offer/laptop.png'
import camera from '../../../assets/Images/Home/2_Deal_and_Offer/camera.png'
import headphones from '../../../assets/Images/Home/2_Deal_and_Offer/headphones.png'
import mobile from '../../../assets/Images/Home/2_Deal_and_Offer/mobile.png'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Deal_and_Offer_Right = () => {

    const [items, setItems] = useState([])

    const navigate = useNavigate()

    // const items = [
    //     {
    //         img: watch,
    //         name: "Smart watches",
    //         off: "-25%"
    //     },
    //     {
    //         img: laptop,
    //         name: "Laptops",
    //         off: "-15%"
    //     },
    //     {
    //         img: camera,
    //         name: "GoPro Cameras",
    //         off: "-45%"
    //     },
    //     {
    //         img: headphones,
    //         name: "Headphones",
    //         off: "-25%"
    //     },
    //     {
    //         img: mobile,
    //         name: "Mobiles",
    //         off: "-25%"
    //     },
    // ]

    const getItems = async ()=>{
        let res = await fetch("https://dummyjson.com/products/category/womens-watches?limit=5")
        let data = await res.json()
        setItems(data.products)
    }

    useEffect(()=>{
        getItems()
    }, [])

    return (
        <div className='grow flex'>

            {items.map((e, ind) => {
                return <div key={ind} onClick={()=>{navigate("/products/"+e.id)}} className='w-1/5 border border-[#E0E0E0] flex flex-col justify-center items-center py-7 gap-4 cursor-pointer'>
                    <img className='h-40' src={e.thumbnail} alt="" />
                    <div className='flex flex-col gap-1.5 items-center'>
                        <div className='px-4 text-center font-medium' >{e.title}</div>
                        <div className='bg-[#FFE3E3] px-3 py-0.5 rounded-2xl text-sm text-[#EB001B] font-semibold'>-{e.discountPercentage}%</div>
                    </div>
                </div>
            })}

        </div>
    )
}

export default Deal_and_Offer_Right
