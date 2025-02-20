import React from "react";
import salad1 from '../image/salad.png'
import salad2 from '../image/ss2.png'
import salad3 from '../image/s3.png'
import star1 from '../image/st1.png'
import h1 from '../image/h1.png'
import h2 from '../image/h2.png'
import s4 from '../image/s4.png'
import group1 from '../image/Group1.png'
import group2 from '../image/Group2.png'


const Dishes = () => {
    return (
        <div className="max-w-6xl mx-auto mt-32">
            <div className="flex justify-between items-center">
            <div className="mt-10">
                <p className="text-red-400 mb-5 text-xl">Special Dishes</p>
                <h1 className="text-4xl font-bold leading-normal mb-10">Standout Dishes <br />From Our Menu</h1>
            </div>
            <div className="flex gap-6">
                <img src={group1} alt="" className="h-12 bg-slate-100 hover:bg-green-400 p-4 px-5 rounded-full" />
                <img src={group2} alt="" className="h-12 bg-green-400 p-4 px-5 rounded-full" />
            </div>
            </div>

            <div>

                <div className="grid grid-cols-3 gap-36">
                    <div className="bg-slate-100 rounded-2xl shadow-2xl mb-10 hover:bg-gradient-to-r hover:from-slate-300 hover:to-green-500 transition duration-300 ease-in-out">
                        <div className="py-5 px-5">
                            <div className=" flex justify-end"
                            style={{
                                display:'absolute',
                                margin:'-18px',
                                
                            }}>
                                <img src={h1} alt="" className="h-10 bg-green-500 p-3" 
                                style={{
                                    borderRadius:'0 16px 0 16px'
                                }}/>
                            </div>
                            <div className="  mx-auto">
                                <img src={s4} alt="" className="h-40 mx-auto" />
                            </div>
                            <div className=" max-w-56 mx-auto">
                                <h1 className="font-bold text-xl mb-2 mt-3">Fattoush salad</h1>
                                <p className="text-gray-500 text-sm mb-2">Description of the item</p>
                                <div className="flex justify-between">
                                    <div><h1 className="font-bold mt-2"><span className="text-red-400">$</span>24.00</h1></div>
                                    <div className="flex items-center">
                                        <img src={star1} alt="" className="h-5 pr-2" />
                                        <p>4.6</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-slate-100 rounded-2xl shadow-2xl mb-10 hover:bg-gradient-to-r hover:from-slate-300 hover:to-green-500 transition duration-300 ease-in-out">
                        <div className="py-5 px-5">
                            <div className=" flex justify-end"
                            style={{
                                display:'absolute',
                                margin:'-18px',
                                
                            }}>
                                <img src={h2} alt="" className="h-10 bg-green-500 p-3" 
                                style={{
                                    borderRadius:'0 16px 0 16px'
                                }}/>
                            </div>
                            <div className="  mx-auto">
                                <img src={salad2} alt="" className="h-40 mx-auto" />
                            </div>
                            <div className=" max-w-56 mx-auto">
                                <h1 className="font-bold text-xl mb-2 mt-3">Vegetable salad</h1>
                                <p className="text-gray-500 text-sm mb-2">Description of the item</p>
                                <div className="flex justify-between">
                                    <div><h1 className="font-bold mt-2"><span className="text-red-400">$</span>26.00</h1></div>
                                    <div className="flex items-center">
                                        <img src={star1} alt="" className="h-5 pr-2" />
                                        <p>4.9</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-slate-100 rounded-2xl shadow-2xl mb-10 hover:bg-gradient-to-r hover:from-slate-300 hover:to-green-500 transition duration-300 ease-in-out">
                        <div className="py-5 px-5">
                            <div className=" flex justify-end"
                            style={{
                                display:'absolute',
                                margin:'-18px',
                                
                            }}>
                                <img src={h2} alt="" className="h-10 bg-green-500 p-3" 
                                style={{
                                    borderRadius:'0 16px 0 16px'
                                }}/>
                            </div>
                            <div className="  mx-auto">
                                <img src={salad3} alt="" className="h-40 mx-auto " />
                            </div>
                            <div className=" max-w-56 mx-auto">
                                <h1 className="font-bold text-xl mb-2 mt-3">Egg vegi salad</h1>
                                <p className="text-gray-500 text-sm mb-2">Description of the item</p>
                                <div className="flex justify-between">
                                    <div><h1 className="font-bold mt-2"><span className="text-red-400">$</span>23.00</h1></div>
                                    <div className="flex items-center">
                                        <img src={star1} alt="" className="h-5 pr-2" />
                                        <p>4.5</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>


        </div>


    )


}

export default Dishes;