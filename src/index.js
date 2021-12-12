import React from 'react';
import './index.css';
import {store} from "./redux/redux-store";
import ReactDOM from 'react-dom';
import './index.css';
import {newApp} from './App';
import {Provider} from "react-redux";


ReactDOM.render(
    <Provider store={store}>
        <newApp/>
    </Provider>,
    document.getElementById('root')
);








