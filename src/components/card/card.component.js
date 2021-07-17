import React from 'react'

export const Card = ({ img, title, para ,cls }) => {
    return (
        <div className={`flex flex-col rounded-md shadow-md ${cls}`}>
            <div className="p-6 flex flex-col items-center">
                <img src={img} alt="chrome pic" />
                <h3 className="mt-5 mb-2 text-blue-700 text-xl">{title}</h3>
                <p className="mb-2 text-gray-600 font-light ">{para}</p>
            </div>
            <hr className="border-b border-gray-50 " />
            <div className="flex p-6">
                <button type="button" className="flex-1 btn bg-blue-600 font-bold hover:bg-white hover:text-black">Add & Install Extension </button>
            </div>
        </div>
    )
}
