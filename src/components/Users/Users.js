import React from "react";
import style from './Users.module.css'
import userPhoto from './../../asserts/image/user_image.jpg'
import {NavLink} from "react-router-dom";
import {followThunkCreator, unfollowThunkCreator,} from "../../redux/users-reducer";

import {Paginator} from "../Paginator/Paginator";

export const UsersFunc = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 0; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div>
                <Paginator currentPage={props.currentPage}
                           totalUsersCount={props.totalUsersCount}
                           pageSize={props.pageSize}
                           onPageChanged={props.onPageChanged} />
            </div>
            <div>
                {
                    props.users.map((u) =>
                        <div key={u.id}>
                            <span>
                                <div>
                                    <NavLink to={'/profile/' + u.id}>
                                        <img className={style.photo}
                                             src={u.photos.small != null ? u.photos.small : userPhoto}/>
                                    </NavLink>
                                </div>
                                <div>
                                    {u.followed
                                        ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                                  onClick={() => {
                                                      unfollowThunkCreator(u.id)
                                                  }}>UnFollow</button>
                                        : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                                  onClick={() => {
                                                      followThunkCreator(u.id)
                                                  }}>Follow</button>}
                                </div>
                            </span>
                            <span>
                                <span>
                                    <div>
                                        {u.name}
                                    </div>
                                    <div>
                                        {u.status}
                                    </div>
                                </span>
                                <span>
                                    <div>
                                        {'u.location.country'}
                                    </div>
                                    <div>
                                        {'u.location.city'}
                                    </div>
                                </span>
                            </span>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

