import React from 'react';
import FriendsPanel from "./FriendsPanel";
import {connect} from "react-redux";


const mapStateToProps=(state)=>{
    debugger;
    return{
        friendsPanel:state.friendsPanel
    }
};
const mapDispatchToProps=()=>{
    return{

    }
};


const FriendsPanelContainer = connect(mapStateToProps,mapDispatchToProps)(FriendsPanel);
export default FriendsPanelContainer;
