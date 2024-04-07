import React, { useState } from "react";
import MobileNav from '../MobileNav/MobileNav';

import './Navbar.css';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/> {/* Use MobileNav component */}
     
            <nav className="nav-wrapper">
                <div className="nav-content">
                    <img className="logo" src="path_to_your_logo_image" alt="Logo"/>
                    <ul className="menu-list">
                        <li>
                            <a className="menu-item" href="#home">Home</a>
                        </li>
                        <li>
                            <a className="menu-item" href="#skills">Skills</a>
                        </li>
                        <li>
                            <a className="menu-item" href="#projects">Project Work</a>
                        </li>
                        <li>
                            <a className="menu-item" href="#experience">Work Experience</a>
                        </li>
                        <li>
                            <a className="menu-item" href="#contact">Contact Me</a>
                        </li>
                    
                        <button className="contact-btn" onClick={() => {}}>
                            Hire Me
                        </button>
                    </ul>
                    <button className="menu-btn" onClick={toggleMenu}> {/* Removed curly braces */}
                        <span
                            className={"material-symbols-outlines"}
                            style={{fontSize:"1.8rem"}}
                        >
                            &#x2261;
                            {openMenu ? "close" : "menu"}
                        </span>
                    </button>
                
                </div>
            </nav>
        </>
    );
}

export default Navbar;
