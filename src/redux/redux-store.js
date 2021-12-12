import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogReducer} from "./dialogs-reducer";
import {sideReducer} from "./sidebar-reducer";
import {userReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'
import {redux as formReducer} from 'redux-form'
import {appReducer} from "./app-reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogReducer,
    sitebar: sideReducer,
    usersPage: userReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})

export let store = createStore(reducers, applyMiddleware(thunkMiddleware));
