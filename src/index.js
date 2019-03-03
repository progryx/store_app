import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/State';
import './index.css';
import App from './App';


export let renderAllTree = (state) => {

    ReactDOM.render(<App data={state} addPost={store.addPost.bind(store)} changePost={store.changePost.bind(store)}/>, document.getElementById('root'));

};

renderAllTree(store.getState());

store.subscribe(renderAllTree);
