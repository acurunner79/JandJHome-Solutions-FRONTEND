import React from "react";
import { Link } from 'gatsby'
import '../Navbar/navbar.css'


const Navbar = () => {
    return(
        <div id="nav-container">
            <nav id="navbar">
                <img id="nav-logo" src="https://res.cloudinary.com/acurunner79/image/upload/v1670989313/FullLogo_Transparent_NoBuffer_hxk08r.png"/>
                <ul id="nav-links">
                    <Link to="/">
                        <li className="nav-link-indiv">Home</li>
                    </Link>
                    <Link to="/contact">
                        <li className="nav-link-indiv">Contact Us</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar