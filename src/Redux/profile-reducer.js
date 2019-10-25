const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';


let initialState = {

    POSTS: [
        {id: 0, likesCount: 10, text: 'It is my 5th post'},
        {id: 1, likesCount: 65, text: 'You are good'},
        {id: 3, likesCount: 39, text: 'Great, thanks.'},
        {id: 2, likesCount: 44, text: '1 more'},
        {id: 4, likesCount: 13, text: 'Yo'},
        {id: 5, likesCount: 9, text: 'Yo'}
    ],         //Post's id, like counter and text

    userProfile:null,

    currentPostText: '',

    addPostBtnText: 'Add Post',

    placeholder: 'New post'
};

const profileReducer = (state = initialState, action) => {

    let stateCopy = {...state};


    switch (action.type) {

        case ADD_POST:

            let newPost = {
                id: 22,
                likesCount: 0,
                text: stateCopy.currentPostText
            };

            stateCopy.POSTS = [...state.POSTS,newPost];
            stateCopy.currentPostText = '';
            return stateCopy;

        case UPDATE_NEW_POST_TEXT:

            stateCopy.currentPostText = action.newPostText;
            return stateCopy;

        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.userProfile
            };
        default  :
            return state;
    }
};

export const addPostActionCreator = () =>
    ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newPostText: text});

export const setUserProfile = (userProfile) =>
    ({type: SET_USER_PROFILE, userProfile: userProfile});


export default profileReducer