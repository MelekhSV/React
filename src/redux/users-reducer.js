import {userApi} from "../api/Api";

const FOLLOW = 'FOLLOW'
const UNFOLLOWAC = 'UNFOLLOWAC'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const FOLLOWING_IS_PROGRESS = 'FOLLOWING-IS-PROGRESS'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage:1,
    isFetching: true,
    followingInProgress: []

};


export const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case UNFOLLOWAC:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed:false}
                    }
                    return u
                })
            }
        case SET_USERS: {
            return {
                ...state, users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state,totalUsersCount: action.count }
        }
        case FOLLOWING_IS_PROGRESS: {
            return {...state,
                followingInProgress: action.isFetching ?
                    [...state.followingIsProgress, action.userId]
                    :state.followingIsProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state



    }


}

export const follow = (userId) => {
    return (
        {type: FOLLOW, userId}
    )
}
export const unFollow= (userId) => ({type: UNFOLLOWAC, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage })
export const setUsersTotalCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count:totalUsersCount })
export const followingIsProgress = (isFetching, userId) => ({type: FOLLOWING_IS_PROGRESS, isFetching, userId })

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {

        userApi.getUsers(currentPage, pageSize).then(response => {
            dispatch(setUsers(data.items));
            dispatch(setUsersTotalCount(data.totalCount))})
    }
}



export const followThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(followingIsProgress(true, userId));
        userApi.follow(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(follow(userId))
            }
            dispatch(followingIsProgress(false, userId));
        })
    }
}

export const unfollowThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(followingIsProgress(true, userId));
        userApi.unfollow(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unFollow(userId))
            }
            dispatch(followingIsProgress(false, userId));
        })
    }
}