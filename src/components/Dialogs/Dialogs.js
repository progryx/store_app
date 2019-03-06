import React, {Component} from 'react';
import Message from "./Message/Message";
import Dialogitem from "./Dialogitem/Dialogitem";
import style from "./Dialogs.module.css";
import {sendMessageActionCreator, updateDialogActionCreator} from "../../redux/State";



const Dialogs = (props) => {




   let messages = props.messagesData.messages.map( m => <Message message={m.message}/>);

    //debugger;
   let dialogs = props.dialogsData.map ( dialog =>  <Dialogitem id={dialog.id} name={dialog.name}/> );

   let textAreaRef = React.createRef();

   let updateCurrentMessage = () => {
      // debugger;
       let message = textAreaRef.current.value;
       let action = updateDialogActionCreator(message);
       props.dispatch(action);
   };

   let sendMessage = () => {
       //debugger;
       let action = sendMessageActionCreator();
       props.dispatch(action);
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