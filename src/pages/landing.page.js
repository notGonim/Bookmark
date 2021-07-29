import React, { useEffect } from 'react'
import { Contact } from '../components/contact/contact.component'
import { Download } from '../components/download/download.component'
import { FAQ } from '../components/faq/faq.component'
import { Feature } from '../components/feature/feature.component'
import { FeatureTwo } from '../components/feature2/featureTwo.component'
import { FeatureThree } from '../components/feature3/featureThree.component'
import { Footer } from '../components/footer/footer.component'
import { Header } from '../components/header/header.component'
import { Hero } from '../components/hero/hero.component'

export default function LandingPage  ()  {



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
            <FAQ />
            <Contact />
            <Footer/>
        </>
    )
}
