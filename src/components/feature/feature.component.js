import React from 'react'
import Feature1 from '../../assets/f1.png'
import { Headeing } from '../heading/headeing.component'
import * as ROUTES from '../../constants/routes'
import { Link } from 'react-router-dom'

export const Feature = () => {


    return (
        <section id='feature' className="bg-gray-50 py-20 lg:mt-20  font-Poppins">
            <Headeing title="Features" para="Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devious so you can access them on the go ." />
            <div className="relative  lg:mt-24">
                <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
                    <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                        <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src={Feature1} alt="feature pic" />
                    </div>
                    <div className="flex flex-1 flex-col items-center lg:items-start">
                        <h1 className="text-blue-700 font-semibold	 text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">Bookmark in one click</h1>
                        <p className="text-gray-600 text-lg text-center mb-6  lg:text-left sm:w-3/4 lg:w-full">
                            Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control
                            over how you manage your favourite sites.
                        </p>
                        <Link to={ROUTES.LOGIN} className="btn btn-purple font-bold hover:bg-white hover:text-black">More Info</Link>
                    </div>
                </div>
                <div className="hidden lg:block overflow-hidden bg-blue-700 rounded-r-full absolute h-80 w-2/4 -bottom-24  -left-36"></div>
            </div>
        </section>
    )
}
