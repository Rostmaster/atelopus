import React from 'react';

import style from './Dialogs.module.css';
import Contact from './Contact/Contact';
import Message from './Message/Message';
import {updateNewMessageTextActionCreator,sendMessageActionCreator} from "../../Redux/dialogs-reducer";

const Dialogs = (props) => {

    let state = props.store.getState().dialogPage;

    let contactElements = state.CONTACTS.map(data => {
        return <Contact name={data.name} id={data.id} img={data.img}/>
    });

    let messageElements = state.MESSAGES.map(data => {
        return <Message isMine={data.isMine} text={data.message}/>
    });

    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator())
    };

    let onMessageChange = (event) => {

        let text = event.target.value;
        let isMine = false;
        let MESSAGE = { TEXT:text, STATUS:isMine};
        props.store.dispatch(updateNewMessageTextActionCreator(MESSAGE))


    };

    return (
        <div className={style.dialogs}>

            <div className={style.dialogItems}>
                {contactElements}
            </div>

            <div className={style.messages}>
                {messageElements}
                <div className={style.textArea}>

                    <textarea onChange={onMessageChange}
                              value={state.newMessageText.text}
                              placeholder={state.newMessagePlaceholder}>
                    </textarea>
                    <button onClick={sendMessage} >{state.sendBtnText}</button>
                </div>
            </div>

        </div>);
};
export default Dialogs
