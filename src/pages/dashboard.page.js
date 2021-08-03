import React, { useEffect, useState } from 'react'
import { AddLabel } from '../components/addLabelModel/addLabel.component'
import { Contnet } from '../components/content/contnet.component'
import { Footer } from '../components/footer/footer.component'
import { LoggedHeader } from '../components/headerLogged/header'
import { Sidebar } from '../components/sidebar/sidebar.component'

export default function Dashboard() {

    const [showModel, setShowModel] = useState(false)


    return (
        <>
            <LoggedHeader />
            <div className="grid grid-cols-6 gap-4 py-6 container" >
                <div className="col-start-1 col-end-2 ">
                    <Sidebar setShowModel={setShowModel} />
                </div>
                <div className="col-start-2 col-end-7 ">
                    <Contnet showModel={showModel} setShowModel={setShowModel} />
                </div>
            </div>
            <Footer />

        </>
    )
}
