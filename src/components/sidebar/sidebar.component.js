import React from 'react'
import { UilPlusCircle } from '@iconscout/react-unicons'
export const Sidebar = () => {
    return (
        <div className="container py-2  border-r-2 min-h-screen font-Poppins">
            <ul className="font-semibold">
                <li className="cursor-pointer"><h2>All Bookmarks</h2></li>
                <li className="cursor-pointer"><h2>Movies</h2></li>
                <li className="cursor-pointer"><h2>Series</h2></li>
                <li className="cursor-pointer"><h2>Courses</h2></li>
            </ul>
            <hr className="mt-3" />
            <div className="flex mt-2 cursor-pointer items-center justify-between">
                <button className='font-extrabold text-blue-700  '>Add Label </button>
                <UilPlusCircle className=" text-blue-700" />
            </div>
        </div>
    )
}
