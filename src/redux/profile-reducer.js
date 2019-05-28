const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST = 'CHANGE-NEW-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

export const addPost = () => ({type: ADD_POST});
export const updatePost = (message) => ({type: CHANGE_NEW_POST, value: message });
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile });


let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 10},
        {id: 2, message: 'Hello. I\'m ok', likesCount: 15}
    ],
    newPost: '',
    profile: null

};

const profileReducer = (state = initialState, action) => {

    switch (action.type){
        default: return state; // ничего не происходит, возвращает то что пришло
        case ADD_POST: { // добавление поста в профиле
            let newPost = {
                id: 5,
                message: state.newPost, // просто заносим в новое сообщение текущий текст текстэрии
                likesCount: 0
            };
            return { // сразу создаем и возвращаем объект
                ...state, // делаем поверхностную копию
                posts: [...state.posts, newPost], // делаем глубокую копию, помещаем в конец новый пост
                newPost: '' // зануляем текущее значение
            }
        }
        case CHANGE_NEW_POST: {
            return {
                ...state,
                newPost: action.value
            }
        }
        case SET_USER_PROFILE: {
            return{
                ...state,
                profile: action.profile
            }
        }
    }
    return state;
};

export default profileReducer;