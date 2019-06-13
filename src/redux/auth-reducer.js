//Импорты
import {authAPI} from "../api/api";

// Экшены
const SET_USER_DATA = 'SET_USER_DATA';

// Экшен-криейторы, для диспатча
export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});

//Санки

export const setAuth = () => {
    return (dispatch) => {
        authAPI.getAuthData().then(response => {
            if (response.data.resultCode == 0) {
                let {id, login, email} = response.data.data;
                dispatch(setAuthUserData(id, email, login));
            }
        });
    }
}

// Начальное значение
let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false

};


// Главная функция
const authReducer = (state = initialState, action) => { // на входе начальное значение и входящий экшен
    // debugger;

    switch (action.type) {

        default:
            return state; // ничего не происходит, возвращает то что пришло

        case SET_USER_DATA: {
            // debugger;
            return {
                ...state,
                email: action.data.email,
                userId: action.data.userId,
                login: action.data.login,
                isAuth: true
            }
        }
    }
    return state;
};


export default authReducer;