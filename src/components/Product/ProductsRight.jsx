import downArrow from '../../assets/icons/downArrow.svg'
import grid from "../../assets/icons/grid.svg"
import list from '../../assets/icons/list.svg'
import cross from "../../assets/icons/cross.svg"
import rating5 from '../../assets/icons/Ratings/rating-5.svg'
import rating4 from '../../assets/icons/Ratings/rating-4.svg'
import rating3 from '../../assets/icons/Ratings/rating-3.svg'
import rating2 from '../../assets/icons/Ratings/rating-2.svg'
import heart from '../../assets/icons/heartList.svg'
import cart from '../../assets/Images/View/cart.svg'
import { Pagination } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const ProductsRight = (props) => {
    console.log(props)

    const navigate = useNavigate()
    const [page, setPage] = useState(1);

    const [products, setProducts] = useState([])
    const [totalItems, setTotalItems] = useState()
    const category = props.category
    const getProducts = async () => {
        let res = await fetch(`https://dummyjson.com/products/category/${category}`)
        let data = await res.json()
        console.log(data)
        setProducts(data.products)
        console.log(data.products)
        setTotalItems(data.total)
    }

    useEffect(() => {
        getProducts()
        setPage(1)
    }, [category])


    const [listSelect, setListSelect] = useState(false)
    const [gridSelect, setGridSelect] = useState(true)


    const gridHandler = () => {
        setListSelect(false)
        setGridSelect(true)
    }

    const listHandler = () => {
        setGridSelect(false)
        setListSelect(true)
    }


    const ITEMS_PER_PAGE = listSelect ? 6 : 12;
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const currentItems = products.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

    const handleChange = (e, value) => {
        setPage(value)
    }

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [page]);

    const getRatingImage = (rating) => {
        const rounded = Math.round(rating)
        switch (rounded) {
            case (2):
                return rating2
            case (3):
                return rating3
            case (4):
                return rating4
            case (5):
                return rating5
        }
    }

    const productDetail = (e) => {
        navigate(`/products/${e.id}`)
    }

    useEffect(() => {
        setPage(1)
    }, [listSelect])



    return (
        <div className='relative h-fit w-4/5 border border-gray-300 rounded flex flex-col mb-10'>

            {/* TOP BAR */}
            <div className='bg-white px-4 h-16 flex items-center justify-between border border-gray-300'>
                <div>{totalItems} items in <span className='font-medium'>{category}</span></div>

                <div className='flex items-center gap-3 '>

                    <div className='flex items-center gap-2'>
                        <input type="checkbox" />
                        <span>Verified only</span>
                    </div>

                    <div className='flex justify-between items-center w-32 border border-gray-300 p-1 px-2 cursor-pointer rounded active:scale-95 transition-all duration-150 ease-in selection:none'>
                        <div>Featured</div>
                        <img src={downArrow} alt="" />
                    </div>

                    <div className='flex border border-gray-300 rounded'>
                        <div onClick={gridHandler} className={`p-2 ${gridSelect ? "bg-gray-300" : "bg-none"} transition-all duration-100 ease-in border-r border-r-gray-300 cursor-pointer active:scale-95 `}><img src={grid} alt="" /></div>
                        <div onClick={listHandler} className={`p-2 cursor-pointer ${listSelect ? "bg-gray-300" : "bg-none"} active:scale-95 transition-all duration-100 ease-in`}><img src={list} alt="" /></div>
                    </div>

                </div>


            </div>

            {/* FILTERS BAR */}
            <div className='filters px-4 flex items-center'>

                <ul className='w-[85%] flex gap-2 flex-wrap my-3'>

                    {props.filters.map((e, ind) => {
                        return <li key={ind} className='border border-[#0D6EFD] px-3 py-0.5 rounded flex items-center gap-3'>
                            <div className=' text-gray-600'>{e}</div>
                            <img src={cross} alt="" />
                        </li>
                    })}

                </ul>

                <div onClick={() => { props.setFilters([]) }} className={`${props.filters.length > 0 ? "flex" : "hidden"} w-[15%] text-[#0D6EFD] flex items-center justify-center cursor-pointer`}>
                    Clear all filter
                </div>

            </div>

            {/* LIST VIEW    AND   GRID VIEW    SELECTION */}
            <div className='px-4  py-3 flex flex-col gap-4'>

                {/* LIST SELECTION */}
                {listSelect && currentItems.map((e, ind) => {
                    return <div  key={ind} className="list flex h-56 rounded border border-gray-300 shadow-md cursor-default">
                        <div className='h-full w-64 flex justify-center items-center'>
                            <img className='h-full w-full rounded-l' src={e.thumbnail} alt="" />
                        </div>

                        <div className='flex-1 relative p-4'>

                            <div>{e.title}</div>

                            <div className='flex items-center gap-2'>
                                <div className='text-lg font-bold'>${e.price}</div>
                                <div className='text-sm font-semibold'>{e.discountPercentage}% off</div>
                            </div>

                            <div className='mt-1 flex items-center gap-2.5'>
                                <img src={getRatingImage(e.rating)} alt="" />
                                <div className='text-[#FF9017]'>{Math.round(e.rating)}</div>
                                <div className='text-gray-300 font-black text-2xl'>·</div>
                                <div className='text-gray-300'>{e.availabilityStatus} {e.stock}</div>
                                <div className='text-gray-300 font-black text-2xl'>·</div>
                                <div className='text-[#00B517]'>{e.shippingInformation}</div>
                            </div>

                            <div className='flex flex-col gap-1'>
                                <p>{e.description}</p>
                                <div onClick={() => { productDetail(e) }} className='text-[#0D6EFD] cursor-pointer'>See detail</div>
                            </div>

                            <div className='w-fit h-fit m-3 absolute top-0 right-0 flex flex-col gap-2'>

                                <div onClick={() => {
                                    const action = props.addToLater(e); // capture the action returned
                                    props.notifyLater(e.title, action);
                                }} className='p-1.5 rounded cursor-pointer border border-gray-300'>
                                    <svg width="20" height="18" viewBox="0 0 20 18" strokeWidth={1} stroke='#0D6EFD'
                                        style={{
                                            fill: props.isInLater(e.id) ? "#0D6EFD" : "transparent",
                                            cursor: "pointer"
                                        }}
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.3536 17.1307C10.5936 17.8207 9.42357 17.8207 8.66357 17.1207L8.55357 17.0207C3.30357 12.2707 -0.126429 9.16065 0.00357106 5.28065C0.0635711 3.58065 0.933571 1.95065 2.34357 0.990654C4.98357 -0.809346 8.24357 0.0306542 10.0036 2.09065C11.7636 0.0306542 15.0236 -0.819346 17.6636 0.990654C19.0736 1.95065 19.9436 3.58065 20.0036 5.28065C20.1436 9.16065 16.7036 12.2707 11.4536 17.0407L11.3536 17.1307Z" />
                                    </svg>
                                </div>

                                <div onClick={() => {
                                    const action = props.addToCart(e); // capture the action returned
                                    props.notifyCart(e.title, action);     // pass the action to toast
                                }}
                                    className='p-1.5 rounded cursor-pointer border border-gray-300'>
                                    <svg width="21" height="21" viewBox="0 0 21 21" strokeWidth={1} stroke='#0D6EFD'
                                        style={{
                                            fill: props.isInCart(e.id) ? "#0D6EFD" : "transparent",
                                            cursor: "pointer"
                                        }}
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M6.29989 16.7997C5.14491 16.7997 4.21043 17.7447 4.21043 18.8997C4.21043 20.0546 5.14491 20.9996 6.29989 20.9996C7.45487 20.9996 8.39985 20.0546 8.39985 18.8997C8.39985 17.7447 7.45487 16.7997 6.29989 16.7997ZM0 1.04998C0 1.62747 0.472492 2.09996 1.04998 2.09996H2.09996L5.8799 10.0693L4.46242 12.6313C3.69593 14.0383 4.70392 15.7497 6.29989 15.7497H17.8497C18.4272 15.7497 18.8997 15.2772 18.8997 14.6997C18.8997 14.1223 18.4272 13.6498 17.8497 13.6498H6.29989L7.45487 11.5498H15.2772C16.0647 11.5498 16.7577 11.1193 17.1147 10.4683L20.8736 3.65394C21.2621 2.96095 20.7581 2.09996 19.9601 2.09996H4.42042L3.71693 0.598489C3.54894 0.230996 3.17094 0 2.77195 0H1.04998C0.472492 0 0 0.472492 0 1.04998ZM16.7997 16.7997C15.6447 16.7997 14.7102 17.7447 14.7102 18.8997C14.7102 20.0546 15.6447 20.9996 16.7997 20.9996C17.9547 20.9996 18.8997 20.0546 18.8997 18.8997C18.8997 17.7447 17.9547 16.7997 16.7997 16.7997Z" />
                                    </svg>

                                </div>
                            </div>


                        </div>

                    </div>
                })}

                {/* GRID SELECTION */}
                <div className="flex gap-4 flex-wrap">
                    {gridSelect && currentItems.map((e, ind) => {
                        return <div key={ind} className='w-[32%] flex flex-col items-center border border-gray-300 shadow-lg cursor-pointer hover:scale-105 transition-all duration-300 ease-in rounded active:scale-95'>

                            <div onClick={() => { productDetail(e) }} className='py-6 h-64 flex justify-center items-center'>
                                <img className='h-full w-full' src={e.thumbnail} alt="" />
                            </div>

                            <div className='w-full flex'>
                                <div className='w-4/5 px-3 flex flex-col gap-1 py-2'>

                                    <div className='font-bold text-lg'>${e.price} &nbsp;<span className='text-gray-500 text-sm'>{e.discountPercentage}% off</span></div>

                                    <div className='flex gap-2'>
                                        <img src={getRatingImage(e.rating)} alt="" />
                                        <span className='text-[#FF9017]'>{e.rating}</span>
                                    </div>

                                    <div>{e.title}</div>

                                </div>

                                <div className='w-1/5 flex justify-center'>

                                    <div className='w-fit h-fit my-3   flex flex-col gap-2'>

                                        <div onClick={() => {
                                            const action = props.addToLater(e); // capture the action returned
                                            props.notifyLater(e.title, action);
                                        }} className='p-1.5 rounded cursor-pointer border border-gray-300'>
                                            <svg width="20" height="18" viewBox="0 0 20 18" strokeWidth={1} stroke='#0D6EFD'
                                                style={{
                                                    fill: props.isInLater(e.id) ? "#0D6EFD" : "transparent",
                                                    cursor: "pointer"
                                                }}
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M11.3536 17.1307C10.5936 17.8207 9.42357 17.8207 8.66357 17.1207L8.55357 17.0207C3.30357 12.2707 -0.126429 9.16065 0.00357106 5.28065C0.0635711 3.58065 0.933571 1.95065 2.34357 0.990654C4.98357 -0.809346 8.24357 0.0306542 10.0036 2.09065C11.7636 0.0306542 15.0236 -0.819346 17.6636 0.990654C19.0736 1.95065 19.9436 3.58065 20.0036 5.28065C20.1436 9.16065 16.7036 12.2707 11.4536 17.0407L11.3536 17.1307Z" />
                                            </svg>
                                        </div>

                                        <div onClick={() => {
                                            const action = props.addToCart(e); // capture the action returned
                                            props.notifyCart(e.title, action);     // pass the action to toast
                                        }}
                                            className='p-1.5 rounded cursor-pointer border border-gray-300'>
                                            <svg width="21" height="21" viewBox="0 0 21 21" strokeWidth={1} stroke='#0D6EFD'
                                                style={{
                                                    fill: props.isInCart(e.id) ? "#0D6EFD" : "transparent",
                                                    cursor: "pointer"
                                                }}
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M6.29989 16.7997C5.14491 16.7997 4.21043 17.7447 4.21043 18.8997C4.21043 20.0546 5.14491 20.9996 6.29989 20.9996C7.45487 20.9996 8.39985 20.0546 8.39985 18.8997C8.39985 17.7447 7.45487 16.7997 6.29989 16.7997ZM0 1.04998C0 1.62747 0.472492 2.09996 1.04998 2.09996H2.09996L5.8799 10.0693L4.46242 12.6313C3.69593 14.0383 4.70392 15.7497 6.29989 15.7497H17.8497C18.4272 15.7497 18.8997 15.2772 18.8997 14.6997C18.8997 14.1223 18.4272 13.6498 17.8497 13.6498H6.29989L7.45487 11.5498H15.2772C16.0647 11.5498 16.7577 11.1193 17.1147 10.4683L20.8736 3.65394C21.2621 2.96095 20.7581 2.09996 19.9601 2.09996H4.42042L3.71693 0.598489C3.54894 0.230996 3.17094 0 2.77195 0H1.04998C0.472492 0 0 0.472492 0 1.04998ZM16.7997 16.7997C15.6447 16.7997 14.7102 17.7447 14.7102 18.8997C14.7102 20.0546 15.6447 20.9996 16.7997 20.9996C17.9547 20.9996 18.8997 20.0546 18.8997 18.8997C18.8997 17.7447 17.9547 16.7997 16.7997 16.7997Z" />
                                            </svg>

                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>


                    })}
                </div>

            </div>

            {/* PAGINATION */}
            <div className={`flex justify-end p-4 ${totalPages > 1 ? "flex" : "hidden"}`}>
                <Pagination count={totalPages} page={page} onChange={handleChange} variant="outlined" shape="rounded" />
            </div>

        </div>
    )
}

export default ProductsRight
