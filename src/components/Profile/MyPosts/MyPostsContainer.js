import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


// export const MyPostsContainer = (props) => {
//
//     // let state = props.store.getState();
//
//
//     // let addPost =  () => {
//     //     props.store.dispatch(addPostActionCreator())
//     // };
//     // let onPostChange = (newText) => {
//     //     let action = updateNewPostTextActionCreator(newText)
//     //     props.store.dispatch(action)
//     // };
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState();
//                     let addPost = () => {
//                         store.dispatch(addPostActionCreator())
//                     };
//                     let onPostChange = (newText) => {
//                         let action = updateNewPostTextActionCreator(newText)
//                         store.dispatch(action)
//                     };
//                     return (< MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts}
//                                       newPostText={state.profilePage.newPostText}/>)
//                 }
//
//             }
//
//         </StoreContext.Consumer>
//
//     );
// }
let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }

}

let mapDispatchToProps = (dispatch) => {
    return {
        // updateNewPostText: (newText) => {
        //     dispatch(updateNewPostTextActionCreator(newText))
        // },
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText))
        }
    }
}


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


