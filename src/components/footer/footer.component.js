import React from 'react'
import { UilGithubAlt } from '@iconscout/react-unicons'
import { UilTwitterAlt } from '@iconscout/react-unicons'
import Logo from '../../assets/logo.png'


export const Footer = () => {
    return (
        <footer className="bg-midnight-blue py-8 font-Poppins   ">
            <div className="container flex flex-col md:flex-row items-center">
                <div className="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12">
                    <img src={Logo}  alt="logo" />
                    <ul className="flex text-white uppercase gap-12 text-xs">
                        <li className="cursor-pointer">Features</li>
                        <li className="cursor-pointer">FQA</li>
                        <li className="cursor-pointer">Contact</li>
                    </ul>
                </div>
                <div className="flex gap-10 mt-12 md:mt-0">
                    <li className="list-none"><UilGithubAlt className="text-white text-2xl "/></li>
                    <li className="list-none"><UilTwitterAlt className="text-white text-2xl "/></li>
                </div>
            </div>
        </footer>
    )
}
