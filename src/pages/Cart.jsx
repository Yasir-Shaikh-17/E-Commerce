import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import rating2 from '../assets/icons/Ratings/rating-2.svg'
import rating3 from '../assets/icons/Ratings/rating-3.svg'
import rating4 from '../assets/icons/Ratings/rating-4.svg'
import rating5 from '../assets/icons/Ratings/rating-5.svg'
import noProducts from '../assets/Images/noProducts.png'
import banner from "../assets/Images/View/banner.svg";
import american from '../assets/icons/cards/american_express.svg'
import visa from '../assets/icons/cards/visa.svg'
import apple from '../assets/icons/cards/apple.svg'
import master from '../assets/icons/cards/master.svg'
import paypal from '../assets/icons/cards/paypal.svg'

const Cart = ({ cartItems, setCartProducts, laterProducts, setlaterProducts }) => {
    const removeItem = (itemToRemove) => {
        const updatedCart = cartItems.filter(
            i => i.id !== itemToRemove.id
        );

        setCartProducts(updatedCart);
        localStorage.setItem("Products", JSON.stringify(updatedCart));
    };

    const removelater = (itemToRemove) => {
        const updatedLater = laterProducts.filter(
            item => item.id !== itemToRemove.id
        );

        setlaterProducts(updatedLater);
        localStorage.setItem("later", JSON.stringify(updatedLater));
    };



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

    const total = cartItems.reduce((total, item) => {
        return total + Number(item.price);
    }, 0)

    const discount = total >= 40 ? 60 : 20;
    const tax = 14;

    return (
        <div className='mx-8 my-4'>

            <div className='flex flex-col gap-3'>
                <div className='flex gap-3'>

                    <div className='border border-gray-300 py-4 w-3/4'>
                        <h1 className='text-xl font-bold px-4'>My Cart ({cartItems.length > 0 ? `${cartItems.length}` : 0})</h1>

                        <div className='flex flex-col gap-3 m-4'>
                            {cartItems.length < 1 && <div className='flex justify-center items-center'>
                                <img className='h-96 w-96' src={noProducts}></img>
                            </div>
                            }

                            {cartItems.length >= 1 && cartItems.map((e, ind) => {
                                console.log(e)
                                return <div key={ind} className='z-10 border border-gray-300 p-1 rounded flex items-center'>
                                    <div><img className='h-24 bg-[#EEEEEE] m-3 rounded' src={e.image} alt="" /></div>

                                    <div className='flex justify-between w-full h-24 p-2 px-6'>
                                        <div className='flex flex-col gap-3'>
                                            <div className='font-semibold text-[#1c1c1c]'>{e.title}</div>
                                            <div className='flex gap-3 z-20'>
                                                <button onClick={() => { removeItem(e) }} className='border border-gray-300 rounded px-3 py-1 cursor-pointer font-medium text-[#FA3434]'>Remove</button>
                                            </div>
                                        </div>

                                        <div className='font-bold flex flex-col gap-1'>
                                            <div className='font-semibold text-[#1c1c1c]'>${e.price}</div>
                                            <div><img src={getRatingImage(e.rating)} alt="" /></div>
                                        </div>

                                    </div>

                                </div>
                            })}


                        </div>

                    </div>
                    <div className='w-1/4 flex flex-col gap-3'>

                        <div className="cuppon flex flex-col gap-2 border border-gray-300 px-2 py-4">
                            <div>Have a coupon?</div>
                            <div className='flex items-center border border-gray-300 rounded'>
                                <input type="text" className=' p-2 w-3/4' placeholder='Add coupon' />
                                <div className='w-1/4 flex justify-center items-center border-l border-l-gray-300 font-medium text-[#0D6EFD] cursor-pointer active:scale-95 transition duration-150'>Apply</div>
                            </div>
                        </div>

                        <div className='border border-gray-300 px-2'>
                            <div className='flex flex-col gap-2 border-b border-b-gray-300 py-4'>
                                <div className='flex justify-between'>
                                    <div>Subtotal:</div>
                                    <div>
                                        ${total}
                                    </div>

                                </div>
                                <div className='flex justify-between'>
                                    <div>Discount:</div>
                                    <div>-${discount}</div>
                                </div>
                                <div className='flex justify-between'>
                                    <div>Tax:</div>
                                    <div>${tax}</div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between py-4'>
                                <div>Total:</div>
                                <div>${total > 0 ? (total - discount + tax).toFixed(2) : 0}</div>
                            </div>

                            <div className='flex justify-center items-center'>
                                <button className='bg-[#00B517] w-1/2 px-4 py-2 rounded text-white cursor-pointer active:scale-95'>Checkout</button>
                            </div>

                            <div className='flex justify-evenly py-4 items-center'>
                                <div className='border border-gray-300 p-2 rounded'>
                                    <img src={american} alt="" />
                                </div>
                                <div className='border border-gray-300 p-2 rounded'>
                                    <img src={master} alt="" />
                                </div>
                                <div className='border border-gray-300 p-2 rounded'>
                                    <img src={paypal} alt="" />
                                </div>
                                <div className='border border-gray-300 p-2 rounded'>
                                    <img src={visa} alt="" />
                                </div>
                                <div className='border border-gray-300 p-2 rounded'>
                                    <img src={apple} alt="" />
                                </div>
                            </div>

                        </div>


                    </div>

                </div>

                <div className='border border-gray-300 relative'>
                    <div className='text-xl font-bold p-4'>Saved for later</div>

                    {laterProducts.length < 1 && <div className='flex justify-center items-center'>
                        <img className='h-96 w-96' src={noProducts}></img>
                    </div>
                    }

                    {laterProducts.length >= 1 && <div className='border border-gray-300 p-4 flex flex-wrap gap-7'>
                        {laterProducts.length >= 1 && laterProducts.map((e, ind) => {
                            return <div key={ind} className='shrink-0'>
                                <div className='border border-gray-300 h-72 w-52 relative'>
                                    <img className='bg-[#EEEEEE] h-40 w-full' src={e.image} alt="" />
                                    <div className='p-2'>
                                        <div className='font-medium'>${e.price}</div>
                                        <div>{e.title}</div>
                                        <button onClick={() => { removelater(e) }} className='border border-gray-300 px-3 py-1 rounded text-red-500 font-medium absolute bottom-0 left-0 m-2 cursor-pointer active:scale-95 transition duration-150 '>Remove</button>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                    }
                </div>

                <div>
                    <img src={banner} alt="" />
                </div>

            </div>

        </div>
    )
}

export default Cart
