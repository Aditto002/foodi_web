import React from "react";
import services1 from '../image/services1.png'
import services2 from '../image/services2.png'
import services3 from '../image/services3.png'
import services4 from '../image/services4.png'

const Services =()=>{
    return(
        <div className="max-w-6xl mx-auto flex gap-36 mb-10">
            <div className="flex flex-col gap-5 mt-10">
                    <p className="text-red-400 text-xl">Our Story & Services</p>
                    <h1 className="text-5xl font-bold leading-normal"
                    style={{
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
                    }}
                    >Our Culinary Journey<br /> And Services</h1>
                    <p className="text-xl text-stone-500 leading-relaxed">Rooted in passion, we curate unforgettable dining<br />experiences and offer exceptional services,<br />blending culinary artistry with warm hospitality.</p>
                     <div className="flex">
                        
                     <div className="flex bg-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-700 transition duration-300 ease-in-out p-2 gap-1 px-5 w-1/3 justify-center text-white items-center rounded-3xl">
                            <button>
                                <h1 className="text-2xl">Explore</h1>
                            </button>  
                        </div>
                     </div>
                </div>

                <div className="grid grid-cols-2 gap-16">
                    <div className="bg-slate-100  p-5 rounded-2xl shadow-2xl">
                        <img src={services1} alt=""  className="h-10 mx-auto mb-3"/>
                        <h1 className="text-green-500 font-bold text-xl text-center mb-2">Catering</h1>
                        <p className="text-slate-500 text-center">Delight your guests <br /> with our flavors and <br /> presentation</p>
                    </div>
                    <div className="bg-slate-100  p-5 rounded-2xl shadow-2xl">
                        <img src={services2} alt=""  className="h-10 mx-auto mb-3"/>
                        <h1 className="text-green-500 font-bold text-xl text-center mb-2">Fast delivery</h1>
                        <p className="text-slate-500 text-center">We deliver your order<br /> promptly to your door</p>
                    </div>
                    <div className="bg-slate-100  p-5 rounded-2xl shadow-2xl">
                        <img src={services3} alt=""  className="h-10 mx-auto mb-3"/>
                        <h1 className="text-green-500 font-bold text-xl text-center mb-2">Online Ordering</h1>
                        <p className="text-slate-500 text-center">Explore menu & order <br />with ease using our<br /> Online Ordering</p>
                    </div>
                    <div className="bg-slate-100  p-5 rounded-2xl shadow-2xl">
                        <img src={services4} alt=""  className="h-10 mx-auto mb-3"/>
                        <h1 className="text-green-500 font-bold text-xl text-center mb-2">Gift Cards</h1>
                        <p className="text-slate-500 text-center">Give the gift of <br />exceptional dining with <br />Foodi Gift Cards</p>
                    </div>
                </div>
            
        </div>
    )

}

export default Services;