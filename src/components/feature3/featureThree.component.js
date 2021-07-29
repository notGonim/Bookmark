import React from 'react'
import { Link } from 'react-router-dom'
import Feature3 from '../../assets/f3.png'
import * as ROUTES from '../../constants/routes'



export const FeatureThree = () => {
    return (
        <section className="font-Poppins  bg-gray-50 h-screen">
            <div className="relative  py-10 lg:mt-52">
                <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
                    <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                        <img
                            className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
                            src={Feature3}
                            alt="feature pic"
                        />
                    </div>
                    <div className="flex flex-1 flex-col items-center lg:items-start">
                        <h1 className="text-blue-700 font-semibold	 text-3xl">Share your bookmarks</h1>
                        <p className="text-gray-600 text-lg text-center mb-6  lg:text-left sm:w-3/4 lg:w-full">
                            Easily share your bookmarks and collections with others. Create a shareable link that you can send at the
                            click of a button.
                        </p>
                        <Link to={ROUTES.LOGIN} className="btn btn-purple font-bold hover:bg-white hover:text-black">More Info</Link>
                    </div>
                </div>
                <div
                    className="
            hidden
            lg:block
            overflow-hidden
            bg-blue-700             rounded-r-full
            absolute
            h-80
            w-2/4
            -bottom-24
            -left-36
          "
                ></div>
            </div>
        </section>
    )
}
