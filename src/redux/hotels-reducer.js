//Imports
import {hotelsAPI} from "../api/api";

// Actions
const SET_HOTELS = 'SET_HOTELS';

// Action-creators
export const setHotels = (hotels) => ({type: SET_HOTELS, hotels}); // установить отели


// Thunks(преобразователи)
export const getHotels = (ids) => { // получить всех пользователей на странице
    return (dispatch) => {
        dispatch(setHotels(hotelsAPI.getHotels(ids)));
    }
};

export const getResult = (query) => { // получить всех пользователей на странице
    return (dispatch) => {
        dispatch(setHotels(hotelsAPI.getSearchResult(query)));
    }
};


// Initial state
let initialState = {
    hotels: []
};


// reducer function
const hotelsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
        case SET_HOTELS: {
            return {...state, hotels: action.hotels}
        }
    }
    return state;
};

export default hotelsReducer;