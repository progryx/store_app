const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

export const followActionCreator = (userId) => ({type: FOLLOW, userId});
export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId});
export const setUsersActionCreator = (users) => ({type: SET_USERS, users});

let initialState = {
 users: []
};

const usersReducer = (state = initialState, action) => {
   // debugger;

    switch (action.type){

        default: return state; // ничего не происходит, возвращает то что пришло

        case FOLLOW: {
          //  debugger;
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: true
                        }
                    }
                    return u;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: false
                        }
                    }
                    return u;
                })
            }
        }
        case SET_USERS: {
            //debugger;
            //let nextUsers = action.users;
            return {...state, users: [...state.users, ...action.users ]}
        }
    }
    return state;
};


export default usersReducer;