import React from "react";
import classes from './MyPosts.module.css'
import Posts from "./Post/Posts";

export const MyPosts = ({posts}) => {
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

// const SomeComponent = (props) => { const posts = props.posts; console.log(posts) }
// const SomeComponent = (props) => { const {posts} = props; console.log(posts) }
// const SomeComponent = ({posts}) => { console.log(posts) }