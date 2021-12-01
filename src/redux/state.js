const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'
const SEND_MESSAGE = 'SEND-MESSAGE'

export let store = {
    _state : {
        profilePage:{
            posts: [
                {id: 1, message: 'Hello worls', like: 15},
                {id: 2, message: "Hi", like: 20}
            ],
            newPostText:'hello world'
        },
        messagesPage:{

            dialogs: [
                {id: 1, name: 'dima'},
                {id: 2, name: 'Sveta'}
            ],
            messages: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'How are you'}
            ],
            newMessageText:' '
        }
    },
    _callSubscriber ()  {
        console.log('State change')
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },
    dispatch (action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                like: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = ' ';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE) {
            this._state.messagesPage.newMessageText = action.body;
            this._callSubscriber(this._state)
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.messagesPage.newMessageText;
            this._state.messagesPage.newMessageText = '';
            this._state.messagesPage.messages.push({id: 6, message: body})
            this._callSubscriber(this._state)
        }
    },
    getState (){
        return this._state;
    }
}

export const addPostActionCreator = () => {
    return (
        {type: ADD_POST}
    )
}
export const updateNewPostTextActionCreator = (newText) => ({type:UPDATE_NEW_POST_TEXT, newText:newText})

export const sendMessageCreator = () => {
    return (
        {type: SEND_MESSAGE}
    )
}
export const updateNewMessageBodyCreator = (body) => ({type:UPDATE_NEW_MESSAGE
    , body:body})

window.state = store


