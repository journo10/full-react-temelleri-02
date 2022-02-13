import React from 'react';
import { NavLink, } from "react-router-dom"
import "./styles.css"
function Navbar() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeClassName="active">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/users" activeClassName="active">
                            Users
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
