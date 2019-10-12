const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';


let initialState = {

    CONTACTS: [
        {
            id: 1,
            name: 'Katya',
            img: 'https://minutes.co/wp-content/uploads/2019/05/develop-female-leaders-400x240.jpg'
        },
        {
            id: 2,
            name: 'Mark',
            img: 'https://t4.ftcdn.net/jpg/00/92/27/33/240_F_92273389_lehMvuG44AAR2N027aZrDhL006TGHX2s.jpg'
        },
        {id: 3, name: 'Victor', img: 'https://cdn.bulbagarden.net/upload/d/d9/VSCollector.png'},
        {
            id: 4,
            name: 'Pasha',
            img: 'https://www.goombastomp.com/wp-content/uploads/2018/11/Nintendo-Creators-Program-400x240.jpg'
        },
        {
            id: 5,
            name: 'Sasha',
            img: 'https://1.bp.blogspot.com/-11Ix-WXVOOY/Vr6OosMWTsI/AAAAAAAAWnc/ZP1HrTbkqsg/s400/Screen%2BShot%2B2016-02-12%2Bat%2B8.00.36%2BPM.png'
        },
        {
            id: 6,
            name: 'Rustam',
            img: 'https://www.valigiablu.it/wp-content/uploads/2015/06/cookies11-e1433316325697.jpg'
        },
        {id: 7, name: 'Igor', img: 'https://cdn.bulbagarden.net/upload/2/27/VSScientist_M.png'}
    ],      //Contact's id, Name and img

    MESSAGES: [
        {id: 0, isMine: true, message: 'Hi'},
        {id: 1, isMine: false, message: 'Hi. how are You?'},
        {id: 2, isMine: true, message: 'I\'m O\'key and You???'},
        {id: 3, isMine: false, message: 'Great, thanks.'},
        {id: 4, isMine: true, message: 'Yo'},
        {id: 5, isMine: false, message: 'Yo'}
    ],      //Message's id,state and text

    newMessageText: {
        message: '',
        isMine: true
    },

    sendBtnText: 'Send',

    newMessagePlaceholder: 'Enter your message'
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case SEND_MESSAGE: {
            let stateCopy = {...state};
            stateCopy.MESSAGES = [...state.MESSAGES];
            stateCopy.newMessageText = {...state.newMessageText};

            let newMessage = {
                id: 30,
                isMine: stateCopy.newMessageText.isMine,
                message: stateCopy.newMessageText.message
            };

            stateCopy.MESSAGES.push(newMessage);
            stateCopy.newMessageText.message = '';
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = {...state};
            stateCopy.newMessageText = {...state.newMessageText};
            stateCopy.newMessageText.message = action.message;
            stateCopy.newMessageText.isMine = action.isMine;
            return stateCopy;

        }
        default:
            return state;
    }
};

export const sendMessageActionCreator = () =>
    ({type: SEND_MESSAGE});

export const updateNewMessageTextActionCreator = (newMessage) => {
    return ({type: UPDATE_NEW_MESSAGE_TEXT, message: newMessage.TEXT, isMine: newMessage.STATUS});

};
export default dialogsReducer;