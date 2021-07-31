import React, { useState } from 'react'
import Logo from '../../assets/logoWhite.svg'
import { UilAlignJustify } from '@iconscout/react-unicons'
import { UilPlus } from '@iconscout/react-unicons'
import { UilBrightness } from '@iconscout/react-unicons'
import { UilSetting } from '@iconscout/react-unicons'
import { UilPizzaSlice } from '@iconscout/react-unicons'
import Menu from '../dropdownMenu/menu.component'
export const LoggedHeader = () => {

    const [darkTheme, setDaekTheme] = useState(false)
    const [menuShow, setMenuShow] = useState(false)

    return (
        <header className="font-Poppins  ">
            <nav className="container items-center relative  flex py-6">
                <div className="py-1">
                    <img src={Logo} alt="logo" />
                </div>
                <ul className="hidden sm:flex flex-1 justify-end items-center font-bold gap-12 uppercase text-blue-700 text-lg">
                    <li className="cursor-pointer"><input type="text"
                        className="text-lg text-gray-base w-72 py-4 px-4 h-2 border border-gray-primary rounded  text-black" placeholder="Quick Find" /></li>
                    <li className="cursor-pointer"><UilPlus /></li>
                    <li className="cursor-pointer">  {darkTheme ? <UilPizzaSlice /> : <UilBrightness />}</li>
                    <li className="cursor-pointer" onClick={() => setMenuShow(!menuShow)} ><UilSetting /></li>
                </ul>
                {menuShow && <Menu />}
            </nav>
            <div className="flex sm:hidden  flex-1 justify-end">
                <UilAlignJustify />
            </div>

        </header>
    )
}
