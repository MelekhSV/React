import {authApi, securityApi, userApi} from "../api/Api";
import {setUserProfileAC} from "./profile-reducer";
import {stopSubmit} from 'redux-form'
const SET_USERS_DATA = 'SET-USERS-DATA'
const GET_CAPTCHA = 'GET-CAPTCHA'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuths: false,
    captchUpl: null,
};
export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USERS_DATA:
            return {
                ...state,
                ...action.payload
            }
        case GET_CAPTCHA:
            return {
                ...state, captchUpl: action.url
            }
    }
}

export const setUserData = (userid, email, login, isAuth) => ({type: SET_USERS_DATA, payload:{userid, email, login,isAuth}})
export const getCaptchs = (url) => ({type: SET_USERS_DATA, url})

export const authThunkCreator = () => {
    return authApi.me().then(response => {
            if (response.data.resultCode === 0) {
                let {id, email , login} = response.data.data
                dispatch(setUserData(id, email, login, true))
            }
        })
    }


export const login = (email, password, rememberMe, captcha) => {
    return (dispatch) => {
        authApi.login(email, password, rememberMe).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(authThunkCreator())
            } else if (response.data.resultCode === 10) {
                dispatch(getCaptchaUrl());

            }
            let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
            dispatch(stopSubmit('login', {_error:message}));
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

export const getCaptchaUrl = () => {
    return (dispatch) => {
        securityApi.getCaptchaUrl().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getCaptchs(url))

            }
        })
    }
}



