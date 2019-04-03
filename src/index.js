import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/redux-store';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";


export let renderAllTree = (state) => {

    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
        , document.getElementById('root')
    );

};

renderAllTree();

store.subscribe(() => { // редакс не передает измененные данные при сабскрайбе. это надо делать явно.
                        //  let state = store.getState(); // запрос данных
    renderAllTree(); // передаем данные вручную
});
