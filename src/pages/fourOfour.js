import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import FourO from '../assets/fourOfour.svg'


export const FourOfour = () => {

    useEffect(() => {
        document.title = 'Not Found - InstaGo'
    }, [])

    return (
        <div className="conainer   flex-col flex justify-center items-center ">
        <img src={FourO} alt="404" className="w-6/12 mt-12" />
        <Link to='/' className="text-blue-700 m-10" >Back To Home</Link>
    </div>
    )
}
