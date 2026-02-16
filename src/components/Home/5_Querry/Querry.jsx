import suppliers from '../../../assets/Images/Home/5_Suppliers/suppliers.png'
import Querry_Left from './Querry_Left'
import Querry_Right from './Querry_Right'

const Consumer = () => {

    return (
        <div className='relative mx-8 my-4 bg-cover bg-center flex justify-evenly px-12 py-14 rounded cursor-default' style={{ backgroundImage: `url(${suppliers})` }}>
            <div className='absolute top-0 left-0 h-full w-full bg-linear-to-r from-[#2C7CF1] to-[#00D1FF]/50 opacity-90 rounded'></div>
            <div className='flex w-full justify-center gap-36 z-10'>
                <Querry_Left />
                <Querry_Right />
            </div>
        </div>
    )
}

export default Consumer