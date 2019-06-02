import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({ // комбинируем редюсеры, редюсер - логика компоненты
    profilePage: profileReducer, // название стор.объект_данных : обработчик-редюсер
    messagesPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(reducers); // создаем стор по комб. редюсерам

window.store = store;
export default store;