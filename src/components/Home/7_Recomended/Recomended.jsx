import tshirt from '../../../assets/Images/Home/6_Recomended_items/T_shirt.png'
import jacket from '../../../assets/Images/Home/6_Recomended_items/jacket.png'
import coat from '../../../assets/Images/Home/6_Recomended_items/coat.png'
import wallet from '../../../assets/Images/Home/6_Recomended_items/wallet.png'
import bag from '../../../assets/Images/Home/6_Recomended_items/bag.png'
import shorts from '../../../assets/Images/Home/6_Recomended_items/shorts.png'
import headphones from '../../../assets/Images/Home/6_Recomended_items/headphones.png'
import watches from '../../../assets/Images/Home/4_Consumer/watches.png'
import pot from '../../../assets/Images/Home/6_Recomended_items/pot.png'
import kattle from '../../../assets/Images/Home/6_Recomended_items/kattle.png'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Recomended = () => {
    const [items, setItems] = useState([])
    const navigate = useNavigate()

    // const item = [
    //     {
    //         img: tshirt,
    //         price: "$" + 10.30,
    //         name: "T-shirts with multiple colors, for men"
    //     },
    //     {
    //         img: jacket,
    //         price: "$" + 10.30,
    //         name: "Brown winter coat medium size"
    //     },
    //     {
    //         img: coat,
    //         price: "$" + 12.50,
    //         name: "Blue office coat for men medium size"
    //     },
    //     {
    //         img: wallet,
    //         price: "$" + 34.00,
    //         name: "Blue wallet for men leather material"
    //     },
    //     {
    //         img: bag,
    //         price: "$" + 99.00,
    //         name: "Jeans bag for travel for men"
    //     },
    //     {
    //         img: shorts,
    //         price: "$" + 9.99,
    //         name: "Jeans shorts for men blue color"
    //     },
    //     {
    //         img: headphones,
    //         price: "$" + 8.99,
    //         name: "Headset for gaming with mic"
    //     },
    //     {
    //         img: watches,
    //         price: "$" + 10.30,
    //         name: "Smartwatch silver color modern"
    //     },
    //     {
    //         img: pot,
    //         price: "$" + 10.30,
    //         name: "Cooking pot"
    //     },
    //     {
    //         img: kattle,
    //         price: "$" + 80.95,
    //         name: "Electric kattle black color"
    //     },
    // ]

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {

            // Pick random index
            let j = Math.floor(Math.random() * (i + 1));

            // Swap
            [array[i], array[j]] = [array[j], array[i]];
        }

        return array;
    }


    const getItems = async () => {
        let res = await fetch('https://dummyjson.com/products?limit=100')
        let data = await res.json()
        let randomTen = shuffle(data.products).slice(0, 10)
        setItems(randomTen)
    }

    useEffect(() => {
        getItems()
    }, [])

    return (
        <div className='mx-8 my-4 flex flex-col gap-6'>
            <h2 className='text-xl font-semibold'>Recomended items</h2>
            <div className='flex flex-wrap gap-4'>

                {items.map((e, ind) => {
                    return <div onClick={()=>{navigate(`/products/`+e.id)}} key={ind} className='bg-white rounded-md px-4 py-3 w-56 border-2 flex flex-col border-gray-200 hover:scale-105 transition-all ease-in duration-150 shadow-lg cursor-pointer active:scale-95'>
                        <div className='h-40 w-full flex justify-center my-6'>
                            <img src={e.thumbnail} alt="" />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <p className='text-[#1c1c1c] font-semibold'>${e.price}</p>
                            <p className='text-gray-500'>{e.title}</p>
                        </div>
                    </div>
                })}

            </div>
        </div>
    )
}

export default Recomended
