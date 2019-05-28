import React, {Component} from 'react';
import navbar from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="nav flex-column nav-pills">
                <NavLink to="/profile" activeClassName={navbar.active} className="nav-link">Profile</NavLink>
                <NavLink to="/dialogs" activeClassName={navbar.active} className="nav-link">Messages</NavLink>
                <NavLink to="/news" activeClassName={navbar.active} className="nav-link">News</NavLink>
                <NavLink to="/users" activeClassName={navbar.active} className="nav-link">Users</NavLink>
                <NavLink to="/music" activeClassName={navbar.active} className="nav-link">Music</NavLink>
                <NavLink to="/settings" activeClassName={navbar.active} className="nav-link">Settings</NavLink>
        </nav>
    );
}

export default Navbar;