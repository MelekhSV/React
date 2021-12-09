import {authApi, userApi} from "../api/Api";
import {setUserProfileAC} from "./profile-reducer";

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
                ...action.data,
                isAuths: true
            }
    }
}

export const setUserData = (userid, email, login) => ({type: SET_USERS_DATA, data:{userid, email, login}})

export const authThunkCreator = () => {
    return (dispatch) => {
        authApi.me().then(response => {
            if (response.data.resultCode === 0) {
                let {id, email , login} = response.data.data
                dispatch(setUserData(id, email, login))
            }
        })
    }
}



