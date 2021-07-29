import  { useContext, useEffect, useState } from 'react'
import FirebaseContext from '../../store/firebase/firebase.context'

export default function useAuthListener() {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')))
    const { firebase } = useContext(FirebaseContext)

    useEffect(() => {
        const listener = firebase.auth().onAuthStateChanged((authUser) => {
            //if we have the user .... then we store it in the local storage 
            if (authUser) {
                localStorage.setItem('authUser', JSON.stringify(authUser))
                setUser(authUser)
            } else {
                // we don`t have the authuser then we clear the localStorage  
                localStorage.removeItem('authUser')
                setUser(null)
            }
        })
        return () => listener()
    }, [firebase])

    return { user }

}