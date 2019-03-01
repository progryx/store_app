import React, {Component} from 'react';
import Message from "./Message/Message";
import Dialogitem from "./Dialogitem/Dialogitem";




const Dialogs = (props) => {

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: "I'm fine. You?"},
        {id: 4, message: 'Me too'},
        {id: 5, message: 'Test_5'},
        {id: 6, message: 'Test_6'}
    ];

    let messages = messagesData.map( m => <Message message={m.message}/>);

    let dialogsData = [
        {id: 1, name: 'Test_1'},
        {id: 2, name: 'Test_2'},
        {id: 3, name: 'Test_3'},
        {id: 4, name: 'Test_4'},
        {id: 5, name: 'Test_5'},
        {id: 6, name: 'Test_6'}
    ];
    let dialogs = dialogsData.map ( dialog =>  <Dialogitem id={dialog.id} name={dialog.name}/> );

    return (
        <div className={dialogs.dialogs}>
            <div className={dialogs["dialogs-items"]}>
                {dialogs}
            </div>
            <div className={dialogs.messages}>
                <div className={dialogs.message}>
                    {messages}
                </div>
            </div>
        </div>
    );
}

export default Dialogs;