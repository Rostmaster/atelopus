import {connect} from "react-redux";
import {followAC, setUsersAC, unFollowAC} from "../../Redux/users-reducer";
import Users from "./Users";


const mapStateToProps = (state) => {
    return {
        USERS : state.usersPage.USERS
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow:(userId)=>{
            dispatch(followAC(userId));
        },
       unfollow:(userId)=>{
            dispatch(unFollowAC(userId));
        },
        setUsers:(users)=>{
            dispatch(setUsersAC(users))
        }


    };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;
