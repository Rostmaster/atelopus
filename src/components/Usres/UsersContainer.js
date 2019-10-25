import {connect} from "react-redux";
import React from "react";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from "../../Redux/users-reducer";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage + 121}&count=${this.props.pageSize}`)// DELETE 121
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount <= this.props.pageSize * 20 ? response.data.totalCount : this.props.pageSize * 20);
                this.props.toggleIsFetching(false);
            });
    }// DELETE 121 !!!!!!!

    onPageChanged = (page) => {
        this.props.toggleIsFetching(true);

        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page + 121}&count=${this.props.pageSize}`) // DELETE 121
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.toggleIsFetching(false);
            });
    };// DELETE 121 !!!!!!!

    render() {
        return (
            <>
                {this.props.isFetching

                    ? <Preloader/>

                    : <Users totalUsersCount={this.props.totalUsersCount}
                             pageSize={this.props.pageSize}
                             currentPage={this.props.currentPage}
                             onPageChanged={this.onPageChanged}
                             users={this.props.users}
                             unfollow={this.props.unfollow}
                             follow={this.props.follow}
                    />
                }
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    };
};

export default connect(mapStateToProps,
    {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching}
    )(UsersContainer);

