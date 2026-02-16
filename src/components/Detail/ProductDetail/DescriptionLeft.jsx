import React, { useEffect, useState } from 'react'
import user from '../../../assets/icons/detailuser.svg'
import { useNavigate } from 'react-router-dom'
import rating5 from '../../../assets/icons/Ratings/rating-5.svg'
import rating4 from '../../../assets/icons/Ratings/rating-4.svg'
import rating3 from '../../../assets/icons/Ratings/rating-3.svg'
import rating2 from '../../../assets/icons/Ratings/rating-2.svg'

const DescriptionLeft = ({ details }) => {
  console.log(details)

  const navigate = useNavigate()

  const tabs = ["Description", "Reviews", "Shipping details"]
  const [activeTab, setActiveTab] = useState("Description")

  const changeShow = (e) => {
    setActiveTab(e)
  }

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
  }, [details])



  const reviews = details.reviews

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




  return (
    <div>
      <div className='w-full flex gap-3 border-0'>

        <div className='border h-fit border-gray-300 w-3/4 rounded'>
          <div className="top flex items-center gap-6 p-3">

            {tabs.map((e, ind) => {
              return <div key={ind} onClick={() => { changeShow(e) }} className={`cursor-pointer relative font-semibold ${activeTab === e ? "text-[#0D6EFD] before:content-[''] before:absolute before:left-0 before:-bottom-1.5 before:w-full before:h-1 before:bg-[#0D6EFD]" : ""}`}>{e}</div>
            })}

          </div>

          {activeTab == "Description" && <div className='p-3 flex flex-col gap-3'>
            <h1 className='text-3xl font-bold text-[#1c1c1c]'>Description</h1>
            <div>{details.description}</div>
          </div>}


          {activeTab == "Reviews" && reviews.map((e, ind) => {
            return <div key={ind}>
              <div className='review m-3 p-3 rounded border border-gray-300'>

                <div className='reviewTpp flex items-center justify-between'>
                  <div className='reviewTopLeft flex items-center gap-3 leading-5'>
                    <div className='bg-emerald-300 w-fit p-2 rounded-full'><img className='h-8' src={user} alt="" /></div>
                    <div>
                      <div className='font-medium'>{e.reviewerName}</div>
                      <div>{e.reviewerEmail}</div>
                    </div>
                  </div>
                  <div className='reviewTopRight'>
                    <img src={getRatingImage(e.rating)} alt="" />
                  </div>
                </div>

                <div className="reviewText pl-14 py-2">
                  {e.comment}
                </div>

              </div>
            </div>
          })}

          {activeTab == "Shipping details" && <div className='m-4'>

            <h1 className='text-3xl font-bold text-[#1c1c1c]'>Enter Shipping Details</h1>

            <div className='flex flex-col'>

              <div className='flex flex-col gap-2 p-2'>
                <div className='text-lg font-medium'>Country</div>
                <input type="text" placeholder='Enter Your Country ' className='focus:outline-0 border border-gray-300 w-full p-2 rounded ' />
              </div>

              <div className='flex flex-col gap-2 p-2'>
                <div className='text-lg font-medium'>Name</div>
                <div className='flex gap-3'>
                  <input type="text" placeholder='First Name ' className='focus:outline-0 border border-gray-300 w-1/2 p-2 rounded ' />
                  <input type="text" placeholder='Last Name ' className='focus:outline-0 border border-gray-300 w-1/2 p-2 rounded ' />
                </div>
              </div>

              <div className='flex flex-col gap-2 p-2'>
                <div className='text-lg font-medium'>Phone number</div>
                <input type="text" placeholder='Phone number ' className='focus:outline-0 border border-gray-300 w-full p-2 rounded ' />
              </div>

              <div className='flex flex-col gap-2 p-2'>
                <div className='text-lg font-medium'>Email address</div>
                <input type="text" placeholder='Email Address' className='focus:outline-0 border border-gray-300 w-full p-2 rounded ' />
              </div>

              <div className='flex flex-col gap-2 p-2'>
                <div className='text-lg font-medium'>Street and house number</div>
                <input type="text" placeholder='Enter Street and house number' className='focus:outline-0 border border-gray-300 w-full p-2 rounded ' />
              </div>

              <div className='flex gap-3'>

                <div className='flex flex-col gap-2 w-1/2 p-2'>
                  <div className='text-lg font-medium'>City</div>
                  <input type="text" placeholder='Enter City' className='focus:outline-0 border border-gray-300 w-full p-2 rounded' />
                </div>

                <div className='flex flex-col gap-2 w-1/2 p-2'>
                  <div className='text-lg font-medium'>Region</div>
                  <input type="text" placeholder='Enter Region' className='focus:outline-0 border border-gray-300 w-full p-2 rounded' />
                </div>

              </div>

              <div className='flex flex-col gap-2 p-2'>
                <div className='text-lg font-medium'>Postal code</div>
                <input type="text" placeholder='Postal Code' className='focus:outline-0 border border-gray-300 w-full p-2 rounded ' />
              </div>

            </div>


          </div>}



        </div>

        <div className='w-1/4 h-fit border border-gray-300 rounded p-2'>
          <div className='font-semibold'>You may like</div>

          <div>
            {items.map((e, ind) => {
              return <div key={ind} onClick={() => { navigate(`/products/` + e.id); window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); }}>
                <div className='flex gap-2 items-center cursor-pointer'>
                  <img className='h-20 bg-white my-3 rounded border border-gray-200' src={e.thumbnail} alt="" />
                  <div>
                    <div className='text-[#1c1c1c]'>{e.title}</div>
                    <div className='text-gray-500'>${e.price}</div>
                  </div>
                </div>
              </div>
            })}
          </div>

        </div>

      </div>
    </div>
  )
}

export default DescriptionLeft
