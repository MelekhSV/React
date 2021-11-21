import React from "react";
import classes from './MyPosts.module.css'
import Posts from "./Post/Posts";
// import posts from './../Profile'

let posts = [
    {id:1, message:'Hello worls', like:15},
    {id:2, message: "Hi", like: 20}
]

const MyPosts = () => {
    let postsElements = posts.map((p) => <Posts message={p.message} like={p.like} /> )

    return (
            <div className={classes.postBlock}>
                <h3>My post</h3>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <button> Add post</button>
                </div>
                <div className={classes.posts}>
                    {postsElements}
                </div>
            </div>
    );
}

export default MyPosts