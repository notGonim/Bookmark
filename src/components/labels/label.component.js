import React, { createRef, useState } from "react";
import { createPopper } from "@popperjs/core";

const Dropdown = ({ color }) => {
    // dropdown props
    const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
    const btnDropdownRef = createRef();
    const popoverDropdownRef = createRef();
    const openDropdownPopover = () => {
        createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
            placement: "bottom-start"
        });
        setDropdownPopoverShow(true);
    };
    const closeDropdownPopover = () => {
        setDropdownPopoverShow(false);
    };
    // bg colors
    let bgColor;
    color === "white"
        ? (bgColor = "bg-blueGray-700")
        : (bgColor = "bg-" + color + "-500");
    return (
        <>
            <div className="flex w-full flex-wrap">
                <div className=" px-4">
                    <div className="relative inline-flex align-middle w-full">
                        <button className="font-extrabold  text-blue-700 text-sm   rounded-md  mb-1 px-7 py-2 shadow hover:shadow-lg outline-none focus:outline-none mr-1  ease-linear transition-all duration-150  " type="button" ref={btnDropdownRef} onClick={() => {
                            dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
                        }}>
                            Labels
                        </button>
                        <div
                            ref={popoverDropdownRef}
                            className={
                                (dropdownPopoverShow ? "block " : "hidden ") +
                                (color === "black" ? "bg-white " : bgColor + " ") +
                                "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
                            }
                            style={{ minWidth: "12rem" }}
                        >
                            <a href="#pablo" className={"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-black"} onClick={e => e.preventDefault()}>
                                Action
                            </a>
                            <a href="#pablo" className={"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-black"} onClick={e => e.preventDefault()}>
                                Action
                            </a>
                            <a href="#pablo" className={"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-black"} onClick={e => e.preventDefault()}>
                                Action
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default function Labels() {
    return (
        <>
            <Dropdown color="orange" />
        </>
    );
}