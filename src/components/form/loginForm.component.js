import React from 'react'
import { Headeing } from '../heading/headeing.component'
import Logo from '../../assets/logoWhite.svg'
import { UilGithubAlt } from '@iconscout/react-unicons'
import { UilTwitterAlt } from '@iconscout/react-unicons'
import { UilGoogle } from '@iconscout/react-unicons'
import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import FirebaseContext from '../../store/firebase/firebase.context'
import * as ROUTES from '../../constants/routes'


export const LoginForm = () => {

    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [err, setError] = useState('')
    const { firebase } = useContext(FirebaseContext)

    const isInvalid = password === '' || email === ''


    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password)
            history.push(ROUTES.DASHBOARD)
        } catch (err) {
            setEmail('')
            setPassword('')
            setError(err.message)
        }
    }

    const handleLoginWithGmail = async () => {

        //   const provider = new firebase.auth.GoogleAuthProvider()
        //   await firebase.auth().signInWithPopup(provider)
        //     history.push(ROUTES.DASHBOARD)

    }

    useEffect(() => {
        document.title = 'Login - Pets'
    }, [])


    return (
        <div className="shadow-sm justify-start flex flex-col lg:w-full w-5/6 m-5 py-10 lg:m-5 items-center sm:mt-12  bg-white" >
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
                    <form onSubmit={handleLogin} method="POST">
                        {err && <p className="mb-4 text-xs text-red-500">{err}</p>}
                        <input type="text" placeholder="Email Address" aria-label="Enter your email"
                            className="text-sm text-gray-base w-full py-5 px-4 h-3 border border-gray-primary rounded mb-2"
                            onChange={({ target }) => setEmail(target.value)} value={email}
                        />
                        <input type="password" placeholder="Your Password" aria-label="Enter your password"
                            className="text-sm text-gray-base w-full py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                            onChange={({ target }) => setPassword(target.value)} value={password}
                        />
                        <div className="flex justify-between py-3">
                            <div className="flex items-center">
                                <input type="checkbox" className="mr-1" id="" />
                                <span className="text-black text-sm font-medium">Remember me</span>
                            </div>
                            <span className="text-blue-600 cursor-pointer text-sm font-medium">Forget your password?</span>
                        </div>
                        <button type="submit" disabled={isInvalid} className={`bg-blue-700 w-full rounded h-8 font-bold  text-white  ${isInvalid && 'opacity-50'}`}>Login</button>
                    </form>
                </div>
                <div className="flex justify-center items-center flex-col w-full bg-white rounded p-4 border border-gray-primary ">
                    <p className="text-sm">Don`t have an account? {''}
                        <Link to='/signup' className="font-bold text-blue-500 ">Sign up</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
