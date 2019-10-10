import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {

    _state: {

        profilePage: {

            POSTS: [
                {id: 0, likesCount: 10, text: 'It is my 5th post'},
                {id: 1, likesCount: 65, text: 'You are good'},
                {id: 3, likesCount: 39, text: 'Great, thanks.'},
                {id: 2, likesCount: 44, text: '1 more'},
                {id: 4, likesCount: 13, text: 'Yo'},
                {id: 5, likesCount: 9, text: 'Yo'}
            ],         //Post's id, like counter and text

            currentPostText: '',

            addPostBtnText: 'Add'
        },

        dialogPage: {

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
        },

        sideBar: {
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
            ],

            tabs: {
                profile: 'Profile',
                messages: 'Messages',
                news: 'News',
                music: 'Music',
                settings: 'Settings',
                friends: 'Friends'
            }

        },


    },
    _callSubscriber() {
        console.log("State changed")
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
        this._state.sideBar = sidebarReducer(this._state.sideBar, action);

        this._callSubscriber(this._state);
    }

};

export default store;
window.store = store;
