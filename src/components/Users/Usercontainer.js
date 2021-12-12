import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setUsers,
    unFollow,
    setUsersTotalCount,
    followingIsProgress, getUsersThunkCreator
} from "../../redux/users-reducer";

import {UsersFunc} from "./Users";
import {authRedirectHoc} from "../../Hoc/authRedirect";


class UsersAPIContainer extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)

    }
    onPageChanged = (pageNumber) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
    }
    render() {
        return  <UsersFunc totalUsersCount={this.props.totalUsersCount}
                           pageSize={this.props.pageSize}
                           currentPage={this.props.currentPage}
                           onPageChanged={this.onPageChanged}
                           users={this.props.users}
                           follow={this.props.follow}
                           unfollow={this.props.unfollow}
                           followingInProgress={this.props.followingInProgress}/>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        followingInProgress: state.usersPage.followingIsProgress


    }
}




let UsersAPIContainerRedirect = authRedirectHoc(UsersAPIContainer)


export const UsersContainer =  connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    followingIsProgress,
    getUsersThunkCreator})(UsersAPIContainerRedirect);




// let mapDispatchToProps = (dispatch) => {
//     return {
//
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unFollowAC(userId))
//         },
//         setUser: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentpage: (pageNumber) => {
//             dispatch(setCurrentPageAc(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setUsersTotalCountAc(totalCount))
//         }
//
//
//     }
//
// }