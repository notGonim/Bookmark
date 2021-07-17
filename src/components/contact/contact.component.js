import React from 'react'

export const Contact = () => {
    return (
        <section className="text-white bg-blue-600 py-20 font-Poppins">
            <div className="container">
                <div className="sm:w-3/4 lg:w-2/4 mx-auto">
                    <p className="uppercase font-semibold text-center mb-8">1000+ Already Joined</p>
                    <h1 className="text-3xl text-center">Stay up-to-date with what we’re doing</h1>
                    <div className="flex flex-col sm:flex-row gap-6 mt-8">
                        <input
                            type="text"
                            placeholder="Enter your email address"
                            className="focus:outline-none flex-1 px-2 py-3 rounded-md border font-semibold text-black"
                        />
                        <button type="button" className="btn bg-blue-700 hover:bg-bookmark-white hover:text-black">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
