import React from "react";
import classes from './Profile.module.css'
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfileAC} from "../../redux/profile-reducer";
import {withRouter} from 'react-router-dom'


export class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) [
            userId = 2
        ]
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {
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
let mapDispatchToProps = (dispatch) => {
    return {
        setUserProfile: (profile) => {
            dispatch(setUserProfileAC(profile))
        }
    }
}

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export const ProfileContainerNew = connect(mapStateToProps, mapDispatchToProps
)(withUrlDataContainerComponent)


