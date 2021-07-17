import React from 'react'
import HeroPic from '../../assets/hero.png'
export const Hero = () => {
    return (
        <section className="relative font-Poppins  ">
            <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 lg:mt-28 mt-14">
                <div className="flex flex-1 flex-col items-center lg:items-start">
                    <h2 className="text-blue-700 font-semibold	 text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
                        A Simple Bookmark Manager
                    </h2>
                    <p className=" text-gray-600 text-lg text-center mb-6 lg:text-left ">
                        A clean and simple interface to organize your favourite websites .Open a new browser tab and see your sites load instantly .
                    </p>
                    <div className="flex justify-center gap-6 flex-wrap">
                        <button className="btn btn-purple font-bold hover:bg-white hover:text-black"> Try it for free</button>
                    </div>
                </div>
                <div className="flex z-10 justify-center flex-1 mb-10 md:mb-16 lg:mb-0">
                    <img src={HeroPic} alt="Hero Pic" className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" />
                </div>
                <div className="hidden md:block  overflow-hidden bg-blue-700 rounded-l-full absolute h-80 w-2/4 top-32  right-0 lg:-bottom-28  lg:-right-36"></div>
            </div>
        </section>
    )
}
