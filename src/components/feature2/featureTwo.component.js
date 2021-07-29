import React from 'react'
import { Link } from 'react-router-dom'
import Feature2 from '../../assets/f2.png'
import * as ROUTES from '../../constants/routes'


export const FeatureTwo = () => {
    return (
        <section className=" font-Poppins ">
        <div className="relative py-5 lg:mt-40">
            <div className="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
                <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                    <img
                        className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
                        src={Feature2}
                        alt="feature pic"
                    />
                </div>
                <div className="flex flex-1 flex-col items-center lg:items-start">
                    <h1 className="text-blue-700 font-semibold	 text-3xl">Intelligent search</h1>
                    <p className="text-gray-600 text-lg text-center mb-6  lg:text-left sm:w-3/4 lg:w-full">
                        Our powerful search feature will help you find saved sites in no time at all. No need to crawl through all
                        of your bookmarks.
                    </p>
                    <Link to={ROUTES.LOGIN} className="btn btn-purple font-bold hover:bg-white hover:text-black">More Info</Link>
                </div>
            </div>
            <div
                className="
        hidden
        lg:block
        overflow-hidden bg-blue-700 
        rounded-l-full
        absolute
        h-80
        w-2/4
        -bottom-24
        -right-36
      "
            ></div>
        </div>
    </section>
    )
}
