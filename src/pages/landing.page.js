import React, { useEffect } from 'react'
import { Download } from '../components/download/download.component'
import { Feature } from '../components/feature/feature.component'
import { FeatureTwo } from '../components/feature2/featureTwo.component'
import { FeatureThree } from '../components/feature3/featureThree.component'
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
            <Feature />
            <FeatureTwo />
            <FeatureThree />
            <Download/>
        </>
    )
}
