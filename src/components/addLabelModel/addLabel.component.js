import React, { useRef } from 'react'
import { UilPlus } from '@iconscout/react-unicons'



export const AddLabel = ({ showModel, setShowModel }) => {

    return (
        <>
            {showModel ?

                <div className="origin-top-right absolute  mt-32 w-96 h-16  shadow-lg bg-white flex items-center justify-center"
                    role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                    <div className="py-1  flex items-center justify-between" role="none">
                        <input type="text"
                            className="text-lg text-gray-base w-72 py-4 px-4 h-2 border border-gray-primary rounded outline-none  text-black" placeholder="Write your label" />
                        <UilPlus className='text-blue-700 text-lg cursor-pointer'/>
                    </div>
                </div>
                : null}
        </>
    )
}
