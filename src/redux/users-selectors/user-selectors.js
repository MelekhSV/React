
export const getUsers= (state) => {
    return state.usersPage.users
}
export const getUsersSelector= (state) => {
    return getUsers(state).filter(u => true)
}

export const getUsersSuperSelector = createSelector(getUsers, (users) => {
    return users.filter(u => true)
})
// export const getUsersSuperSelector = createSelector(getUsers,getIsFetching, (users, isFetching) => {
//     return users.filter(u => true)
// })
export const getPageSize= (state) => {
    return state.usersPage.pageSize
}
export const gettotalUsersCount= (state) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage= (state) => {
    return state.usersPage.currentPage
}
export const getIsFetching= (state) => {
    return state.usersPage.isFetching
}
export const getFollowingIsProgress= (state) => {
    return state.usersPage.followingInProgress
}
