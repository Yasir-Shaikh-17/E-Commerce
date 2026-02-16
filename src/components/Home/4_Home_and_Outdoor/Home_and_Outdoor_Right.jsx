import { useNavigate } from "react-router-dom"


const Section2Right = (props) => {

    const navigate = useNavigate()

  return (
    <div className='grow flex flex-wrap h-full'>
        {props.item2.map((e, ind)=>{
            return <div key={ind} onClick={()=>{navigate("/products/"+ e.id)}} className='w-1/4 border border-[#E0E0E0] flex h-1/2 p-3 cursor-pointer'>
            <div className='w-1/2 flex flex-col gap-2'>
                <div className='text-[#1C1C1C] font-medium'>{e.title}</div>
                <div className='text-sm text-[#8B96A5]'>
                    <div>From</div>
                    <div>USD {e.price}</div>
                </div>
            </div>
            <div className='w-1/2 flex justify-end items-end'>
                <img className='h-16' src={e.thumbnail} alt="" />
            </div>
        </div>
        })}

    </div>
  )
}

export default Section2Right
