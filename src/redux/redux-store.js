//imports
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleWare from "redux-thunk";
import {reducer as formReducer} from 'redux-form';
import authReducer from "./auth-reducer";
import productsReducer from "./products-reducer";
import cartReducer from "./cart-reducer";

//reducers combine
let reducers = combineReducers({
    auth: authReducer,
    productPage: productsReducer,
    cartPage: cartReducer,
    form: formReducer
});

//creating store
let store = createStore(reducers, applyMiddleware(thunkMiddleWare));
window.store = store;
export default store;