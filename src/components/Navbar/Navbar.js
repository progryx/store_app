import React, {Component} from 'react';
import navbar from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="nav flex-column nav-pills my-3 p-3 bg-white rounded shadow-sm">
                <NavLink to="/profile" activeClassName={navbar.active} className="nav-link border-bottom border-gray pb-2 mb-0">Profile</NavLink>
                <NavLink to="/users" activeClassName={navbar.active} className="nav-link border-bottom border-gray pb-2 mb-0">Users</NavLink>
        </nav>
    );
}

export default Navbar;