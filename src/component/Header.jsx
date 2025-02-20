import React from "react";
import food from '../image/F.png';
import search from '../image/search.png';
import bag from '../image/bag.png';
import phone from '../image/phone.png';
import man from '../image/image1.png';
import noodls from '../image/noodles.png'
import salad from '../image/salad.png'
import stars from '../image/stars.png'
import PopCatagories from "./PopCaragories";
import Dishes from "./Dishes";
import Testimonials from "./Testimonials";
import Services from "./Services";
import Footer from "./Footer";


const Header = () => {
    return (
        <div>
            <nav className="flex items-center gap-52 justify-center mt-5 mb-5 ">
                <div className="flex">
                    <div>
                        <img src={food} alt="" className="bg-green-400 h-6 p-1  rounded-sm" />
                    </div>
                    <div>
                        <h1 className="text-1xl bold font-bold" >OODI</h1>
                    </div>
                </div>
                <div>
                    <ul className="flex gap-16">
                        <li className=" hover:text-green-500">Home</li>
                        <li className=" hover:text-green-500">Menu</li>
                        <li className=" hover:text-green-500">Services</li>
                        <li className=" hover:text-green-500">Offers</li>
                    </ul>
                </div>
                <div className="flex gap-12 items-center">
                    <div><img src={search} alt="" className=" h-5 p-0.5 rounded-sm" /></div>
                    <div><img src={bag} alt="" className="h-5 p-0.5 rounded-sm" /></div>
                    <div className="flex bg-green-500 hover:bg-green-700 p-2 gap-1 px-5 text-white items-center rounded-3xl"><img src={phone} alt="" className="h-5 p-0.5 rounded-sm" /> <button> <h1>Contact</h1></button></div>
                </div>
            </nav>
            {/* -------------------------------------------------------------------------------------------------------- */}
            

            <div className='flex items-center justify-center '>
                <div>
                    <div className="">
                        <h1 className="text-6xl font-bold leading-snug mb-10">Dive into Delights <br /> Of Delectable <span className="text-green-500">Food</span></h1>
                        <p className="text-3xl text-slate-600	mb-10 "
                            style={{
                                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
                            }}>Where Each Plate Weaves a Story of Culinary <br /> Mastery and Passionate Craftsmanship</p>
                        <div className="flex bg-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-700 transition duration-300 ease-in-out p-4 gap-1 px-5 w-1/3 justify-center text-white items-center rounded-3xl">
                            <button>
                                <h1 className="text-2xl">Order Now</h1>
                            </button>  
                        </div>

                    </div>
                </div>
                
                <div>
                <div className="flex justify-center mb-24 "
            style={{
                zIndex:1,
                position:'absolute',
                marginTop:'110px',
                display:'flex',
                justifyContent:'center',
                marginInline:'auto',
                marginLeft:"-30px"
            }}>
                    <h1 className="bg-slate-100 px-12 py-4 text-red-600 shadow-xl"
                    style={{
                        borderRadius: '150px 150px 0 150px',
                        fontSize:'15px'
                    }}>Hot spicy Food 🌶</h1>

                </div>
                <div className="bg-green-400 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-700  rounded-full ml-16 flex justify-center flex-col items-center mt-10 "
                style={{
                //    overflow:'hidden' 
                }}
                >

                    <img src={man} alt="" className=""
                    style={{
                        transform: "translateX(-18px)",
                    }}/>
                    </div>
                    <div className="flex gap-8 justify-center mb-10"
                    style={{
                        position:"absolute",
                        zIndex:1,
                        marginTop:'-40px',
                        marginInline:'auto',
                        marginLeft: 60

                    }}>
                        <div className="bg-slate-100 shadow-inner rounded-lg flex gap-5 items-center p-1 px-6 shadow-2xl">
                            <div>

                            <img src={noodls} alt="" className="h-14" />
                            </div>
                            <div>
                                <p>Spicy noodles</p>
                                <img src={stars} alt="" className="w-24" />
                                <p>$18.00</p>
                            </div>
                        </div>
                        <div className="bg-slate-100 rounded-lg flex gap-5 items-center p-1 px-6 shadow-inner">
                            <div>

                            <img src={salad} alt="" className="h-14" />
                            </div>
                            <div>
                                <p>Vegetarian salad</p>
                                <img src={stars} alt="" className="w-24" />
                                <p>$18.00</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <PopCatagories></PopCatagories>
            <Dishes></Dishes>
            <Testimonials></Testimonials>
            <Services></Services>
            <Footer></Footer>

        </div>
    )

}

export default Header;