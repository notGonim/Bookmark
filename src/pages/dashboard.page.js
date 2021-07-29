import React from 'react'
import { Contnet } from '../components/content/contnet.component'
import { Footer } from '../components/footer/footer.component'
import { LoggedHeader } from '../components/headerLogged/header'
import { Sidebar } from '../components/sidebar/sidebar.component'

export default function Dashboard  ()  {
    return (
        <>

            <LoggedHeader />
            <div class="grid grid-cols-6 gap-4 py-6 container" >
                <div class="col-start-1 col-end-2 ">
                    <Sidebar />
                </div>
                <div class="col-start-4 col-end-7 ">
                    <Contnet />
                </div>
            </div>
            <Footer />

        </>
    )
}
