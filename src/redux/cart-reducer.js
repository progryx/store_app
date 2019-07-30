//Imports
import {cartAPI} from "../api/api";

// Actions
const ADD_PRODUCT_TO_CART = 'ADD-TO-CART';
const REMOVE_PRODUCT_FROM_CART = 'REMOVE-FROM-CART';

// Action-creators
export const setItemToCart = (product) => ({type: ADD_PRODUCT_TO_CART, product});
export const removeItemFromCart = (id) => ({type: ADD_PRODUCT_TO_CART, id});


// Thunks(преобразователи)
export const addToCart = (productId) => {
    return (dispatch) => {
        dispatch(setItemToCart( cartAPI.addProduct(productId) ));
    }
};

export const removeFromCart = (productId) => {
    return (dispatch) => {
        debugger;
        dispatch(removeItemFromCart(productId));
    }
};


// Initial state
let initialState = {
    cart: []
};


// reducer function
const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
        case ADD_PRODUCT_TO_CART: {
            return {...state, cart: [...state.cart, action.product] }
        }
        case REMOVE_PRODUCT_FROM_CART: {
            debugger;
            return {
                ...state,
                cart: state.cart.filter( c => c.id !== action.id)
            }
        }
    }
    return state;
};

export default productsReducer;