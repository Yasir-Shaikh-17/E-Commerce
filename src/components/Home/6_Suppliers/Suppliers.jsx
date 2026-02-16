import uae from '../../../assets/Images/Home/8_Flags/uae.png'
import aus from '../../../assets/Images/Home/8_Flags/aus.png'
import usa from '../../../assets/Images/Home/8_Flags/usa.png'
import rus from '../../../assets/Images/Home/8_Flags/rus.png'
import itl from '../../../assets/Images/Home/8_Flags/itl.png'
import den from '../../../assets/Images/Home/8_Flags/den.png'
import fra from '../../../assets/Images/Home/8_Flags/fra.png'
import chi from '../../../assets/Images/Home/8_Flags/chi.png'
import gb from '../../../assets/Images/Home/8_Flags/gb.png'


const Suppliers = () => {

    const item = [
        {
            img: uae,
            name: "Arab Emirates",
            shop: "shopname.ae"
        },

        {
            img: aus,
            name: "Australia",
            shop: "shopname.aus"
        },

        {
            img: usa,
            name: "United States",
            shop: "shopname.usa"
        },

        {
            img: rus,
            name: "Russia",
            shop: "shopname.ru"
        },

        {
            img: itl,
            name: "Italy",
            shop: "shopname.it"
        },

        {
            img: den,
            name: "Denmark",
            shop: "shopname.den"
        },

        {
            img: fra,
            name: "France",
            shop: "shopname.com.fr"
        },

        {
            img: uae,
            name: "Arab Emirates",
            shop: "shopname.ae"
        },

        {
            img: chi,
            name: "China",
            shop: "shopname.ch"
        },

        {
            img: gb,
            name: "Great Britain",
            shop: "shopname.com.uk"
        },
    ]

    return (
        <div className='mx-8 my-4 flex flex-col gap-4'>
            <h2 className='text-xl font-semibold'>Suppliers by region</h2>
            <div className='flex flex-wrap'>

                {item.map((e, ind) => {
                    return <div key={ind} className='flex items-center justify-start gap-3 w-1/5 my-3 cursor-default'>
                        <img className='h-6' src={e.img} alt="" />
                        <div className='leading-tight'>
                            <div>{e.name}</div>
                            <div className='text-gray-500'>{e.shop}</div>
                        </div>
                    </div>
                })}


            </div>
        </div>
    )
}

export default Suppliers
