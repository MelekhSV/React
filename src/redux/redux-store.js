import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogReducer} from "./dialogs-reducer";
import {sideReducer} from "./sidebar-reducer";
import {userReducer} from "./users-reducer";



let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogReducer,
    sitebar: sideReducer,
    usersPage: userReducer
})

export let store = createStore(reducers);
