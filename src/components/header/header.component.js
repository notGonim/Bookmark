import React from 'react'
import Logo from '../../assets/logoWhite.svg'
import * as ROUTES from '../../constants/routes'


import { UilAlignJustify } from '@iconscout/react-unicons'
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';



export const Header = () => {

    return (

        <header className="font-Poppins ">
            <nav className="container flex items-center  py-2 mt-2 sm:mt-12">
                <div className="py-1">
                    <img src={Logo} alt="logo" />
                </div>
                <ul className="hidden sm:flex flex-1 justify-end items-center font-bold gap-12 uppercase text-blue-700 text-lg">
                    <HashLink  to="#feature" 
                    className="cursor-pointer">Features</HashLink>
                    <HashLink  to="#contact" className="cursor-pointer">Contact</HashLink>
                    <HashLink  to="#fqa" className="cursor-pointer">FQA</HashLink>
                    <Link to={ROUTES.SIGNUP} className="text-white  rounded-md bg-red-600 font-bold px-7 py-3 uppercase">Sign Up</Link>
                    <Link to={ROUTES.LOGIN} className="text-white rounded-md bg-blue-600 px-7 font-bold py-3 uppercase">Login</Link>
                </ul>
                <div className="flex sm:hidden  flex-1 justify-end">
                    <UilAlignJustify />
                </div>
            </nav>
        </header>
    )
}
