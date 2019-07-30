//Импорты
import {authAPI} from "../api/api";
import React from "react";

// Экшены
const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_LOGOUT = 'SET_USER_LOGOUT';

// Экшен-криейторы, для диспатча ( если меняется наш стейт)
export const setAuthUserData = (userId, email, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, isAuth}});
export const setUserLogOut = (email, isAuth,password, userId) => ({type: SET_USER_LOGOUT, payload: {userId, email, isAuth}});



//Санки
export const setAuth = () => dispatch => { // getauthuserdata
                let {userId,email,password,isAuth} = authAPI.getAuthData();
                dispatch(setAuthUserData(userId, email, isAuth));
};

export const loginUser = (email, password) => dispatch => {
    authAPI.loginUser(email, password);
    dispatch(setAuth()); // при вызове другой санки в диспатче, вызываем ее через скобки
};

export const signUpUser = (email, password) => dispatch => {
    authAPI.signUpUser(email, password);
};

export const logOut = () => dispatch => {
    dispatch(setUserLogOut(authAPI.userLogOut()));
};


// Начальное значение
let initialState = {
    userId: null,
    email: null,
    isAuth: false
};


// Главная функция
const authReducer = (state = initialState, action) => { // на входе начальное значение и входящий экшен
    // debugger;

    switch (action.type) {
        default:
            return state; // ничего не происходит, возвращает то что пришло
        case SET_USER_DATA: {
            //debugger;
            return {
                ...state,
                ...action.payload
            }
        }
        case SET_USER_LOGOUT: {
            return {
                ...state,
                ...action.payload
            }
        }
    }
    return state;
};


export default authReducer;