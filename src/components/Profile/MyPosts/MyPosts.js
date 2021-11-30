import React from "react";
import classes from './MyPosts.module.css'
import Posts from "./Post/Posts";
import {updateNewPostText} from "../../../redux/state";





const MyPosts = (props) => {
    let postsElements = props.posts.map((p) => <Posts message={p.message} like={p.like} /> );

    let addPost =  () => {
        props.addPost()
    };

    let newPostElement = React.createRef();

    let onPostChange = () => {
        let newText = newPostElement.current.value;
        console.log()
        props.updateNewPostText(newText)

    }
    return (
            <div className={classes.postBlock}>
                <h3>My post</h3>
                <div>
                    <div>
                        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                    </div>
                    <button onClick={addPost}> Add post</button>
                </div>
                <div className={classes.posts}>
                    {postsElements}
                </div>
            </div>
    );
}

export default MyPosts
