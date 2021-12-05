// import React from "react";
// import * as axios from "axios";
// import {UsersFunc} from "./Users";
//
//
// export class UsersAPIComponent extends React.Component {
//     // constructor(props) {
//     //     super(props);
//     // }
//     componentDidMount() {
//     axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
//         this.props.setUser(response.data.items);
//         this.props.setTotalUsersCount(response.data.totalCount)})
//     }
//     onPageChanged = (pageNumber) => {
//         this.props.setCurrentpage(pageNumber)
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
//         this.props.setUser(response.data.items)})
//     }
//     render() {
//          return  <UsersFunc totalUsersCount={this.props.totalUsersCount}
//                             pageSize={this.props.pageSize}
//                             currentPage={this.props.currentPage}
//                             onPageChanged={this.onPageChanged}
//                             users={this.props.users}
//                             follow={this.props.follow}
//                             unfollow={this.props.unfollow}/>
//     }
// }

