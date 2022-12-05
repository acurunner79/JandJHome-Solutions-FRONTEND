import React, { useState } from 'react'
import RightNav from '../RightNav/RightNav'
import '../Hamburger/hamburger.css'



const Hamburger = () => {
    const [open, setOpen] = useState(false)

    const handleclick = () => {
        setOpen(!open)
    }

    const isOpen = () => {
        return(
            <>
                <div className='hamburger open' open={open} onClick={handleclick}>
                    <div id="one"></div>
                    <div id="two"></div>
                    <div id="three"></div>
                </div>
                <div className='right-nav open'>
                    <RightNav handleClick={handleclick}/>
                </div>
            </>
        )
    }

    const isClosed = () => {
        return(
            <>
                <div className='hamburger open' open={open} onClick={handleclick}>
                    <div id="one"></div>
                    <div id="two"></div>
                    <div id="three"></div>
                </div>
                <div className='right-nav'>
                    <RightNav handleClick={handleclick}/>
                </div>
            </>
        )
    }

    return (
        open ? isOpen() : isClosed()
    )
}

export default Hamburger