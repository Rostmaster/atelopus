const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state, action) => {

    switch (action.type) {

        case SEND_MESSAGE:

            let newMessage = {
                id: 30,
                isMine: state.newMessageText.isMine,
                message: state.newMessageText.message
            };
            state.MESSAGES.push(newMessage);
            state.newMessageText.text = '';
            return state;

        case UPDATE_NEW_MESSAGE_TEXT:

            state.newMessageText.message = action.message;
            state.newMessageText.isMine = action.isMine;
            return state;

        default:
            return state;
    }
}

export const sendMessageActionCreator = () =>
    ({type: SEND_MESSAGE});

export const updateNewMessageTextActionCreator = (newMessage) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, message: newMessage.TEXT, isMine: newMessage.STATUS});


export default dialogsReducer;