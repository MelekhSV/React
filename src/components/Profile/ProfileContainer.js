import React from "react";
import classes from './Profile.module.css'
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfileAC} from "../../redux/profile-reducer";







export class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data)})
    }

    render ()  {
        return (
            <div className={classes.content}>
                <div>
                    <Profile {...this.props} profile={this.props.profile}/>
                </div>
            </div>

        );
    }
}
let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

export const ProfileContainerNew = connect(mapStateToProps, {
    setUserProfile: setUserProfileAC
})(ProfileContainer)


