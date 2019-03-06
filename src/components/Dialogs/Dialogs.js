import React, {Component} from 'react';
import Message from "./Message/Message";
import Dialogitem from "./Dialogitem/Dialogitem";
import style from "./Dialogs.module.css";



const Dialogs = (props) => {




   let messages = props.messagesData.map( m => <Message message={m.message}/>);


   let dialogs = props.dialogsData.map ( dialog =>  <Dialogitem id={dialog.id} name={dialog.name}/> );

   let textAreaRef = React.createRef();

   let getCurrentMessage = () => {


   };
   let sendMessage = () => {
       let message = textAreaRef.current.value;
       props.dispatch({type:'SEND-MESSAGE', message: message});
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
                    <textarea ref={textAreaRef} onChange={getCurrentMessage} cols="50" rows="5" value={props.currentMessage} />
                    <button onClick={sendMessage}>Отправить</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;