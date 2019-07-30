// imports
import products from '../api/data';
import {createFilter} from 'react-search-input'


//apis
export const productsAPI = {
    getProducts() { // get all products by id's
      return [...products];
    }
}

export const cartAPI = {
    addProduct(id) { // get all products by id's
        let resultArr = products.filter( p => p.id === id);
       // debugger;
        return resultArr[0];
    }
};

export const authAPI = {
    getAuthData() {
        let authData = JSON.parse(localStorage.getItem('authData'));
        return authData;
    },
    signUpUser(email,password) {
        let authData = {
            userId: 1,
            email,
            password: password,
            isAuth: false
        };
        return localStorage.setItem('authData',JSON.stringify(authData));
    },
    loginUser(email,password) {
        let currentUser = JSON.parse(localStorage.getItem('authData'));
        if (email && password) {
            if (email === currentUser.email) {
                if (password === currentUser.password) {
                    return localStorage.setItem('authData',JSON.stringify({...currentUser,isAuth: true}));
                }
            }
        }

        },
    userLogOut() {
        let currentUser = JSON.parse(localStorage.getItem('authData'));
        localStorage.setItem('authData',JSON.stringify({...currentUser,isAuth: false}));
        return this.getAuthData();
    }
}