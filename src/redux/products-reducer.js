//Imports
import {productsAPI} from "../api/api";

// Actions
const SET_PRODUCTS = 'SET-PRODUCTS';
const GET_FILTER_RESULTS = 'GER-FILTER-RESULTS';
const ADD_KEY_TO_FILTER = 'ADD-KEY-TO-FILTER';

// Action-creators
export const setProducts = (products) => ({type: SET_PRODUCTS, products}); // установить отели
export const addKeyToFilter = (name, value) => ({type: ADD_KEY_TO_FILTER, payload: {name, value}});
export const getFilterResults = () => ({type: GET_FILTER_RESULTS});


// Thunks(преобразователи)
export const getProducts = () => {
    return (dispatch) => {
        //   debugger;
        dispatch(setProducts(productsAPI.getProducts()));
    }
};

export const setFilter = (e) => dispatch => {
    dispatch(setProducts(productsAPI.getProducts()));

    if (e.target.name === 'dateTo' || e.target.name === 'dateFrom') {
        let date = new Date(e.target.value).getTime();
        dispatch(addKeyToFilter(e.target.name, date));
    }

    if (e.target.name === 'inStock') {
        dispatch(addKeyToFilter(e.target.name, e.target.checked));
    }

    if(e.target.name === 'priceTo' ||
        e.target.name === 'priceFrom'){
        let price = parseInt(e.target.value);
        dispatch(addKeyToFilter(e.target.name,price));
    }

    if(e.target.name === 'color') {
        dispatch(addKeyToFilter(e.target.name, e.target.value))
    }

    dispatch(getFilterResults());

};

// export const getFilterResult = () => dispatch => {
//
//
// }

// Initial state
let initialState = {
    products: [],
    filter: {}
};


// reducer function
const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
        case SET_PRODUCTS: {
            return {...state, products: action.products}
        }

        case ADD_KEY_TO_FILTER: {
            return Object.assign({}, state, {
                filter: {
                    ...state.filter,
                    [action.payload.name]: action.payload.value
                }
            });
        }

        case GET_FILTER_RESULTS: {
            let filters = {...state.filter};
            let array = [...state.products];

            let resultArray = (array, filters) => {
                let filters_arr = filters;


                // filters all elements passing the criteria
                let price = array.filter( item => {

                    if (filters_arr.priceTo && filters_arr.priceFrom) {
                        return (item.price >= filters_arr.priceFrom && item.price <= filters_arr.priceTo)
                    }
                    if (filters_arr.priceTo) {
                        return ( item.price <= filters_arr.priceTo)
                    }
                    if (filters_arr.priceFrom) {
                        return ( item.price >= filters_arr.priceFrom)
                    }

                });

                let date = array.filter(item => {
                    item.issueDate = new Date(item.issueDate);
                    if (filters.dateFrom && filters.dateTo) {
                        return item.issueDate.getTime() >= filters.dateFrom &&
                            item.issueDate.getTime() <= filters.dateTo;
                    } else if (filters.dateFrom) {
                        return item.issueDate.getTime() >= filters.dateFrom
                    } else if (filters.dateTo){
                        return item.issueDate.getTime() <= filters.dateTo;
                    } else {
                        return item
                    }
                });

                let color = array.filter( item => {

                    if (filters_arr.color) {
                        return filters_arr.color === item.color
                    }

                });

                let inStock = array.filter(item => {
                    if (filters_arr.inStock) {
                        return item.inStock === true
                    } else {
                        return item.inStock === false
                    }
                });

                //let result = [].concat(price, date, color, inStock);


                return color;
            };
            let result = resultArray(array, filters);
            return {...state, products: result}
        }
    }
    return state;
};

export default productsReducer;