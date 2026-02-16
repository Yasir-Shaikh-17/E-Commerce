import TopList from '../components/1_TopList/TopList'
import Hero from '../components/Home/2_Hero/Hero'
import Deal_and_Offer from '../components/Home/3_Deal_and_Offer/Deal_and_Offer'
import Home_and_Outdoor from '../components/Home/4_Home_and_Outdoor/Home_and_Outdoor'
import Querry from '../components/Home/5_Querry/Querry'
import Suppliers from '../components/Home/6_Suppliers/Suppliers'
import Recomended from '../components/Home/7_Recomended/Recomended'
import Extra from '../components/Home/8_Extra/Extra'
import NewsLetter from '../components/NewsLetter/NewsLetter'
import bg2 from '../assets/Images/Home/3_Home_and_Outdoor/mobile_bg.jpg'
import bg3 from '../assets/Images/Home/3_Home_and_Outdoor/sports.jpg'
import { useEffect, useState } from 'react'




const Home = (props) => {
  const [item2, setItem2] = useState([])
  const [item3, setItem3] = useState([])

  const detail2 =
  {
    img: bg2,
    text: "Smart phones"
  }

  const detail3 =
  {
    img: bg3,
    text: "Sports accessories"
  }

  const getItems2 = async()=>{
    let res = await fetch("https://dummyjson.com/products/category/smartphones?limit=8")
    let data = await res.json()
    setItem2(data.products)
  }

  const getItems3 = async()=>{
    let res = await fetch("https://dummyjson.com/products/category/sports-accessories?limit=8")
    let data = await res.json()
    setItem3(data.products)
  }

  useEffect(()=>{
    getItems2()
    getItems3()
  }, [])


  return (
    <div>
      <TopList />
      <Hero category={props.category} setCategory={props.setCategory}/>
      <Deal_and_Offer />
      <Home_and_Outdoor item2={item2} detail={detail2} />
      <Home_and_Outdoor item2={item3} detail={detail3} />
      <Querry />
      <Recomended />
      <Extra />
      <Suppliers />
      <NewsLetter />
    </div>
  )
}

export default Home