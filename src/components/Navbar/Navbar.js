import React, {Component} from 'react';
import navbar from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="nav flex-column nav-pills my-3 p-3 bg-white rounded shadow-sm">

                <NavLink to="/profile" activeClassName={navbar.active} className="nav-link border-bottom border-gray pb-2 mb-0">Profile</NavLink>
                <NavLink to="/dialogs" activeClassName={navbar.active} className="nav-link border-bottom border-gray pb-2 mb-0">Messages</NavLink>
                <NavLink to="/news" activeClassName={navbar.active} className="nav-link border-bottom border-gray pb-2 mb-0">News</NavLink>
                <NavLink to="/users" activeClassName={navbar.active} className="nav-link border-bottom border-gray pb-2 mb-0">Users</NavLink>
                <NavLink to="/music" activeClassName={navbar.active} className="nav-link border-bottom border-gray pb-2 mb-0">Music</NavLink>
                <NavLink to="/settings" activeClassName={navbar.active} className="nav-link border-bottom border-gray pb-2 mb-0">Settings</NavLink>
        </nav>
    );
}

export default Navbar;