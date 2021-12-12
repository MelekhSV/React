import {authApi, userApi} from "../api/Api";
import {setUserProfileAC} from "./profile-reducer";
import {stopSubmit} from 'redux-form'
import {authThunkCreator} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS'

let initialState = {
    initialized: false

};
export const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized:true
            }
    }
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})

export const initializeThunkCreator = () => {
    return (dispatch) => {

        let promise = dispatch(authThunkCreator());
        promise.then ( () => {
            dispatch(initializedSuccess)
        })
    }
}





