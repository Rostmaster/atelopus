import React from 'react'
import style from "./Users.module.css";
import userPhoto from "../../assets/images/user1.png"
import {NavLink} from "react-router-dom";
import * as axios from "axios";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div className={style.userWrapper}>

            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && style.selectedPage}

                                 onClick={() => {
                                     props.onPageChanged(p);
                                 }}
                    >{p}</span>
                })}
            </div>
            {

                props.users.map(u =>
                    <div key={u.id} className={style.userBox}>

                    <span className={style.userPhoto}>
                        <div className={style.photo}>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="icon"/>
                            </NavLink>
                        </div>

                        <div>
                            {
                                u.followed
                                    ? <button onClick={() => {

                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {

                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY": "95805825-0821-463d-b2e1-e0a5525c08b4"
                                                }
                                            }
                                        )
                                            .then(response => {
                                                if (response.data.resultCode == 0) {
                                                    props.unfollow(u.id);
                                                }
                                            });

                                    }}>Unfollow</button>

                                    : <button onClick={() => {

                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {

                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY": "95805825-0821-463d-b2e1-e0a5525c08b4"
                                                }
                                            }
                                        )
                                            .then(response => {
                                                if (response.data.resultCode == 0) {
                                                    props.follow(u.id);
                                                }
                                            });

                                    }}>Follow</button>
                            };

                        </div>

                    </span>

                        <span className={style.userInfo}>

                        <div>{u.name}</div>
                        <div>{u.status}</div>
                            {/*<div>{"u.location.city"}</div>*/}
                            {/*<div>{"u.location.country"}</div>*/}

                            </span>

                    </div>
                )
            }
        </div>)
};
export default Users;