import React from 'react'
import { Headeing } from '../heading/headeing.component'
import Logo from '../../assets/logoWhite.svg'
import { UilGithubAlt } from '@iconscout/react-unicons'
import { UilTwitterAlt } from '@iconscout/react-unicons'
import { UilGoogle } from '@iconscout/react-unicons'


export const LoginForm = () => {
    return (
        <div className="shadow-sm justify-start  flex flex-col   w-full  mx-auto   py-10 items-center sm:mt-12   bg-white" >
            <div className="px-4">
                <div className="py-1">
                    <img src={Logo} alt="logo" />
                </div>
                <h1 className="text-blue-700 font-extrabold text-3xl py-4">Sign in To your account</h1>
                <div className="flex flex-col py-2   ">
                    <span className="text-gray-600 font-semibold text-sm">Sign in with</span>
                    <div className="flex justify-between  py-3 items-center">
                        <div className="border shadow-sm rounded-md">
                            <UilGoogle className=" lg:w-28 w-24  h-7 text-blue-700 cursor-pointer" />
                        </div>
                        <div className="border shadow-sm rounded-md">
                            <UilTwitterAlt className="lg:w-28 w-24 h-7 text-blue-700 cursor-pointer" />
                        </div>
                        <div className="border shadow-sm rounded-md">
                            <UilGithubAlt className="lg:w-28 w-24  h-7 text-blue-700 cursor-pointer" />
                        </div>
                    </div>
                </div>
                <hr />
                <div className="flex flex-col items-center  bg-white p-4  mb-4 ">
                    <form method="POST">
                        <input type="email" placeholder="Email Address" aria-label="Enter your email"
                            className="text-sm text-gray-base w-full py-5 px-4 h-3 border border-gray-primary rounded mb-2" />
                        <input type="password" placeholder="Your Password" aria-label="Enter your password"
                            className="text-sm text-gray-base w-full py-5 px-4 h-2 border border-gray-primary rounded mb-2" />
                        <div className="flex justify-between py-3">
                            <div className="flex items-center">
                                <input type="checkbox" className="mr-1" id="" />
                                <span className="text-blue-600 text-sm font-medium">Remember me</span>
                            </div>
                            <span className="text-blue-600 cursor-pointer text-sm font-medium">Forget your password?</span>
                        </div>
                        <button type="submit" className={`bg-blue-700 w-full rounded h-8 font-bold  text-white  `}>Login</button>

                    </form>
                </div>
            </div>
        </div>
    )
}
