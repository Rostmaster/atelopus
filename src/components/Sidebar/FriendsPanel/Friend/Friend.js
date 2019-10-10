import React from 'react';
import style from './Friend.module.css';

const Friend = (props) => {


    return (
        <div className={style.friendWrapper}>

            <div className={style.logo}>
                <img className={style.pic} src={props.img} alt=' '/>
            </div>

            <div className={style.friendName}>
                {props.name}
            </div>

        </div>

    )
};
export default Friend;