import {applyMiddleware, combineReducers, createStore} from "redux";
import hotelReducer from "./hotel-reducer";
import hotelsReducer from "./hotels-reducer";
import thunkMiddleWare from "redux-thunk";
import {reducer as formReducer} from 'redux-form';

let reducers = combineReducers({ // комбинируем редюсеры, редюсер - логика компоненты
    hotelPage: hotelReducer, // название стор.объект_данных : обработчик-редюсер
    hotelsPage: hotelsReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare)); // создаем стор по комб. редюсерам и подключаем поддержку "посредника" Thunk

window.store = store;
export default store;