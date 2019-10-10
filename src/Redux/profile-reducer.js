const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {

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
    ({type: UPDATE_NEW_POST_TEXT, newPostText: text})


export default profileReducer