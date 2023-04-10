import React from 'react';
// import {Link} from "react-router-dom";

export const Navbar = (props) => {
    return (
        <>
            <nav id='Navbar'>
                <span id='logo'>Text Analyzer</span>
                <ul id='options'>
                    {/* <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                    <li><Link to="/Signin">Sign in</Link></li> */}

                    <li><a href="/">Home</a></li>
                    <li><a href="/About">About</a></li>
                    <li><a href="/Contact">Contact</a></li>
                    <li><a href="/Signin">Sign in</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;