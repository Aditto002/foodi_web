import React from "react";
import chef from '../image/chef.png'
import chefbg from '../image/chefbg.png'
import image1 from '../image/i1.png'
import image2 from '../image/i2.png'
import image3 from '../image/i3.png'
import star from '../image/st1.png'


const Testimonials = () => {
    return (
        <div className="max-w-6xl mt-52 mx-auto">
            <div className="flex gap-28">
                <div>
                    
                    <div
                        className="h-4/5 mx-auto bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${chefbg})`,
                            backgroundRepeat:'no-repeat',
                            // marginTop:'-100',
                            backgroundPosition: ' bottom',
                            backgroundSize: '78%',
                            
                            
                        }}
                    >
                        <div className="h-full">
                        <img src={chef} alt="Chef" className="w-full h-full object-contain mt-[-100px] " />
                        </div>
                        <div className="flex justify-end">
                            <h1 className="bg-slate-200 py-3 px-5 shadow-inner"
                            style={{
                                borderRadius: '0 50px 50px 50px',
                                display:"absolute",
                                zIndex:1,
                                marginTop:'-20px'
                            }}>Our Best Chef 😁</h1>
                        </div>
                        
                    </div>
                </div>
                <div className="flex flex-col gap-5 mt-10">
                    <p className="text-red-400 text-xl">Testimonials</p>
                    <h1 className="text-4xl font-bold leading-normal">What Our Customers <br /> Say About Us</h1>
                    <p className="text-xl text-stone-500 leading-relaxed">“I had the pleasure of dining at Foodi last night, and <br /> I'm still raving about the experience! The attention to <br /> detail in presentation and service was impeccable”</p>
                     <div className="flex">
                        <img src={image1} alt="" className="h-12"  />
                        <img src={image2} alt="" className="h-12 ml-[-15px]" />
                        <img src={image3} alt="" className="h-12 ml-[-15px]"/>
                        <div className="ml-10">
                            <h1 className="font-bold">Customer Feedback</h1>
                            <div className="flex gap-1 items-center">
                                <img src={star} alt="" className="h-4" />
                                <h1>4.9</h1>
                                <p className="text-slate-400">(18.6k Reviews)</p>
                            </div>
                        </div>
                     </div>
                </div>

            </div>
        </div>
    )

}

export default Testimonials;