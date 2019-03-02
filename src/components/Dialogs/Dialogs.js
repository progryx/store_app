import React, {Component} from 'react';
import Message from "./Message/Message";
import Dialogitem from "./Dialogitem/Dialogitem";
import style from "./Dialogs.module.css";



const Dialogs = (props) => {




   let messages = props.messagesData.map( m => <Message message={m.message}/>);


   let dialogs = props.dialogsData.map ( dialog =>  <Dialogitem id={dialog.id} name={dialog.name}/> );



    return (
        <div className={style.dialogs}>
            <div className={style["dialogs-items"]}>
                {dialogs}
            </div>
            <div className={style.messages}>
                <div className={style.message}>
                    {messages}
                </div>
            </div>
        </div>
    );
}

export default Dialogs;