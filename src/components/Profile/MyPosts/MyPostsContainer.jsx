import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>{
            (store) => {

                let addPost = () => {

                    let action = addPostActionCreator();
                    store.dispatch(action);

                };

                let updateNewPostText = (text) => {
                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action);

                };

                return (
                    <MyPosts addPost={addPost}
                             updateNewPostText={updateNewPostText}
                             profilePage={store.getState().profilePage}/>
                );
            }
        }
        </StoreContext.Consumer>

    );


};
export default MyPostsContainer;