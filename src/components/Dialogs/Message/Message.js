import React, {Component} from 'react';
import dialogs from './../Dialogs.module.css';

const Message = (props) => {
    return (
        <div className={dialogs.message}>{props.message}{console.log(props)}</div>

    )
}
export default Message;