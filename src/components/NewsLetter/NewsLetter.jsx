import email from '../../assets/icons/email.svg'

const NewsLetter = () => {
    return (
        <div className='my-4 py-10 bg-gray-200 flex justify-center items-center flex-col gap-6 cursor-default'>
            <div className='text-center'>
                <div className='font-semibold text-xl'>Subscribe on our newsletter</div>
                <div className='text-gray-800'>Get daily news on upcoming offers from many suppliers all over the world</div>
            </div>
            <div className='flex gap-3'>
                <div className='flex items-center gap-2 bg-white p-2 rounded shadow-lg'>
                    <img src={email} alt="" />
                    <input className='focus:outline-0' type="text" placeholder='Email'/>
                </div>
                <button className='bg-linear-to-b from-[#127FFF] to-[#0067FF] text-white flex justify-center items-center px-4 py-2 rounded hover:scale-105 shadow-lg active:scale-95 transition-all duration-150 cursor-pointer'>Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetter
