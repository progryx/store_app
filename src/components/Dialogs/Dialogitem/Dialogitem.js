import React, {Component} from 'react';
import dialogs from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogitem = (props) => {

    return (
        <div className={dialogs["dialogs-item"]}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default Dialogitem;