import React from "react"
import logo from '../image/F.png'
import fb from '../image/fb.png'
import ins from '../image/in.png'
import tw from '../image/tw.png'
import yo from '../image/yo.png'

const Footer =()=>{
    return(
        <div className="max-w-6xl mx-auto mt-36 mb-10">
            
            <div className="flex justify-between">
                <div>
                    <div className="flex mb-5">
                        <img src={logo} alt="" className="h-5 bg-green-500 p-0.5 rounded-sm mr-1"/>
                        <h1 className="font-bold">OODI</h1>
                    </div>
                    <p className="text-slate-500">Savor the artistry where <br /> every dish is a culinary <br /> masterpiece</p>
                </div>
                <div>
                    <ul className="leading-loose">
                        <li className="font-bold">Useful links</li>
                        <li className="text-slate-500">About us</li>
                        <li className="text-slate-500">Events</li>
                        <li  className="text-slate-500">Blogs</li>
                        <li className="text-slate-500">FAQ</li>
                        
                    </ul>
                </div>
                <div>
                    <ul className="leading-loose">
                        <li className="font-bold">Main Menu</li>
                        <li className="text-slate-500">Home</li>
                        <li className="text-slate-500">Offers</li>
                        <li  className="text-slate-500">Menus</li>
                        <li className="text-slate-500">Reservation</li>
                        
                    </ul>
                </div>
                <div>
                    <ul className="leading-loose">
                        <li className="font-bold">Contact Us</li>
                        <li className="text-slate-500">example@email.com</li>
                        <li className="text-slate-500">+64 958 248 966</li>
                        <li  className="text-slate-500">Social media</li>
                        
                    </ul>
                </div>
            </div>
         <div>
            <div className="flex gap-4 mt-10 items-center">
                <img src={fb} alt="" className="h-8 bg-slate-300 hover:bg-green-500 rounded-full p-2 px-3"/>
                <img src={ins} alt="" className="h-8 p-2 bg-slate-200 hover:bg-green-500  rounded-full "/>
                <img src={tw} alt="" className="h-8 p-2 bg-slate-200 hover:bg-green-500  rounded-full "/>
                <img src={yo} alt="" className="h-8 bg-slate-200 hover:bg-green-500 p-2
                 rounded-full "/>
                <p className="text-center mx-auto text-slate-500">Copyright       2023 Dscode | All rights reserved</p>
            </div>
         </div>


        </div>
    )



}

export default Footer;