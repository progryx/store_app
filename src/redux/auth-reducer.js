// Экшены
const SET_USER_DATA = 'SET_USER_DATA';


// Экшен-криейторы, для диспатча
export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});

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
            //  debugger;
            return {
                ...state,
            }
        }
    }
    return state;
};


export default authReducer;