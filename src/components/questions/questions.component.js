import React, { useState } from 'react'
import { UilAngleDown } from '@iconscout/react-unicons'
import { UilAngleUp } from '@iconscout/react-unicons'


export const Questions = ({ question, answer }) => {
    const [toggle, setToggle] = useState(false)
    const showAnswer=()=>{
        setToggle(!toggle)
    }
    return (
        <div className="flex flex-col  border-b mt-1 py-4 cursor-pointer" onClick={ showAnswer }>
            <div className="flex justify-between">
                <span className="items-start text-lg font-semibold">{question}</span>
                {toggle ? <UilAngleDown className="items-end text-blue-700" /> : <UilAngleUp className="items-end text-blue-700" />}
            </div>
            {toggle && <span className=" text-sm font-light">{answer}</span>}
        </div>
    )
}
