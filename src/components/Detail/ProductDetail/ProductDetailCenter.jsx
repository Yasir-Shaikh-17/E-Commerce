import React, { useEffect, useState } from 'react'
import rating5 from '../../../assets/icons/Ratings/rating-5.svg'
import rating4 from '../../../assets/icons/Ratings/rating-4.svg'
import rating3 from '../../../assets/icons/Ratings/rating-3.svg'
import rating2 from '../../../assets/icons/Ratings/rating-2.svg'
import review from '../../../assets/icons/review.svg'
import stock from '../../../assets/icons/stock.svg'
import tick from '../../../assets/icons/tick.svg'
import { useParams } from 'react-router-dom'

const ProductDetailCenter = (props) => {
  console.log(props)

  const [reviews, setReviews] = useState([])
  const params = useParams()

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

  useEffect(() => {
    setReviews(props.details.reviews)
  }, [props])

  return (
    <div className='flex-1 p-2 flex flex-col gap-1'>
      <div className='flex items-center gap-2'>
        <img src={tick} alt="" />
        <div className='text-[#00B517] text-lg font-semibold'>{props.details.availabilityStatus}</div>
      </div>

      <div className='flex items-center justify-between'>
        <div className='text-[#1c1c1c] font-semibold text-3xl'>{props.details.title}</div>
        <div className='w-fit h-fit my-3   flex flex-col gap-2'>
          <div onClick={() => {
              const action = props.addToLater(props.details); // add/remove and get action
              props.notifyLater(props.details.title, action);     // pass action to notify
            }} className='flex items-center gap-2 p-1.5 rounded cursor-pointer border border-gray-300 active:scale-95 transition duration1'>
            <div className='text-[#0D6EFD] font-medium'>Save for later</div>
            <div className='flex items-center justify-center gap-2 p-1.5 cursor-pointer active:scale-95 transition duration1' >
              <svg width="20" height="18" viewBox="0 0 20 18" strokeWidth={1} stroke='#0D6EFD'
                style={{
                  fill: props.isInLater(props.details.id) ? "#0D6EFD" : "transparent",
                  cursor: "pointer"
                }}
                xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M11.3536 17.1307C10.5936 17.8207 9.42357 17.8207 8.66357 17.1207L8.55357 17.0207C3.30357 12.2707 -0.126429 9.16065 0.00357106 5.28065C0.0635711 3.58065 0.933571 1.95065 2.34357 0.990654C4.98357 -0.809346 8.24357 0.0306542 10.0036 2.09065C11.7636 0.0306542 15.0236 -0.819346 17.6636 0.990654C19.0736 1.95065 19.9436 3.58065 20.0036 5.28065C20.1436 9.16065 16.7036 12.2707 11.4536 17.0407L11.3536 17.1307Z" />
              </svg>
            </div>
          </div>
          <div  onClick={() => {
              const action = props.addToCart(props.details); // add/remove and get action
              props.notifyCart(props.details.title, action);     // pass action to notify
            }}
            className='flex items-center justify-center gap-2 p-1.5 rounded cursor-pointer border border-gray-300 active:scale-95 transition duration1'>
            <div className='text-[#0D6EFD] font-medium'>Add to cart</div>
            <svg width="21" height="21" viewBox="0 0 21 21" strokeWidth={1} stroke='#0D6EFD'
              style={{
                fill: props.isInCart(props.details.id) ? "#0D6EFD" : "transparent",
                cursor: "pointer"
              }}
              xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M6.29989 16.7997C5.14491 16.7997 4.21043 17.7447 4.21043 18.8997C4.21043 20.0546 5.14491 20.9996 6.29989 20.9996C7.45487 20.9996 8.39985 20.0546 8.39985 18.8997C8.39985 17.7447 7.45487 16.7997 6.29989 16.7997ZM0 1.04998C0 1.62747 0.472492 2.09996 1.04998 2.09996H2.09996L5.8799 10.0693L4.46242 12.6313C3.69593 14.0383 4.70392 15.7497 6.29989 15.7497H17.8497C18.4272 15.7497 18.8997 15.2772 18.8997 14.6997C18.8997 14.1223 18.4272 13.6498 17.8497 13.6498H6.29989L7.45487 11.5498H15.2772C16.0647 11.5498 16.7577 11.1193 17.1147 10.4683L20.8736 3.65394C21.2621 2.96095 20.7581 2.09996 19.9601 2.09996H4.42042L3.71693 0.598489C3.54894 0.230996 3.17094 0 2.77195 0H1.04998C0.472492 0 0 0.472492 0 1.04998ZM16.7997 16.7997C15.6447 16.7997 14.7102 17.7447 14.7102 18.8997C14.7102 20.0546 15.6447 20.9996 16.7997 20.9996C17.9547 20.9996 18.8997 20.0546 18.8997 18.8997C18.8997 17.7447 17.9547 16.7997 16.7997 16.7997Z" />
            </svg>

          </div>
        </div>
      </div>

      <div>
        <ul className='list-disc flex items-center gap-5 text-[#787A80]'>
          <li className='flex items-center gap-1'>
            <img src={getRatingImage(props.details.rating)} alt="" />
            <div className='text-[#FF9017]'>{Math.round(props.details.rating)}</div>
          </li>
          <li className='flex items-center gap-1 cursor-pointer'>
            <img className='h-5' src={review} alt="" />
            <div>{reviews.length} reviews</div>
          </li>
          <li className='flex items-center gap-1 cursor-pointer'>
            <img className='h-5' src={stock} alt="" />
            <div>{props.details.stock} In Stock</div>
          </li>
        </ul>
      </div>

      <div className='flex items-center justify-evenly my-3 bg-[#FFF0DF] m-1 py-3'>
        <div className='border-r w-1/3 flex justify-center items-center flex-col'>
          <div className='font-semibold text-[#FA3434] text-xl'>$98</div>
          <div className='text-gray-800 text-base'>50-100 pcs</div>
        </div>
        <div className='border-r w-1/3 flex justify-center items-center flex-col'>
          <div className='font-semibold text-xl'>$90</div>
          <div className='text-gray-800 text-base'>100-700 pcs</div>
        </div>
        <div className='w-1/3 flex justify-center items-center flex-col'>
          <div className='font-semibold text-xl'>$78</div>
          <div className='text-gray-800 text-base'>700+ pcs</div>
        </div>
      </div>

      <div>

        <div className='flex items-center border-b-2 border-b-gray-200 pb-2'>
          <div className='w-1/3'>Price</div>
          <div>${props.details.price}</div>
        </div>

        <div className='py-2 flex flex-col gap-2 border-b-2 border-b-gray-200'>

          <div className='flex items-center'>
            <div className='w-1/3'>Discount</div>
            <div>{props.details.discountPercentage}% <span className='text-xs'>off</span></div>
          </div>

          <div className='flex items-center'>
            <div className='w-1/3'>Category</div>
            <div>{props.details.category}</div>
          </div>

        </div>

        <div className='py-2 flex flex-col gap-2'>

          <div className='flex items-center'>
            <div className='w-1/3'>Minimum orders</div>
            <div>{props.details.minimumOrderQuantity}</div>
          </div>

          <div className='flex items-center'>
            <div className='w-1/3'>Warranty</div>
            <div>{props.details.warrantyInformation}</div>
          </div>

          <div className='flex items-center'>
            <div className='w-1/3'>Return policy</div>
            <div>{props.details.returnPolicy}</div>
          </div>

        </div>


      </div>


    </div >
  )
}

export default ProductDetailCenter
