import React from 'react';
import style from './Dialogs.module.css';
import Contact from './Contact/Contact';
import Message from './Message/Message';

const Dialogs = (props) => {


    let contactElements = props.dialogPage.CONTACTS.map(data => {
        return <Contact name={data.name} id={data.id} img={data.img} key={data.id} />
    });

    let messageElements = props.dialogPage.MESSAGES.map(data => {
        return <Message isMine={data.isMine} text={data.message} key={data.id}/>
    });

    let sendMessage = () => {
        debugger;
        props.sendMessage();
    };

    let onMessageChange = (event) => {

        let text = event.target.value;
        let isMine = false;
        let MESSAGE = {TEXT: text, STATUS: isMine};

        props.onMessageChange(MESSAGE);
    };
    return (
        <div className={style.dialogs}>

            <div className={style.dialogItems}>
                {contactElements}
            </div>

            <div className={style.messages}>
                {messageElements}
                <div className={style.textArea}>
                    <button onClick={sendMessage}>{props.dialogPage.sendBtnText}</button>
                    <textarea onChange={onMessageChange}
                              value={props.dialogPage.newMessageText.message}
                              placeholder={props.dialogPage.newMessagePlaceholder}
                              autoFocus={true}>
                    </textarea>

                </div>
            </div>

        </div>);
};

export default Dialogs
