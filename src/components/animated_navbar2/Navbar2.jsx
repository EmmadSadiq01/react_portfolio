import React, { useState } from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";

const Navbar2 = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
        const NavLinks = document.querySelectorAll(".nav-link li")
        NavLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `NavLinkFade 0.5s ease-in-out forwards ${index / 7 + 0.3}s`
            }
        })

    }
    // const HideMenu = () =>{
    //     setClick(false);
    //     const NavLinks = document.querySelectorAll(".nav-link li")
    //     NavLinks.forEach((link, index) => {
    //         if (link.style.animation) {
    //             link.style.animation = ''
    //         } else {
    //             link.style.animation = `NavLinkFade 0.5s ease-in-out forwards ${index / 7 + 0.3}s`
    //         }
    //     })
    // }


    return (
        <header>
            <nav>
                <div className="logo">
                    <h4><a href="#home" className="scroll-link">EmDev</a></h4>
                </div>
                <ul className={click ? 'nav-link nav-active' : 'nav-link'}>
                    <li><Link className="scroll-link" to="/" onClick = {handleClick}>HOME </Link></li>
                    <li><Link className="scroll-link" to="/about" onClick = {handleClick}>ABOUT </Link></li>
                    <li><Link className="scroll-link" to="/services" onClick = {handleClick}>SERVICES </Link></li>
                </ul>
                <div className="burger" onClick={handleClick}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar2
