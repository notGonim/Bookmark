import React from 'react'

export const Headeing = ({title,para}) => {
    return (
        <div className="sm:w-3/4  lg:w5-5/12 mx-auto px-2">
        <h1 className="text-blue-700 font-bold	 text-5xl text-center ">{title}</h1>
        <p className="text-gray-600 text-2xl text-center mt-4">{para}</p>
    </div>
    )
}
