import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {StoreContext} from "../../../Context/StoreContext";


export const MyPostsContainer = (props) => {

    // let state = props.store.getState();


    // let addPost =  () => {
    //     props.store.dispatch(addPostActionCreator())
    // };
    // let onPostChange = (newText) => {
    //     let action = updateNewPostTextActionCreator(newText)
    //     props.store.dispatch(action)
    // };
    return (
        <StoreContext.Consumer>
            {
            (store) =>{
                let state = store.getState();
                let addPost =  () => {
                    store.dispatch(addPostActionCreator())
                };
                let onPostChange = (newText) => {
                    let action = updateNewPostTextActionCreator(newText)
                    store.dispatch(action)
                };
                return (< MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts}
                          newPostText={state.profilePage.newPostText}/>)
                }

            }

        </StoreContext.Consumer>

    );
}


