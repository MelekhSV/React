const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'


export const profileReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                like: 0
            };
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state
        default:
            return state

    }
    //
    // if (action.type === ADD_POST) {
    //     let newPost = {
    //         id: 5,
    //         message: state.newPostText,
    //         like: 0
    //     };
    //     state.posts.push(newPost);
    //     state.newPostText = ' ';
    // } else if (action.type === UPDATE_NEW_POST_TEXT) {
    //     state.newPostText = action.newText;
    //
    // }


}

export const addPostActionCreator = () => {
    return (
        {type: ADD_POST}
    )
}
export const updateNewPostTextActionCreator = (newText) => ({type:UPDATE_NEW_POST_TEXT, newText:newText})