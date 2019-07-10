//Импорты
import {authAPI} from "../api/api";
import React from "react";
import {Redirect} from "react-router-dom";

// Экшены
const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_LOGOUT = 'SET_USER_LOGOUT';

// Экшен-криейторы, для диспатча ( если меняется наш стейт)
export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});
export const setUserLogOut = () => ({type: SET_USER_LOGOUT});

//Санки

export const setAuth = () => {
    return (dispatch) => {
        authAPI.getAuthData().then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                dispatch(setAuthUserData(id, email, login));
            }
        });
    }
}

export const loginUser = (email, password, rememberme) => {
    return (dispatch) => {
        authAPI.setUserLogin(email, password, rememberme).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuth);
            } else if (response.resultCode === 1) {
                console.log('Bad request');
            } else {
                console.log('Need captcha');
            }
        })
    }
};

export const logOut = () => {
    debugger;
    return (dispatch) => {
        authAPI.userLogOut().then(response => {
            if (response.data.resultCode === 0) {
                debugger;
                dispatch(setUserLogOut);
            } else {
                console.log('Bad request');
            }
        });
    }
};

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
        case SET_USER_LOGOUT: {
            return {
                ...state,
                email: null,
                userId: null,
                login: null,
                isAuth: false
            }
        }
    }
    return state;
};


export default authReducer;