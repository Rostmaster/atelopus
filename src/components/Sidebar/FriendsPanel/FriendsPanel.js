import React from 'react';
import style from './FriendsPanel.module.css';
import Friend from "./Friend/Friend";

const FriendsPanel = (props) =>{
    let FriendElements = props.sideBar.CONTACTS.map(friend=>{
        return <Friend name={friend.name} img={friend.img}/>

    });

    return (<div className={style.friendsPanelWrapper}>
        {FriendElements}
    </div>)
};
export default FriendsPanel;
