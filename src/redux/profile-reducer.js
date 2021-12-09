import {profileApi, userApi} from "../api/Api";
import {followingIsProgress, unFollow} from "./users-reducer";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'

let initialState = {
    posts: [
        {id: 1, message: 'Hello worls', like: 15},
        {id: 2, message: "Hi", like: 20}
    ],
    newPostText: 'hello world',
    profile: null
};


export const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                like: 0
            };
            let stateCopy = {
                ...state,
                posts:[...state.posts, newPost],
                newPostText: ''
            };
            // stateCopy.posts = [...state.posts];
            // stateCopy.posts.push(newPost);
            // stateCopy.newPostText = ' ';
            return stateCopy
        }

        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {
                ...state,
                newPostText: action.newText
            };
            // stateCopy.newPostText = action.newText;
            return stateCopy
        }
        case SET_USER_PROFILE:{
            return  {
                ...state, profile: action.profile
            }

        }

        default:
            return state

    }
}

export const addPostActionCreator = () => {
    return (
        {type: ADD_POST}
    )
}
export const updateNewPostTextActionCreator = (newText) => ({type: UPDATE_NEW_POST_TEXT, newText: newText})
export const setUserProfileAC = (profile) => ({type: SET_USER_PROFILE, profile})



export const profileThunkCreator = (userId) => {
    return (dispatch) => {
        userApi.getProfile(userId).then(response => {
            dispatch(setUserProfileAC(response.data))
        })
    }
}