import React, { useContext, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Logo from '../../assets/logoWhite.svg'
import FirebaseContext from '../../store/firebase/firebase.context'
import * as ROUTES from './constants/routes'



export const SignupForm = () => {


    const history = useHistory()
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [fullname, setFullname] = useState('')
    const [password, setPassword] = useState('')
    const [err, setError] = useState('')
    const { firebase } = useContext(FirebaseContext)

    const isInvalid = username === '' || fullname === '' || password === '' || email === ''


    const handleSignup = async (e) => {
        e.preventDefault()
        const usernameExists = await doesUsernameExist(username)
        if (!usernameExists.length) {
            try {
                const createdUserResult = await firebase.auth().createUserWithEmailAndPassword(email, password)
                //authentication
                //
                await createdUserResult.user.updateProfile({
                    displayName: username
                })
                //create a user 
                await firebase.firestore().collection('users').add(
                    {
                        userId: createdUserResult.user.uid,
                        username: username.toLowerCase(),
                        fullname,
                        emailAddress: email.toLowerCase(),
                        pets: [],
                        dateCreated: Date.now()
                    }
                )
                history.push(ROUTES.DASHBOARD)
            } catch (err) {
                setFullname('')
                setUsername('')
                setPassword('')
                setEmail('')
                setError(err.message)
            }
        } else {
            setError('That username is already taken, please try another. ')
        }
    }


    useEffect(() => {
        document.title = 'Sign Up - Bookmark'
    }, [])

    return (
        <div className="shadow-sm justify-start flex flex-col lg:w-full w-5/6 m-5 py-10 lg:m-5 px-20 items-center sm:mt-12  bg-white" >
            <div className="px-4">
                <div className="py-1">
                    <img src={Logo} alt="logo" />
                </div>
                <h1 className="text-blue-700 font-extrabold text-3xl py-4">Sign Up To Bookmark</h1>
                <hr />
                <div className="flex flex-col items-center  bg-white py-4 px-20  mb-4 ">
                    <form method="POST">
                        <input type="email" placeholder="Username" aria-label="Enter your Username"
                            className="text-sm text-gray-base w-full py-5 px-4 h-3 border border-gray-primary rounded mb-2" />
                        <input type="email" placeholder="Full Name" aria-label="Enter your Full Name"
                            className="text-sm text-gray-base w-full py-5 px-4 h-3 border border-gray-primary rounded mb-2" />
                        <input type="email" placeholder="Email Address" aria-label="Enter your email"
                            className="text-sm text-gray-base w-full py-5 px-4 h-3 border border-gray-primary rounded mb-2" />
                        <input type="password" placeholder="Your Password" aria-label="Enter your password"
                            className="text-sm text-gray-base w-full py-5 px-4 h-2 border border-gray-primary rounded mb-2" />
                        <button type="submit" className={`bg-blue-700 w-full rounded h-8 font-bold  text-white  `}>Sign Up</button>
                    </form>
                </div>
                <div className="flex justify-center items-center flex-col w-full bg-white rounded p-4 border border-gray-primary ">
                    <p className="text-sm">Don`t have an account? {''}
                        <Link to='/login' className="font-bold text-blue-500 ">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
