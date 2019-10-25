import FriendsPanel from "./FriendsPanel";
import {connect} from "react-redux";


const mapStateToProps=(state)=>{
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
