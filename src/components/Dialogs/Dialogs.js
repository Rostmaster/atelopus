import React from 'react';
import style from './Dialogs.module.css';
import Contact from './Contact/Contact';
import Message from './Message/Message';

const Dialogs = (props) => {


    let contactElements = props.CONTACTS.map(data => {
        return <Contact name={data.name} id={data.id} img={data.img}/>
    });

    let messageElements = props.MESSAGES.map(data => {
        return <Message isMine={data.isMine} text={data.message}/>
    });

    let sendMessage = () => {
        props.sendMessage();
    };

    let onMessageChange = (event) => {

        let text = event.target.value;
        let isMine = false;
        let MESSAGE = {TEXT: text, STATUS: isMine};

        props.onMessaageChange(MESSAGE);
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
                              value={props.newMessageText.message}
                              placeholder={props.newMessagePlaceholder}
                              autoFocus={true}>
                    </textarea>
                    <button onClick={sendMessage}>{props.sendBtnText}</button>
                </div>
            </div>

        </div>);
};

export default Dialogs
