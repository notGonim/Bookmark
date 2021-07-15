import React, { useEffect } from 'react'
import { Header } from '../components/header/header.component'
import { Hero } from '../components/hero/hero.component'

export const LandingPage = () => {



    useEffect(() => {
        document.title = 'Bookmark | Landing Page'

    }, [])

    return (
        <>
            <Header />
            <Hero />
        </>
    )
}
