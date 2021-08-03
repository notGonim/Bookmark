import React from 'react'
import Labels from '../labels/label.component'

export const AddBookmark = () => {


    return (

        <div className="origin-top-right absolute right-44 mt-72  w-96 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
            <div className="py-1 flex flex-col items-center justify-center" role="none">
                <input type="text"
                    className=" text-lg text-gray-base w-72 py-4 m-2 px-4 h-2 border border-gray-primary rounded outline-none  text-black" placeholder="Write your Bookmark name" />
                <input type="text"
                    className=" text-lg text-gray-base w-72 py-4 px-4 m-2 h-2 border border-gray-primary rounded outline-none  text-black" placeholder="Link To your Bookmark   " />
                <input type="text"
                    className=" text-lg text-gray-base w-72 py-4 m-2 px-4 h-2 border border-gray-primary rounded outline-none  text-black" placeholder="Link to Pic" />
            </div>
            <div className="py-1 flex justify-between px-12">
                <Labels />
                <button type="button" className="font-extrabold  text-blue-700 text-sm  rounded-md  mb-1 px-7 py-2 shadow hover:shadow-lg outline-none focus:outline-none mr-1  ease-linear transition-all duration-150  " id="menu-item-3">
                    Add
                </button>
            </div>
        </div>)
}
