import React from "react";
import classes from './Profile.module.css'

import ProfileInfo from "./MyPosts/Profile/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";




const Profile = (props) => {

    return (
        <div className={classes.content}>
            <div>
                <ProfileInfo profile={props.profile}/>
                <MyPostsContainer store={props.store}/>
            </div>
        </div>

    );
}
export default Profile

