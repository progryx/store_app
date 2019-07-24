//imports
import {applyMiddleware, combineReducers, createStore} from "redux";
import hotelReducer from "./hotel-reducer";
import hotelsReducer from "./hotels-reducer";
import thunkMiddleWare from "redux-thunk";
import {reducer as formReducer} from 'redux-form';

//reducers combine
let reducers = combineReducers({
    hotelPage: hotelReducer,
    hotelsPage: hotelsReducer,
    form: formReducer
});

//creating store
let store = createStore(reducers, applyMiddleware(thunkMiddleWare));
export default store;