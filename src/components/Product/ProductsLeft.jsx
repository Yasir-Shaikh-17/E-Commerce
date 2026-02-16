import { useEffect, useState } from 'react';
import downArrow from '../../assets/icons/downArrow.svg'
import ratting5 from '../../assets/icons/Ratings/rating-5.svg'
import ratting4 from '../../assets/icons/Ratings/rating-4.svg'
import ratting3 from '../../assets/icons/Ratings/rating-3.svg'
import ratting2 from '../../assets/icons/Ratings/rating-2.svg'

import Slider from '../../components/Product/Slider.jsx'
import { useNavigate } from 'react-router-dom';


const ProductsLeft = (props) => {

    const [seecat, setSeecat] = useState("See all")
    const [seebrand, setSeebrand] = useState("See less")
    const [seefeature, setSeefeature] = useState("See less")
    const [categories, setCategories] = useState([])

    const [catopen, setCatopen] = useState(false)
    const [brandopen, setBrandopen] = useState(true)
    const [featureopen, setFeatureopen] = useState(true)
    const [priceopen, setPriceopen] = useState(true)
    const [ratings, setRatings] = useState(true)
    const [Condition, setCondition] = useState(true)
    const [selectedCondition, setSelectedCondition] = useState("");


    const features = [
        "Metallic",
        "Plastic cover",
        "8GB ram",
        "Super power",
        "Large memory"
    ]

    const conditionList = [
        "Any",
        "Refurbished",
        "Brand new",
        "old items"
    ]

    const ratingList = [
        {
            img: ratting5,
            rating: "5 stars"
        },
        {
            img: ratting4,
            rating: "4 stars"
        },
        {
            img: ratting3,
            rating: "3 stars"
        },
        {
            img: ratting2,
            rating: "2 stars"
        },
    ]



    const catHandler = () => {
        setCatopen(!catopen)
        if (catopen) {
            setSeecat("See all")
        } else {
            setSeecat("See less")
        }
    }

    const featureHandler = () => {
        setFeatureopen(!featureopen)
        if (featureopen) {
            setSeefeature("See all")
        } else {
            setSeefeature("See less")
        }
    }

    const priceHandler = () => {
        setPriceopen(!priceopen)
    }

    const conditionHandler = () => {
        setCondition(!Condition)
    }

    const ratingHandler = () => {
        setRatings(!ratings)
    }

    const handleChange = (value) => {
        props.setFilters((prev) =>
            prev.includes(value)
                ? prev.filter((item) => item !== value)
                : [...prev, value]
        );
    };

    const getCategories = async () => {
        let response = await fetch("https://dummyjson.com/products/categories")
        let data = await response.json()
        setCategories(data)
    }

    useEffect(() => {
        getCategories()
    }, [])

    return (
        <div className=' w-1/5 p-3 flex flex-col gap-3'>

            <div className='flex flex-col gap-1,5 border-b border-b-gray-300 py-3'>
                <div onClick={catHandler} className='flex justify-between items-center cursor-pointer mb-2'>
                    <h3 className='font-semibold'>Categories</h3>
                    <img className={`cursor-pointer ${catopen ? "rotate-180" : "rotate-0"} transition-all duration-150 ease-in selection:none`} src={downArrow} alt="" />
                </div>
                <ul className={`flex flex-col justify-evenly gap-1 ${catopen ? "" : "h-28"} overflow-hidden transition-all duration-300 ease-in`}>
                    {categories.map((e, ind) => {
                        return <div onClick={() => { props.setCategory(e.slug); window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); }} key={ind} className='hover:cursor-pointer hover:bg-gray-200 p-1 rounded' >{e.name}</div>
                    })}
                </ul>
                <div onClick={catHandler} className='cursor-pointer text-[#0D6EFD]'>{seecat}</div>
            </div>
            
            <div className='flex flex-col gap-1.5 border-b border-b-gray-300'>
                <div onClick={featureHandler} className='flex justify-between items-center cursor-pointer'>
                    <h3 className='font-semibold'>Features</h3>
                    <img className={`cursor-pointer ${featureopen ? "rotate-180" : "rotate-0"} transition-all duration-150 ease-in selection:none`} src={downArrow} alt="" />
                </div>
                <div className={`flex flex-col justify-evenly ${featureopen ? "h-36" : "h-0"} overflow-hidden transition-all duration-300 ease-in-out`}>

                    {features.map((e, ind) => {
                        return <div key={ind} className='flex items-center gap-2'>
                            <input
                                type="checkbox"
                                value={e}
                                checked={props.filters.includes(e)}
                                onChange={() => handleChange(e)}
                            />
                            <span>{e}</span>
                        </div>
                    })}

                </div>
                <div onClick={featureHandler} className='cursor-pointer text-[#0D6EFD]'>{seefeature}</div>
            </div>

            <div className='flex flex-col pb-2 border-b border-b-gray-300'>
                <div onClick={priceHandler} className='flex justify-between items-center cursor-pointer'>
                    <h3 className='font-semibold'>Price range</h3>
                    <img className={`cursor-pointer ${priceopen ? "rotate-180" : "rotate-0"} transition-all duration-150 ease-in selection:none`} src={downArrow} alt="" />
                </div>

                <div className={`flex flex-col justify-evenly ${priceopen ? "h-36" : "h-0"} overflow-hidden transition-all duration-300 ease-in-out`}>
                    <div className='flex justify-center items-center'>
                        <Slider />
                    </div>
                </div>

            </div>

            <div className='flex flex-col gap-1.5 border-b border-b-gray-300'>
                <div onClick={conditionHandler} className='flex justify-between items-center cursor-pointer'>
                    <h3 className='font-semibold'>Condition</h3>
                    <img className={`cursor-pointer ${Condition ? "rotate-180" : "rotate-0"} transition-all duration-150 ease-in selection:none`} src={downArrow} alt="" />
                </div>
                <div className={`flex flex-col justify-evenly ${Condition ? "h-36" : "h-0"} overflow-hidden transition-all duration-300 ease-in-out`}>

                    {conditionList.map((e, ind) => {
                        return (
                            <div key={ind} className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="condition"
                                    value={e}
                                    checked={selectedCondition === e}
                                    onChange={(event) => setSelectedCondition(event.target.value)}
                                />
                                <span>{e}</span>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className='flex flex-col gap-1.5 border-b border-b-gray-300'>
                <div onClick={ratingHandler} className='flex justify-between items-center cursor-pointer'>
                    <h3 className='font-semibold'>Rating</h3>
                    <img className={`cursor-pointer ${ratings ? "rotate-180" : "rotate-0"} transition-all duration-150 ease-in selection:none`} src={downArrow} alt="" />
                </div>
                <div className={`flex flex-col justify-evenly ${ratings ? "h-36" : "h-0"} overflow-hidden transition-all duration-300 ease-in-out`}>

                    {ratingList.map((e, ind) => {
                        return <div key={ind} className='flex items-center gap-2'>
                            <input
                                type="checkbox"
                                value={e}
                                checked={props.filters.includes(e.rating)}
                                onChange={() => handleChange(e.rating)}
                            />
                            <span><img src={e.img} alt="" /></span>
                        </div>
                    })}

                </div>
            </div>

        </div>
    )
}

export default ProductsLeft
