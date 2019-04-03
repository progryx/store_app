import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let reducers = combineReducers({ // комбинируем редюсеры, редюсер - логика компоненты
    profilePage: profileReducer, // название стор.объект_данных : обработчик-редюсер
    messagesPage: dialogsReducer
});

let store = createStore(reducers); // создаем стор по комб. редюсерам

window.store = store;
export default store;