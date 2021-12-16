import React from "react";
import classes from './Profile.module.css'

import ProfileInfo from "./MyPosts/Profile/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";




const Profile = (props) => {

    return (
        <div className={classes.content}>
            <div>
                <ProfileInfo saveProfile={props.saveProfile}savePhoto={props.savePhoto} isOwner={props.isOwner}  profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
                <MyPostsContainer store={props.store}/>
            </div>
        </div>

    );
}
export default Profile

