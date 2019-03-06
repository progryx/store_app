const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';
const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST = 'CHANGE-NEW-POST';
let store = {

    _subscriber() { // просто заглушка для переопределения
        console.log('changed');
    },

    _state: { // данные
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you', likesCount: 10},
                {id: 2, message: 'Hello. I\'m ok', likesCount: 15}
            ],
            newPost: ''
        },
        messagesPage: {
            dialogs: [
                {id: 1, name: 'Test_1'},
                {id: 2, name: 'Test_2'},
                {id: 3, name: 'Test_3'},
                {id: 4, name: 'Test_4'},
                {id: 5, name: 'Test_5'},
                {id: 6, name: 'Test_6'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: "I'm fine. You?"},
                {id: 4, message: 'Me too'},
                {id: 5, message: 'Test_5'},
                {id: 6, message: 'Test_6'}
            ],
            currentMessage: ''

        }
    },

    getState() { // возвращает данные
        return this._state;
    },
    subscribe(observer) { // функция, которая по сути принимает другую функцию, чтобы та стала частью стора
                         // в сабскрайбере
        this._subscriber = observer;
    },

    dispatch(action) { // обработка данных и взаимодействие с данными. компоненты вызывают диспатч, если нужжно обработать данные
       // debugger;
        if (action.type === ADD_POST) { // добавление поста в профиле
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPost, // просто заносим в новое сообщение текущий текст текстэрии
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPost = '';
            this._subscriber(this._state);
        } else if (action.type === CHANGE_NEW_POST) {
            this._state.profilePage.newPost = action.value;
            this._subscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let message = {id: 7, message: this._state.messagesPage.currentMessage};
            this._state.messagesPage.messages.push(message);
            this._state.messagesPage.currentMessage = '';
            this._subscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE) {
            //debugger;
            this._state.messagesPage.currentMessage = action.currentMessage;
            this._subscriber(this._state);
        }

    }

};

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateDialogActionCreator = (message) => ({type: UPDATE_NEW_MESSAGE, currentMessage: message });

window.store = store;

export default store;