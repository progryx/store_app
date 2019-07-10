import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleWare from "redux-thunk";
import {reducer as formReducer} from 'redux-form';

let reducers = combineReducers({ // комбинируем редюсеры, редюсер - логика компоненты
    profilePage: profileReducer, // название стор.объект_данных : обработчик-редюсер
    messagesPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare)); // создаем стор по комб. редюсерам и подключаем поддержку "посредника" Thunk

window.store = store;
export default store;