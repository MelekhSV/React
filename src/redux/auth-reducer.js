import {authApi, userApi} from "../api/Api";
import {setUserProfileAC} from "./profile-reducer";
import {stopSubmit} from 'redux-form'
const SET_USERS_DATA = 'SET-USERS-DATA'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuths: false
};
export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USERS_DATA:
            return {
                ...state,
                ...action.payload
            }
    }
}

export const setUserData = (userid, email, login, isAuth) => ({type: SET_USERS_DATA, payload:{userid, email, login,isAuth}})

export const authThunkCreator = () => {
    return authApi.me().then(response => {
            if (response.data.resultCode === 0) {
                let {id, email , login} = response.data.data
                dispatch(setUserData(id, email, login, true))
            }
        })
    }


export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authApi.login(email, password, rememberMe).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(authThunkCreator())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
                stopSubmit('login', {_error:message});
                dispatch(action)
            }
        })
    }
}

export const logout = () => {
    return (dispatch) => {
        authApi.logout().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserData(null, null, null, false))

            }
        })
    }
}



