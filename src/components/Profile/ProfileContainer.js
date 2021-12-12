import React from "react";
import classes from './Profile.module.css'
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, profileThunkCreator, updateStatus} from "../../redux/profile-reducer";
import {authRedirectHoc} from "../../Hoc/authRedirect";
import {compose} from "redux";
import Dialogs from "../Dialogs/Dialogs";
import {getFirstHiddenTime} from "web-vitals/dist/modules/lib/polyfills/getFirstHiddenTimePolyfill";

// import {withRouter} from "react-router-dom";


// import {withRouter} from "react-router";
// let withUrlDataContainerComponent = withRouter(ProfileContainer);



export class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId){
                this.props.history.push('/login')
            }
        }
        this.props.profileThunkCreator(userId)
        this.props.getStatus(userId);
    }
    render() {
        return (
            <div className={classes.content}>
                <div>
                    <Profile {...this.props}
                             profile={this.props.profile}
                             status={this.props.status}
                             updateStatus={this.props.updateStatus}/>
                </div>
            </div>
        );
    }
}



let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuths: state.auth.isAuths,
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
    connect(mapStateToProps, {profileThunkCreator, getStatus, updateStatus}),
    authRedirectHoc
)(ProfileContainer)


// export const ProfileContainerNew = connect(mapStateToProps, {profileThunkCreator}
// )(AuthRedirectComponent)
//
// let AuthRedirectComponent = authRedirectHoc(ProfileContainer)

