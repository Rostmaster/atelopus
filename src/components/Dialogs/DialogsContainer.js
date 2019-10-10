import React from 'react';
import {updateNewMessageTextActionCreator, sendMessageActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let sendMessage = () => {
        let action = sendMessageActionCreator();
        props.store.dispatch(action);
    };

    let updateMessage = (MESSAGE) => {

        let action = updateNewMessageTextActionCreator(MESSAGE);
        props.store.dispatch(action);
    };
    return (
        <Dialogs CONTACTS={props.store.getState().dialogPage.CONTACTS}
                 MESSAGES={props.store.getState().dialogPage.MESSAGES}
                 newMessageText={props.store.getState().dialogPage.newMessageText}
                 newMessagePlaceholder={props.store.getState().dialogPage.newMessagePlaceholder}
                 sendBtnText={props.store.getState().dialogPage.sendBtnText}
                 onMessaageChange={updateMessage}
                 sendMessage={sendMessage}
        />);
};

export default DialogsContainer
