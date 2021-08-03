import React from 'react'
import { AddLabel } from '../addLabelModel/addLabel.component'

export const Contnet = ({ showModel, setShowModel }) => {
    return (
        <div className='p-0'>
            <AddLabel showModel={showModel} setShowModel={setShowModel} />

        </div>
    )
}
