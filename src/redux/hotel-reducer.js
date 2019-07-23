//Imports

// Actions
const SET_HOTEL = 'SET-HOTEL';

// Action-Creators
export const setHotel = (hotel) => ({type: SET_HOTEL, hotel });

//Thunks

// export const getHotel = (hotelId = 0) => {
//     return (dispatch) => {
//
//             dispatch(setHotel(hotelId));
//
//     }
// };

let initialState = {
    id: null,
    name: null,
    image: null,
    description: null
};

const hotelReducer = (state = initialState, action) => {

    switch (action.type){
        default: return state; // ничего не происходит, возвращает то что пришло
        case SET_HOTEL: {
            return{
                ...state,
                hotel: action.hotel
            }
        }
    }
    return state;
};

export default hotelReducer;