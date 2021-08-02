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
            {showModel ? <div style={animation} className="p-9">Model</div> : null}
        </>
    )
}
