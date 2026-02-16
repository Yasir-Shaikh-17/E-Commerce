import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const HeroLeft = (props) => {
    const [leftData, setLeftData] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const getCategories = async () => {
            let res = await fetch('https://dummyjson.com/products/categories')
            let data = await res.json()
            setLeftData(data)
        }
        getCategories()
    }, [])

    return (
        <div className='w-1/6 rounded'>
            <ul className='flex flex-col overflow-auto h-96 scrollbar'>
                {leftData.map((e, ind) => {
                    return <li key={ind} onClick={()=>{navigate("/products") ;props.setCategory(e.slug)}} className='p-2.5 hover:bg-[#E5F1FF] transition-all duration-150 linear cursor-pointer ease-in'>{e.name}</li>
                })}
            </ul>
        </div>
    )
}

export default HeroLeft
