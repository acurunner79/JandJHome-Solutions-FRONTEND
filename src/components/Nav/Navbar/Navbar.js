import React from "react";
import { Link } from 'gatsby'
import '../Navbar/navbar.css'


const Navbar = () => {
    return(
        <div id="nav-container">
            <nav id="navbar">
                <ul id="nav-links">
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/contact">
                        <li>Contact Us</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar