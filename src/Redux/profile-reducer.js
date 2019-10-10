const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {
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
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:

            let newPost = {
                id: 22,
                likesCount: 0,
                text: state.currentPostText
            };
            state.POSTS.push(newPost);
            state.currentPostText = '';
            return state;

        case UPDATE_NEW_POST_TEXT:

            state.currentPostText = action.newPostText;
            return state;

        default  :
            return state;
    }
};

export const addPostActionCreator = () =>
    ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newPostText: text});


export default profileReducer