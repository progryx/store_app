import React, {Component} from 'react';
import Message from "./Message/Message";
import Dialogitem from "./Dialogitem/Dialogitem";
import dialogs from './Dialogs.module.css';



const Dialogs = (props) => {



    console.log(props);
  //  let messages = messagesData.map( m => <Message message={m.message}/>);


    //let dialogs = dialogsData.map ( dialog =>  <Dialogitem id={dialog.id} name={dialog.name}/> );

    return (
        <div className={dialogs.dialogs}>
            <div className={dialogs["dialogs-items"]}>
                {/*{dialogs}*/}
            </div>
            <div className={dialogs.messages}>
                <div className={dialogs.message}>
                    {/*{messages}*/}
                </div>
            </div>
        </div>
    );
}

export default Dialogs;