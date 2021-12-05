import React from "react";
import style from './Users.module.css'
import * as axios from "axios";
import userPhoto from './../../asserts/image/user_image.jpg'


export let UsersOld = (props) => {
    let getusers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUser(response.data.items)
            })
        }
    }

    return (
        <div>
            <button onClick={getusers}>Get users </button>
            <div>
                {
                    props.users.map((u) =>
                        <div key={u.id}>
                        <span>
                            <div>
                                <img className={style.photo} src={u.photos.small != null ? u.photos.small:userPhoto}/>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={ () => {props.unfollow(u.id)}}>UnFollow</button>
                                    : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
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