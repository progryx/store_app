const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

export const followActionCreator = (userId) => ({type: FOLLOW, userId});
export const unfollowActionCreator = (userId) => ({type: UNFOLLOW});
export const setUsersActionCreator = (users) => ({type: SET_USERS, users});

let initialState = {
    users: [
        {id: 1, photoUrl: 'https://cs8.pikabu.ru/avatars/2737/v2737573-1578567675.png', followed: true, fullName: 'Daenerys', status: 'I am cool', location: {city: 'Kings Landing', country: 'Vesteros'}},
        {id: 2, photoUrl: 'https://cs8.pikabu.ru/avatars/933/v933333-2130718137.png', followed: true, fullName: 'Max', status: 'I am bad', location: {city: 'Moscow', country: 'Russia'}},
        {id: 3, photoUrl: 'https://cs8.pikabu.ru/avatars/1757/v1757641-107825703.png', followed: true, fullName: 'Vasya', status: 'I am bro', location: {city: 'Kazan', country: 'Russia'}},
        {id: 4, photoUrl: 'https://cs8.pikabu.ru/avatars/2495/v2495311-1537928548.png', followed: false, fullName: 'Lesha', status: 'Go go power rangers', location: {city: 'Moscow', country: 'Russia'}}
    ]
};

const usersReducer = (state = initialState, action) => {

    switch (action.type){
        default: return state; // ничего не происходит, возвращает то что пришло

        case FOLLOW: {
            let nextState = {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: true
                        }
                    }
                })
            }
        }
        case UNFOLLOW: {
            let nextState = {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: false
                        }
                    }
                })
            }
        }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users ]}
        }
    }
    return state;
};


export default usersReducer;