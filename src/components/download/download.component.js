import React from 'react'
import { Card } from '../card/card.component'
import { Headeing } from '../heading/headeing.component'
import Chrome from '../../assets/chrome.svg'
import Firefox from '../../assets/firefox.svg'
import Opera from '../../assets/opera.svg'

export const Download = () => {
    return (
        <section className="py-20 mt-20 font-Poppins" >
            <Headeing title="Download the extension" para="We`ve got browser in the pipeline .Please do let us know if you`ve got a favourite you `d like us to priotize . " />
            <div className="container  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-16 max-w-screen-lg  mt-16">
                <Card img={Chrome}  title="Add to Chrome" para="Minimum version 62" cls="lg:mb-16" />
                <Card img={Firefox}  title="Add to Firefox" para="Minimum version 40" cls="lg:mt-8 mb-8"/>
                <Card img={Opera}  title="Add to Opera" para="Minimum version 15" cls="lg:mt-16" />
            </div>
        </section>
    )
}
