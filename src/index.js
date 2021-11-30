import React from 'react';
import './index.css';
import {store} from "./redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostText} from "./redux/state";



let rerenderEntireTree = (state) =>{
    ReactDOM.render(
        <React.StrictMode>
            <App addPost={store.addPost.bind(store)} state={state} updateNewPostText={store.updateNewPostText.bind(store)} />
        </React.StrictMode>,
        document.getElementById('root')
    );
};
rerenderEntireTree(store.getstate());

store.subscribe(rerenderEntireTree);





