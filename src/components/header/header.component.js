import React from 'react'
import Logo from '../../assets/logoWhite.svg'
import { UilAlignJustify } from '@iconscout/react-unicons'

export const Header = () => {

    return (

        <header className="font-Poppins ">
            <nav className="container flex items-center py-2 mt-2 sm:mt-12">
                <div className="py-1">
                    <img src={Logo} alt="logo"  />
                </div>
                <ul className="hidden sm:flex flex-1 justify-end items-center font-bold gap-12 uppercase text-blue-700 text-lg">
                    <li className="cursor-pointer">Features</li>
                    <li className="cursor-pointer">Pricing</li>
                    <li className="cursor-pointer">Contact</li>
                    <button type="button" className="text-white  rounded-md bg-red-600 font-bold px-7 py-3 uppercase">Sign Up</button>
                    <button type="button" className="text-white rounded-md bg-blue-600 px-7 font-bold py-3 uppercase">Login</button>
                </ul>
                <div className="flex sm:hidden  flex-1 justify-end">
                    <UilAlignJustify />
                </div>
            </nav>
        </header>
    )
}
