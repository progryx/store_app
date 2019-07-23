//Импорты
import hotels from '../api/data';

// Экшены
const SET_HOTELS = 'SET_HOTELS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_LOADING_STATUS = 'SET_LOADING_STATUS';

// Экшен-криейторы

export const setHotels = (users) => ({type: SET_HOTELS, hotels}); // установить отели
export const setLoadingStatus = (status) => ({type: SET_LOADING_STATUS, status});

// Thunks (преобразователи)

export const getHotels = () => { // получить всех пользователей на странице
    return (dispatch) => {
        dispatch(setHotels(hotels));
    }
};


// Начальное значение
let initialState = {
    hotels: [],
    isFetching: false
};


// Главная функция
const hotelsReducer = (state = initialState, action) => { // на входе начальное значение и входящий экшен
    switch (action.type) {
        default:
            return state; // ничего не происходит, возвращает то что пришло
        case SET_HOTELS: {
            return {...state, hotels: action.hotels}
        }
        case SET_LOADING_STATUS: {
            // debugger;
            return {...state, isFetching: action.status}
        }
    }
    return state;
};

export default hotelsReducer;