import React from 'react';
import header from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <div className={header.header}>
            <div className={header.logo}><NavLink to="/">
                <img className='rounded'
                     src="https://eddbookings.com/wp-content/uploads/2017/12/eddbookings-logo-white-300w.png"
                     alt=""/>
            </NavLink>
            </div>
        </div>
    );
}

export default Header;