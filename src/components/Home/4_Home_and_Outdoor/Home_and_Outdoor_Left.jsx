

const Section2Left = (props) => {
  return (
    <div className='w-60 shrink-0 h-full bg-cover bg-center relative' style={{ backgroundImage: `url(${props.detail.img})` }}>
      <div className='absolute px-3 py-8 flex flex-col gap-3 pr-20'>
        <div className='text-xl font-bold text-white'>{props.detail.text}</div>
        <button className='bg-white px-4 py-1.5 rounded shadow-lg hover:scale-105 active:scale-95 transition-all duration-150 cursor-pointer'>Source now</button>
      </div>
    </div>
  )
}

export default Section2Left
