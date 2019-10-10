import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator,updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";


const MyPosts = (props) => {

    let addPost = () => {

        props.dispatch(addPostActionCreator());


    };

    let inputChange = (event) => {

        let text = event.target.value;
        props.dispatch(updateNewPostTextActionCreator(text));


    };


    let postElements = props.POSTS.map(post => {
        return <Post message={post.text} likesCount={post.likesCount}/>
    });

    return (<div className={style.postBlock}>


        <div className={style.title}> My posts</div>

        <div>
            <textarea onChange={inputChange}  value={props.newPostText}/>

        </div>

        <div>
            <button onClick={addPost}> {props.addPostBtnText}</button>
        </div>


        <div className={style.posts}>
            {postElements.reverse()}
        </div>
    </div>);


};
export default MyPosts