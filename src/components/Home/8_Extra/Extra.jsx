import img1 from '../../../assets/Images/Home/7_Extra/img1.png'
import img2 from '../../../assets/Images/Home/7_Extra/img2.png'
import img3 from '../../../assets/Images/Home/7_Extra/img3.png'
import img4 from '../../../assets/Images/Home/7_Extra/img4.png'
import search from '../../../assets/icons/search.svg'
import customise from '../../../assets/icons/customise.svg'
import plane from '../../../assets/icons/plane.svg'
import security from '../../../assets/icons/security.svg'

const Extra = () => {

    const item = [
        {
            img: img1,
            icon: search,
            text: `Source from Industry Hubs`
        },
        {
            img: img2,
            icon: customise,
            text: "Customize Your Products"
        },
        {
            img: img3,
            icon: plane,
            text: "Fast, reliable shipping by ocean or air"
        },
        {
            img: img4,
            icon: security,
            text: "Product monitoring and inspection"
        },
    ]

    return (
        <div className='mx-8 my-4 flex flex-col gap-4 rounded'>
            <h2 className='text-xl font-semibold'>Our extra services</h2>

            <div className='flex items-center gap-4'>

                {item.map((e, ind)=>{
                    return <div key={ind} className='border-2 border-gray-200 rounded w-fit hover:scale-105 transition-all ease-in duration-150 shadow-lg cursor-pointer active:scale-95'>
                    <div className='relative'>
                        <img className='rounded' src={e.img} alt="" />
                        <div className='absolute top-0 left-0 h-full w-full bg-black/40 rounded'></div>
                    </div>
                    <div className='flex justify-between items-center py-3 px-4 relative'>
                        <p className='w-[60%]'>{e.text}</p>
                        <div className='bg-[#D1E7FF] p-4 rounded-full absolute top-[-35%] right-0 mx-4'>
                            <img src={e.icon} alt="" />
                        </div>
                    </div>
                </div>
                })}

                
                
            </div>


        </div>
    )
}

export default Extra
