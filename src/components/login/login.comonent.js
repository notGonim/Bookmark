import React from 'react'
import loginPic from '../../assets/LoginForm.svg'
import { LoginForm } from '../form/loginForm.component'

export const Login = () => {
    return (
        <section className="bg-gray-50  py-20 lg:py-5 font-Poppins w-screen h-full">
            <div className="container lg:flex justify-evenly sm:mt-12  ">
                <LoginForm />
                <div className="hidden lg:flex w-full ">
                    <img src={loginPic} alt="pic" className="" />
                </div>
            </div>
        </section>
    )
}
