import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/State';
import './index.css';
import App from './App';


export let renderAllTree = (state) => {

    ReactDOM.render(<App data={state} dispatch={store.dispatch.bind(store)}/>, document.getElementById('root'));

};

renderAllTree(store.getState());

store.subscribe(renderAllTree);
