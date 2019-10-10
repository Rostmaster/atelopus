import React from 'react';
// import style from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {


    return (

        <div>

            <ProfileInfo/>
            <MyPosts POSTS={props.profilePage.POSTS}
                     dispatch={props.dispatch}
                     newPostText={props.profilePage.currentPostText}
                     addPostBtnText={props.profilePage.addPostBtnText}
            />

        </div>);
};
export default Profile;