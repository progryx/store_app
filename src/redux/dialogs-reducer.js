const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateDialogActionCreator = (message) => ({type: UPDATE_NEW_MESSAGE, currentMessage: message });

let initialState = {dialogs: [
        {id: 1, name: 'Test_1'},
        {id: 2, name: 'Test_2'},
        {id: 3, name: 'Test_3'},
        {id: 4, name: 'Test_4'},
        {id: 5, name: 'Test_5'},
        {id: 6, name: 'Test_6'}
    ], messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: "I'm fine. You?"},
        {id: 4, message: 'Me too'},
        {id: 5, message: 'Test_5'},
        {id: 6, message: 'Test_6'}
    ], currentMessage: ''};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        default : return state;
        case SEND_MESSAGE: {
            return {
                ...state,
                currentMessage: '',
                messages: [...state.messages, {id: 7, message: state.currentMessage}]
            };
        }
        case UPDATE_NEW_MESSAGE: {
            return {
                ...state,
                currentMessage: action.currentMessage
            };
        }
    }
    return state;
};

export default dialogsReducer;