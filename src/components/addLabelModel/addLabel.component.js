import React, { useRef } from 'react'
import { useSpring, animated } from 'react-spring';



export const AddLabel = ({ showModel, setShowModel }) => {
    const modalRef = useRef();

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModel ? 1 : 0,
        transform: showModel ? `translateY(0%)` : `translateY(-100%)`
    });

    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowModel(false);
        }
    };
    return (
        <>
            {showModel ?
                <div className=" h-screen flex items-center  justify-center">
                    <div className="rounded-xl w-7/12 h-96 bg-white border-2">
                        model
                    </div>
                </div> : null}
        </>
    )
}
