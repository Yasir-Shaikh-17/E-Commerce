import hero from "../../../assets/Images/Home/1_Hero/hero.png"
const HeroCenter = () => {
    return (
        <div className='grow bg-gray-300 relative'>
            <img className="w-full h-full" src={hero} alt="" />
            <div className="absolute  top-0 left-0 m-10 flex flex-col gap-6">
                <div>
                    <h4 className="text-3xl">Latest trending</h4>
                    <h4 className="text-4xl font-bold">Electronic items</h4>
                </div>
                <div>
                    <button className="bg-white px-4 py-2 rounded shadow-lg hover:scale-105 active:scale-95 transition-all duration-150 cursor-pointer">Learn more</button>
                </div>
            </div>
        </div>
    )
}

export default HeroCenter
