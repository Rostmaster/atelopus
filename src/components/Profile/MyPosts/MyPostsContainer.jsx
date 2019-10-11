import React from 'react';
import {addPostActionCreator,updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {

    let addPost = () => {

        let action = addPostActionCreator();
        props.store.dispatch(action);

    };

    let updateNewPostText = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);

    };


    return (<MyPosts addPost={addPost}
                     updateNewPostText={updateNewPostText}
                     POSTS={props.store.getState().profilePage.POSTS}
                     currentPostText={props.store.getState().profilePage.currentPostText}
                     addPostBtnText={props.store.getState().profilePage.addPostBtnText}
    />);


};
export default MyPostsContainer;