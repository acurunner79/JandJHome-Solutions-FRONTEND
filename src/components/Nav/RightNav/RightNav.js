import React from "react";
import { Link } from "gatsby";
import '../RightNav/rightnav.css'




const RightNav = () => {
    return(
        <div>
            <nav>
                <ul>
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

export default RightNav
