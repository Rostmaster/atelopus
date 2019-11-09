import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/profile-reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {


    componentDidMount() {
        let userId = this.props.match.params.userId === undefined
            ? 5110
            :this.props.match.params.userId;
        axios.get("https://social-network.samuraijs.com/api/1.0/profile/"+userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            });

    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.userProfile}/>
            </div>
        );
    };
}

let mapStateToProps = (state) => ({
    userProfile:state.profilePage.userProfile
});

let withUrlContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps,{setUserProfile})(withUrlContainerComponent);