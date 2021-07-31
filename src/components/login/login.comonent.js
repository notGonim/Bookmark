import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import loginPic from '../../assets/LoginForm.svg'
import FirebaseContext from '../../store/firebase/firebase.context'
import { LoginForm } from '../form/loginForm.component'
import * as ROUTES from '../../constants/routes'



export const Login = () => {

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
        <section className="bg-gray-50 py-20 lg:py-5 font-Poppins w-screen h-full">
            <div className=" lg:flex justify-evenly sm:mt-12  ">
                <LoginForm />
                <div className="hidden lg:flex w-full ">
                    <img src={loginPic} alt="pic" className="" />
                </div>
            </div>
        </section>
    )
}
