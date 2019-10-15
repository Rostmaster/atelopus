import React from 'react';
import style from './FriendsPanel.module.css';
import Friend from "./Friend/Friend";
import {NavLink} from 'react-router-dom';


const FriendsPanel = (props) => {
    debugger;
    let FriendElements = props.friendsPanel.CONTACTS.map(friend => {
        return <Friend name={friend.name} img={friend.img} key={props.id}/>

    });

    return (
        <div className={style.friendsPanelWrapper}>
            <NavLink to="/profile">Friends</NavLink>
            <div className={style.friendItems}>

                {FriendElements}
            </div>
        </div>)
};
export default FriendsPanel;
