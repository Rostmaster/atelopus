import React from 'react';
import style from './Dialogs.module.css';
import Contact from './Contact/Contact';
import Message from './Message/Message';
import {updateNewMessageTextActionCreator, sendMessageActionCreator} from "../../Redux/dialogs-reducer";

const Dialogs = (props) => {


    let contactElements = props.dialogPage.CONTACTS.map(data => {
        return <Contact name={data.name} id={data.id} img={data.img}/>
    });

    let messageElements = props.dialogPage.MESSAGES.map(data => {
        return <Message isMine={data.isMine} text={data.message}/>
    });

    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator());
    };

    let onMessageChange = (event) => {

        let text = event.target.value;
        let isMine = false;
        let MESSAGE = {TEXT: text, STATUS: isMine};
        props.dispatch(updateNewMessageTextActionCreator(MESSAGE));
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
                              value={props.dialogPage.newMessageText.message}
                              placeholder={props.dialogPage.newMessagePlaceholder}
                              autoFocus={true}>
                    </textarea>
                    <button onClick={sendMessage}>{props.dialogPage.sendBtnText}</button>
                </div>
            </div>

        </div>);
};

export default Dialogs
