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
            <App dispatch={store.dispatch.bind(store)} store={store} state={state} />
        </React.StrictMode>,
        document.getElementById('root')
    );
};
rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);





