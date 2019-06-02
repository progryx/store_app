import React, { Component } from 'react';
import header from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    debugger;
    return (
    <header className={header.header}>

        <div className="col-2"><img className='rounded' src="https://www.freelogodesign.org/Content/img/logo-ex-7.png" alt=""/></div>
        <div className="col-8"></div>
        <div className="col-2">
            {props.isAuth ? <span>{props.login}</span>  :  <NavLink to={'/login'} className='btn btn-info'>Login</NavLink>}

        </div>
    </header>
    );
}

export default Header;