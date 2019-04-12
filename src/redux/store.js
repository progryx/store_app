import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

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
        this._state.profilePage = profileReducer(action, this._state.profilePage); // редьюсер принимает экшен из диспатча и конкретную часть данных из СТОРа, изменяет ее и возвращает эту часть в измененном виде.
        this._state.messagesPage = dialogsReducer(action, this._state.messagesPage);
        debugger;
        this._subscriber(this._state);
    }

};



window.store = store;

export default store;