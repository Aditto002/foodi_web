import React from "react";
import pc1 from '../image/pc1.png'
import pc2 from '../image/pc2.png'
import pc3 from '../image/pc3.png'
import pc4 from '../image/pc4.png'


const PopCatagories =()=>{
    return(
        <div className=" mb-10">
           <div className="mt-40 flex  justify-center items-center">
            <div className=" flex flex-col gap-5 items-center mb-5">
            <p className="text-red-500 text-1xl">Customer Favorites</p>
            <h1 className="text-4xl font-bold">Popular Catagories</h1>
            </div>
           </div>

           <div className="flex justify-between max-w-6xl items-center mx-auto mt-10">
            <div className=" flex flex-col items-center bg-slate-200 shadow-2xl py-12 px-16 rounded-2xl shadow-inner hover:shadow-current">
                <img src={pc1} alt="" className="h-20 bg-green-300 rounded-full py-4 px-2 items-center mb-2" />
                <p className="font-bold text-xl">Main Dish</p>
                <p>(86 dishes)</p>

            </div>
            <div className=" flex flex-col items-center bg-slate-200 shadow-2xl py-12 px-16 rounded-2xl shadow-inner hover:shadow-current">
                <img src={pc2} alt="" className="h-20 bg-green-300 rounded-full py-5 px-2 items-center mb-2" />
                <p className="font-bold text-xl">Break Fast</p>
                <p>(12 break fast)</p>

            </div>
            <div className=" flex flex-col items-center bg-slate-200 shadow-2xl py-12 px-16 rounded-2xl shadow-inner hover:shadow-current">
                <img src={pc3} alt="" className="h-20 bg-green-300 rounded-full py-4 px-3 items-center mb-2" />
                <p className="font-bold text-xl">Dessert</p>
                <p>(48 dessert)</p>

            </div>
            <div className=" flex flex-col items-center bg-slate-200 shadow-2xl py-12 px-16 rounded-2xl shadow-inner hover:shadow-current">
                <img src={pc4} alt="" className="h-20 bg-green-300 rounded-full py-4 px-5 items-center mb-2" />
                <p className="font-bold text-xl">Browse All</p>
                <p>(255 Items)</p>

            </div>
           </div>
        </div>
    )

}
export default PopCatagories;