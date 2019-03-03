let store = {

    _subscriber() {
        console.log('changed');
    },

    _state: {
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
            ]
        }
    },

    getState() {
        return this._state;
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPost,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPost = '';
        this._subscriber(this._state);
    },
    changePost(value) {
       // debugger;
        this._state.profilePage.newPost = value;
        this._subscriber(this._state);
    },
    subscribe(observer) {
        this._subscriber = observer;
    }


};

export default store;