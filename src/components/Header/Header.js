import React, { Component } from 'react';
import header from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
    <div className={header.header}>

        <div className={header.logo}><img className='rounded' src="https://www.freelogodesign.org/Content/img/logo-ex-7.png" alt=""/></div>

        <div className={header.login}>
            {props.isAuth ? <span> {props.login}</span>  :  <NavLink to={'/login'} className='btn btn-info'>Login</NavLink>}

        </div>
    </div>
    );
}

export default Header;