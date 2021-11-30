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
            ]
        }
    },
    _callSubscriber ()  {
        console.log('State change')
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },



    addPost () {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            like: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = ' ';
        this._callSubscriber(this._state);
    },
    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    dispatch (action) {

    }

    getstate (){
        return this._state;
    }

}

window.state = store


