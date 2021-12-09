import React from "react";
import classes from './Profile.module.css'
import Profile from "./Profile";
import {connect} from "react-redux";
import {profileThunkCreator} from "../../redux/profile-reducer";
import {authRedirectHoc} from "../../Hoc/authRedirect";
import {compose} from "redux";
import Dialogs from "../Dialogs/Dialogs";

// import {withRouter} from "react-router-dom";


// import {withRouter} from "react-router";
// let withUrlDataContainerComponent = withRouter(ProfileContainer);



export class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {userId = 2}
        this.props.profileThunkCreator(userId)
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

// let withUrlDataContainerComponent = withRouter(ProfileContainer);


// let mapDispatchToProps = (dispatch) => {
//     return {
//         setUserProfileAC: (profile) => {
//             dispatch(setUserProfileAC(profile))
//         }
//     }
// }

// let withUrlDataContainerComponent = withRouter(ProfileContainer);

// export const ProfileContainerNew = connect(mapStateToProps, mapDispatchToProps
// )(withUrlDataContainerComponent)

export const ProfileContainerNew = compose(
    connect(mapStateToProps, {profileThunkCreator}),
    authRedirectHoc
)(ProfileContainer)


// export const ProfileContainerNew = connect(mapStateToProps, {profileThunkCreator}
// )(AuthRedirectComponent)
//
// let AuthRedirectComponent = authRedirectHoc(ProfileContainer)

