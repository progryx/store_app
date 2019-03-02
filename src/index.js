import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: "I'm fine. You?"},
    {id: 4, message: 'Me too'},
    {id: 5, message: 'Test_5'},
    {id: 6, message: 'Test_6'}
];

let dialogsData = [
    {id: 1, name: 'Test_1'},
    {id: 2, name: 'Test_2'},
    {id: 3, name: 'Test_3'},
    {id: 4, name: 'Test_4'},
    {id: 5, name: 'Test_5'},
    {id: 6, name: 'Test_6'}
];

ReactDOM.render(<App messagesData={messagesData} dialogsData={dialogsData} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
