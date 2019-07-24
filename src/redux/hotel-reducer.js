//Imports
import {hotelsAPI} from "../api/api";

// Actions
const SET_HOTEL = 'SET-HOTEL';

// Action-Creators
export const setHotel = (hotel) => ({type: SET_HOTEL, hotel});

//Thunks
export const getHotel = (hotelId = 0) => {
    return (dispatch) => {
        dispatch(setHotel(hotelsAPI.getActiveHotel(hotelId)));
    }
};

//Initial state
let initialState = {
    hotel: []
};

// reducer function
const hotelReducer = (state = initialState, action) => {

    switch (action.type) {
        default:
            return state;
        case SET_HOTEL: {
            return {
                ...state,
                hotel: action.hotel
            }
        }
    }
    return state;
};

export default hotelReducer;