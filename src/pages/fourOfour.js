import React, { useEffect } from 'react'

export const FourOfour = () => {


    useEffect(() => {
        document.title = 'Not Found - InstaGo'
    }, [])

    return (
        <div className=" bg-gray-background">
            <div className="mx-auth max-w-screen-lg">
                <p className="text-center text-2xl">Not Found!</p>
            </div>
        </div>
    )
}
