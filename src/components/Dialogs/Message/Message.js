import React from 'react';
import style from './Message.module.css';

const Message = (props) => {
    if (props.isMine)
        return (<div className={style.message + ' ' + style.myMessage}>{props.text}</div>);
    else
        return (<div className={style.message + ' ' + style.opponentMessage}>{props.text}</div>);
};
export default Message;