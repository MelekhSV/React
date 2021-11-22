import React, {useState} from "react";
import classes from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/Profile/ProfileInfo";

export const Profile = () => {
    const posts = useState([
        {id:1, message:'Hello worls', like:15},
        {id:2, message: "Hi", like: 20}
    ]);
    return (
        <div className={classes.content}>
            <div>
                <ProfileInfo/>
                <MyPosts posts={posts}/>
            </div>
        </div>
    );
}


const someObject = {
    1: 2,
    3: 4,
}

const someObject = {
    1: 2,
    3: 4,
}

const someObject = {
    1: 2,
    3: 4,
    5: 6,
    7: 8
}