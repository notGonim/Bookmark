import React, { useEffect } from 'react'
import { Header } from '../components/header/header.component'

export const LandingPage = () => {



    useEffect(() => {
        document.title = 'Bookmark | Landing Page'

    }, [])

    return (
        <>
            <Header />
        </>
    )
}
