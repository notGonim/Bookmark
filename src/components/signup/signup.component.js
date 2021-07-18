import React from 'react'
import RegisterForm from '../../assets/RegisterForm.svg'
import { SignupForm } from '../signupForm/signupForm.component'



export const Signup = () => {
    return (

        <section className="bg-gray-50 py-20 lg:py-5 font-Poppins w-screen h-full">
            <div className=" lg:flex justify-evenly sm:mt-12  ">
                <SignupForm />
                <div className="hidden lg:flex w-full ">
                    <img src={RegisterForm} alt="pic" className="" />
                </div>
            </div>
        </section>


    )
}
