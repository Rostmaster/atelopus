import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
    return (
        <div className={style.item}>

            <img src="https://im0-tub-ru.yandex.net/i?id=d9d10b7f627a699b59743ea63b3d291e&n=13" alt=' '/>
            {props.message}
            <div>
                <button>LIKE</button>
                <span> {props.likesCount}  likes </span>
            </div>

        </div>);
};
export default Post;