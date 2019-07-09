import React, {Component} from 'react';
import Message from "./Message/Message";
import Dialogitem from "./Dialogitem/Dialogitem";
import style from "./Dialogs.module.css";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {


    //debugger;

   let messages = props.messagesData.map( m => <Message message={m.message} key = {m.id} />); // вывод сообщений
   let dialogs = props.dialogsData.map ( dialog =>  <Dialogitem id={dialog.id} name={dialog.name} key = {dialog.id} /> ); // вывод диалогов (имена)

   let textAreaRef = React.createRef(); // создание ссылки на текстовую область

   let updateCurrentMessage = () => {
       props.updateCurrentMessage(textAreaRef.current.value);
   };

   let sendMessage = () => {
       props.sendMessage();
   };

    return (
        <div className={style.dialogs}>
            <div className={style["dialogs-items"]}>
                {dialogs}
            </div>
            <div className={style.messages}>
                <div className={style.message}>
                    {messages}
                </div>
                <div className={style["add-message"]}>
                    <textarea ref={textAreaRef} onChange={updateCurrentMessage} cols="50" rows="5" value={props.messagesData.currentMessage} />
                    <button onClick={sendMessage}>Отправить</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;