import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

    let addPost = () => {

        props.addPost();


    };

    let inputChange = (event) => {

        let text = event.target.value;
        props.updateNewPostText(text);


    };


    let postElements = props.profilePage.POSTS.map(post => {
        return <Post message={post.text} likesCount={post.likesCount} key={post.id}/>});

    return (<div className={style.postBlock}>


        <div className={style.title}> My posts</div>

        <div>
            <textarea onChange={inputChange}  value={props.profilePage.currentPostText} placeholder={props.profilePage.placeholder}/>

        </div>

        <div>
            <button onClick={addPost}> {props.profilePage.addPostBtnText}</button>
        </div>


        <div className={style.posts}>
            {postElements.reverse()}
        </div>
    </div>);


};
export default MyPosts