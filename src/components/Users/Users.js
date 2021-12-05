import React from "react";
import style from './Users.module.css'
import userPhoto from './../../asserts/image/user_image.jpg'
import {NavLink} from "react-router-dom";

export const UsersFunc = (props) => {
        let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
        let pages = [];
        for (let i=0; i <= pagesCount; i++) {
            pages.push(i);
        }
    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span onClick={() => {
                        props.onPageChanged(p)
                    }} className={props.currentPage === p && style.selectedPage}>{p}</span>
                })}
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
                                        ? <button onClick={() => {
                                            props.unfollow(u.id)
                                        }}>UnFollow</button>
                                        : <button onClick={() => {
                                            props.follow(u.id)
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

