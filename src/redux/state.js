import {profileReducer} from "./profile-reducer";
import {dialogReducer} from "./dialogs-reducer";
import {sideReducer} from "./sidebar-reducer";



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
        },
        sitebar:{},
    },
    _callSubscriber ()  {
        console.log('State change')
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },
    dispatch (action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = dialogReducer(this._state.messagesPage, action)
        this._state.sitebar = sideReducer(this._state.sitebar, action)
        this._callSubscriber(this._state)
        },
    getState (){
        return this._state;
    }
}





window.state = store


