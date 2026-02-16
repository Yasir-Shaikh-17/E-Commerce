import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Related = (props) => {
    const navigate = useNavigate()

    const [items, setItems] = useState([])

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
        let randomTen = shuffle(data.products).slice(0, 5)
        setItems(randomTen)
    }

    useEffect(() => {
        getItems()
    }, [props])

    return (
        <div className='p-4 flex flex-col gap-3'>
            <h1 className='text-xl font-bold text-[#1c1c1c]'>Related Items</h1>

            <div className='flex justify-evenly items-center'>

                {items.map((e, ind) => {
                    return <div key={ind} onClick={()=>{navigate(`/products/`+e.id); window.scrollTo({ top: 0, left: 0, behavior: "smooth" });}} className='w-2/12 h-72 cursor-pointer'>
                        <div>
                            <div><img className='w-full bg-[#EEEEEE] py-3 rounded' src={e.thumbnail} alt="" /></div>
                            <div className='flex flex-col py-0.5'>
                                <div className='text-gray-600 font-semibold'>{e.title}</div>
                                <div className='text-gray-500'>${e.price}</div>
                            </div>
                        </div>
                    </div>
                })}

            </div>
        </div>
    )
}

export default Related
