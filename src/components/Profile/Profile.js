import React from "react";
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/Profile/ProfileInfo";




const Profile = (props) => {
    return (
        <div className={classes.content}>
            <div>
                <ProfileInfo/>
                <MyPosts dispatch={props.dispatch}  posts={props.profilePage.posts} newPostText={props.profilePage.newPostText}/>
            </div>
        </div>

    );
}
export default Profile

