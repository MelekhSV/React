import React from "react";
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/Profile/ProfileInfo";


// let posts = [
//     {id:1, message:'Hello worls', like:15},
//     {id:2, message: "Hi", like: 20}
// ]

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <ProfileInfo/>
                <MyPosts/>
            </div>
        </div>

    );
}
export default Profile
