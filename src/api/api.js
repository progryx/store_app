// imports
import hotels from '../api/data';
import {createFilter} from 'react-search-input'

//constants
const KEYS_TO_FILTERS = ['name', 'city'];


//apis
export const hotelsAPI = {
    getHotels(ids) { // get all hotels by id's
        let rand_hotels = [];
        for (let i = 0; i < ids.length; i++) {
            let res = hotels.filter(h => h.id == ids[i]);
            rand_hotels.push(res[0]);
        }

        return rand_hotels;
    },
    getActiveHotel(hotelId) { // get current hotel by ID
        let currentHotel = hotels.filter(h => h.id == hotelId);
        return currentHotel[0];
    },
    getSearchResult(query) { // searching result
        let result = [];
        result = hotels.filter(createFilter(query, KEYS_TO_FILTERS));
        return result === undefined ? [] : result;
    }
}

// additive functions
export const randomNumberSeria = (min, max, count = 1) => { // generate random sequence of id's
    let result = [];
    let rand;
    while (result.length < count) {
        rand = Math.round(min - 0.5 + Math.random() * (max - min + 1));
        if (!result.includes(rand)) result.push(rand);
    }
    return result;
}